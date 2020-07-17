import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "../../../modules/board/boardWrite";
import {
  writeComment,
  deleteComment,
  updateComment,
  readComment,
  changeEvaluation,
  changePage,
} from "../../../modules/board/boardPost";
import { reportComment } from "../../../modules/board/evaluation";
import CommentsCom from "../../../component_contet/common/Comments/CommentsCom";
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
    loading,
  } = useSelector(({ boardWrite, boardPost, evaluation, loading }) => ({
    comments: boardPost.comments,
    comment: boardWrite.comment,
    page: boardPost.page,
    count: boardPost.count,
    temporaryComments: evaluation.comments,
    nowPage: boardPost.nowPage,
    loading: loading["post/READ_POST"],
  }));

  const changeComment = (e) => {
    const { name, value } = e.target;

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

  if (!comments || loading) return null;
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
