import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "../../../modules/board/write";
import { writeComment, deleteComment } from "../../../modules/board/post";
import CommentsCom from "../../../component_contet/common/CommentsCom";

const CommentsForm = ({ post, user }) => {
  const dispatch = useDispatch();
  const { comments, comment } = useSelector(({ write, post }) => ({
    comments: post.comments,
    comment: write.comment,
  }));

  const changeComment = (e) => {
    const { name, value } = e.target;

    dispatch(changeField({ form: "comment", key: name, value }));
  };
  const onWrite = (BC_Re_Ref) => {
    const content = BC_Re_Ref === "0" ? comment.content : comment.reply;

    dispatch(
      writeComment({
        content: content,
        postId: post.BO_Code,
        ref: BC_Re_Ref,
      })
    );
    dispatch(initialize());
  };

  const onDelete = (id) => {
    dispatch(deleteComment(id));
  };

  return (
    <CommentsCom
      comments={comments}
      changeComment={changeComment}
      onWrite={onWrite}
      comment={comment}
      user={user}
      onDeleteComment={onDelete}
    />
  );
};

export default CommentsForm;
