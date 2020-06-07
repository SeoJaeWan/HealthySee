import React, { useEffect } from "react";
import BoardCom from "../../component_contet/component/board/BoardCom";
import { useDispatch, useSelector } from "react-redux";
import { list, listDetail, initialize } from "../../modules/board/posts";

const BoardForm = ({ match, history, route }) => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    loading: loading["posts/LIST"],
  }));

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      dispatch(listDetail(posts[posts.length - 1].BO_Code));
    }, 1500);
  };

  const onClick = (postId) => {
    history.push(`${match.url}/read/${postId}`);
  };

  useEffect(() => {
    dispatch(list());

    return () => {
      // 언마운트 시 초기화
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <BoardCom
      match={match}
      posts={posts}
      loading={loading}
      onClick={onClick}
      fetchMoreData={fetchMoreData}
    />
  );
};

export default BoardForm;
