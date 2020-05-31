import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPost, changeComments } from "../../modules/board/post";
import { writeComment, changeField } from "../../modules/board/write";
import { withRouter } from "react-router-dom";
import { deletePost } from "../../lib/api/board";

import ReadCom from "../../component_contet/component/board/ReadCom";

const ReadForm = ({ match, history }) => {
  const postId = match.params.postId;

  const dispatch = useDispatch();
  const { post, comments, newComments, comment, loading, user } = useSelector(
    ({ post, write, loading, user }) => ({
      post: post.post,
      comments: post.comments,
      comment: write.comment,
      newComments: write.comments,
      loading: loading["post/READ_POST"],

      user: user.user,
    })
  );

  const onDelete = async () => {
    await deletePost(post.BO_Code);
    console.log("겨이다", post.BO_Code);
  };

  const onGoBack = () => {
    history.push("/board");
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    dispatch(changeField({ form: "comment", key: name, value }));
  };

  const onComment = (postId) => {
    dispatch(writeComment({ content: comment.content, postId }));
    dispatch(changeField({ form: "comment", key: "content", value: "" }));
  };

  useEffect(() => {
    dispatch(readPost(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    if (newComments) {
      dispatch(changeComments(newComments));
    }
  }, [newComments, dispatch]);

  return (
    <ReadCom
      post={post}
      loading={loading}
      comment={comment}
      comments={comments}
      user={user}
      onGoBack={onGoBack}
      onComment={onComment}
      onChange={onChange}
      onDelete={onDelete}
    />
  );
};

export default withRouter(ReadForm);
