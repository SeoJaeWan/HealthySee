import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "../../../modules/board/write";
import {
  writeComment,
  deleteComment,
  updateComment,
} from "../../../modules/board/post";
import CommentsCom from "../../../component_contet/common/CommentsCom";

const CommentsForm = ({ post, user, onChange }) => {
  const dispatch = useDispatch();
  const { comments, comment, page } = useSelector(({ write, post }) => ({
    comments: post.comments,
    comment: write.comment,
    page: post.page,
  }));

  const changeComment = (e) => {
    const { name, value } = e.target;
    console.log(comment[name]);

    dispatch(changeField({ form: "comment", key: name, value }));
  };
  const onWrite = (BC_Re_Ref, BC_Code) => {
    const content = BC_Re_Ref === "0" ? comment.content : comment[BC_Code];

    dispatch(
      writeComment({
        content: content,
        postId: post.BO_Code,
        ref: BC_Re_Ref,
      })
    );
    dispatch(initialize());
  };

  const onUpdate = (edit, code, data) => {
    console.log(code);
    if (edit) {
      dispatch(updateComment({ code, content: comment[code], page }));
      dispatch(changeField({ form: "comment", key: code, value: "" }));
    } else dispatch(changeField({ form: "comment", key: code, value: data }));
  };

  const onDelete = (id) => {
    dispatch(deleteComment({ id, page }));
  };

  return (
    <CommentsCom
      comments={comments}
      changeComment={changeComment}
      onWrite={onWrite}
      commentValue={comment}
      user={user}
      onDeleteComment={onDelete}
      onChange={onChange}
      onUpdate={onUpdate}
    />
  );
};

export default CommentsForm;
