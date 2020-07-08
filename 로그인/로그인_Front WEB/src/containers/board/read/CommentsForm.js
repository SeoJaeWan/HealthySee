import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "../../../modules/board/write";
import {
  writeComment,
  deleteComment,
  updateComment,
  readComment,
  changeEvaluation,
  changePage,
} from "../../../modules/board/post";
import { reportComment } from "../../../modules/board/evaluation";
import CommentsCom from "../../../component_contet/common/CommentsCom";
import Pagenation from "../../../component_contet/common/Pagenation";
import { useEffect } from "react";

const CommentsForm = ({ post, user, onChange }) => {
  const dispatch = useDispatch();
  const {
    comments,
    comment,
    page,
    count,
    temporaryComments,
    nowPage,
  } = useSelector(({ write, post, evaluation }) => ({
    comments: post.comments,
    comment: write.comment,
    page: post.page,
    count: post.count,
    temporaryComments: evaluation.comments,
    nowPage: post.nowPage,
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
        page: BC_Re_Ref === "0" ? 1 : nowPage,
      })
    );
    dispatch(initialize());
  };

  const onUpdate = (edit, code, data) => {
    console.log(code);
    if (edit) {
      console.log(page);
      dispatch(updateComment({ code, content: comment[code], nowPage }));
      dispatch(changeField({ form: "comment", key: code, value: "" }));
    } else dispatch(changeField({ form: "comment", key: code, value: data }));
  };

  const onReport = (BC_Code) => {
    dispatch(reportComment({ BC_Code, nowPage, BO_Code: post.BO_Code }));
  };

  const onDelete = (id) => {
    dispatch(deleteComment({ id, nowPage }));
  };

  const getPage = (page) => {
    dispatch(changePage(page));
    dispatch(readComment({ BO_Code: post.BO_Code, page }));
  };

  useEffect(() => {
    if (temporaryComments.value) {
      dispatch(
        changeEvaluation({
          comments: temporaryComments.value,
          page: temporaryComments.page,
        })
      );
    }
  }, [temporaryComments, dispatch]);

  return (
    <>
      <CommentsCom
        comments={comments}
        count={count}
        commentValue={comment}
        user={user}
        changeComment={changeComment}
        onWrite={onWrite}
        onDeleteComment={onDelete}
        onChange={onChange}
        onUpdate={onUpdate}
        onReport={onReport}
      />
      <Pagenation page={page} getPage={getPage} />
    </>
  );
};

export default CommentsForm;
