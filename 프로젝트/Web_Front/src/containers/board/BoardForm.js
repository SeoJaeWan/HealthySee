import React, { useEffect, useState } from "react";
import BoardCom from "../../component_contet/component/board/BoardCom";
import { useDispatch, useSelector } from "react-redux";
import { list, listDetail, changeField } from "../../modules/board/boardList";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import AlertModal from "../../component_contet/common/Modal/AlertModal";

const BoardForm = ({ match, history }) => {
  const [scroll, setScroll] = useState(true);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const { posts, postsCount, loading, options } = useSelector(
    ({ boardList, loading }) => ({
      posts: boardList.posts,
      options: boardList.options,
      postsCount: boardList.postsCount,
      loading: loading["posts/LIST"],
    })
  );

  const fetchMoreData = () => {
    console.log(postsCount);
    if (postsCount <= 10) {
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
    console.log("asdasd");
    localStorage.setItem(
      "search",
      JSON.stringify({
        id: null,
        name: options.name,
        keyword: options.keyword,
      })
    );
    history.push(`/Board/search`);
  };

  const onClick = (postId) => {
    const beforeInfo = { posts, options, postsCount };
    sessionStorage.setItem("beforeList", JSON.stringify(beforeInfo));
    history.push(`/Board/read/${postId}`);
  };

  useEffect(() => {
    setScroll(true);
    console.log(posts);
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
    } else if (posts.length !== 0) {
      sessionStorage.removeItem("beforeList");
    } else {
      console.log("여기까지 왔나요?");
      dispatch(
        list({
          id: null,
          name: null,
          keyword: null,
        })
      );
    }
    // posts를 []안에 넣지 않아 경고 상태가 계속 나옴 해결방법 생각해보자
  }, [dispatch, match]);

  const onChangeModal = () => {
    setModal(!modal);
  };
  if (!posts || loading) {
    return null;
  }
  return (
    <>
      {console.log("sadsad")}
      <BoardCom
        match={match}
        posts={posts}
        scroll={scroll}
        onClick={onClick}
        onChange={onChange}
        onSearch={onSearch}
        fetchMoreData={fetchMoreData}
        onChangeModal={onChangeModal}
      />
      <AlertModal
        visible={modal}
        title="블라인드"
        description="블라인드 처리된 게시글입니다!"
        onCancel={onChangeModal}
      />
    </>
  );
};

export default withRouter(BoardForm);
