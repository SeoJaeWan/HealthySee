import React, { useEffect, useState } from "react";
import BoardCom from "../../component_contet/component/board/BoardCom";
import { useDispatch, useSelector } from "react-redux";
import {
  list,
  listDetail,
  initialize,
  changeField,
} from "../../modules/board/posts";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import AskModal from "../../component_contet/common/AskModal";

const BoardForm = ({ match, history }) => {
  const [scroll, setScroll] = useState(true);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const { posts, postsCount, loading, options } = useSelector(
    ({ posts, loading }) => ({
      posts: posts.posts,
      options: posts.options,
      postsCount: posts.postsCount,
      loading: loading["posts/LIST"],
    })
  );

  const fetchMoreData = () => {
    if (postsCount < 10) {
      setScroll(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      dispatch(
        listDetail({
          id: posts[posts.length - 1].BO_Code,
          name: options.name,
          keyword: options.keyword,
          category: match.params.board,
        })
      );
    }, 1500);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: "options", key: name, value }));
  };
  // 원리는 다 구현되었다. 이제 검색시 나오는 주소, 그리고 useEffect 종속 해결하면 끝
  const onSearch = () => {
    localStorage.setItem(
      "search",
      JSON.stringify({
        id: null,
        name: options.name,
        keyword: options.keyword,
        category: match.params.board,
      })
    );
    history.push(`/Board/${match.params.board}/search`);
  };

  const onClick = (postId) => {
    history.push(`/Board/${match.params.board}/read/${postId}`);
  };

  useEffect(() => {
    setScroll(true);
    let search = localStorage.getItem("search");

    if (search) {
      let jsonSearch = JSON.parse(search);
      dispatch(list(jsonSearch));

      dispatch(
        changeField({ form: "options", key: "name", value: jsonSearch.name })
      );
      dispatch(
        changeField({
          form: "options",
          key: "keyword",
          value: jsonSearch.keyword,
        })
      );

      localStorage.removeItem("search");
    } else {
      dispatch(
        list({
          id: null,
          name: null,
          keyword: null,
          category: match.params.board,
        })
      );
    }
    // 페이지네이션도 끝 리스트 페이지도 끝 , 검색어는 localstorigy를 사용할 것을 고려해보자
    return () => {
      // 언마운트 시 초기화
      dispatch(initialize());
    };
  }, [dispatch, match]);

  const onChangeModal = () => {
    setModal(!modal);
  };

  useEffect(() => {});

  return (
    <>
      <BoardCom
        match={match}
        posts={posts}
        loading={loading}
        scroll={scroll}
        onClick={onClick}
        onChange={onChange}
        onSearch={onSearch}
        fetchMoreData={fetchMoreData}
        onChangeModal={onChangeModal}
      />
      <AskModal
        visible={modal}
        title="블라인드"
        description="블라인드 처리된 게시글입니다!"
        onCancel={onChangeModal}
        confirmText=""
        cancelText="뒤로가기"
      />
    </>
  );
};

export default withRouter(BoardForm);
