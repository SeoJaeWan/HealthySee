import React, { useEffect } from "react";
import BoardCom from "../../component_contet/component/board/BoardCom";
import { useDispatch, useSelector } from "react-redux";
import { list, initialize } from "../../modules/board/posts";

const BoardForm = ({ match, history, route }) => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    loading: loading["posts/LIST"],
  }));

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
    <BoardCom match={match} posts={posts} loading={loading} onClick={onClick} />
  );
};

export default BoardForm;
