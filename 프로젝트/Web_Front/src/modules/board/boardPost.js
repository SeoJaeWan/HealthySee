import * as boardAPI from "../../lib/api/board";

import { createAction, handleActions, combineActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const [
  READ_POST,
  READ_POST_SUCCESS,
  READ_POST_FAILURE,
] = createRequestActionTypes("post/READ_POST");

const CHANGE_EVALUATION = "post/CHANGE_EVALUATION";
const [
  WRITE_COMMENT,
  WRITE_COMMENT_SUCCESS,
  WRITE_COMMENT_FAILURE,
] = createRequestActionTypes("post/WRITE_COMMENT");
const [
  READ_COMMENT,
  READ_COMMENT_SUCCESS,
  READ_COMMENT_FAILURE,
] = createRequestActionTypes("post/READ_COMMENT");
const [
  UPDATE_COMMENT,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
] = createRequestActionTypes("post/UPDATE_COMMENT");
const [
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
] = createRequestActionTypes("post/DELETE_COMMENT");

const SETBEFORELIST = "post/SETBEFORELIST";
const CHANGEPAGE = "post/CHANGEPAGE";

export const readPost = createAction(READ_POST, (id) => id);
export const changeEvaluation = createAction(
  CHANGE_EVALUATION,
  ({ comments, page }) => ({
    comments,
    page,
  })
);
export const writeComment = createAction(
  WRITE_COMMENT,
  ({ content, postId, ref, page }) => ({ content, postId, ref, page })
);
export const readComment = createAction(READ_COMMENT, ({ BO_Code, page }) => ({
  BO_Code,
  page,
}));
export const updateComment = createAction(
  UPDATE_COMMENT,
  ({ code, content, page }) => ({
    code,
    content,
    page,
  })
);
export const deleteComment = createAction(DELETE_COMMENT, ({ id, page }) => ({
  id,
  page,
}));
export const setBeforeList = createAction(
  SETBEFORELIST,
  (beforeList) => beforeList
);
export const changePage = createAction(CHANGEPAGE, (page) => page);

const writeCommentSaga = createRequestSaga(
  WRITE_COMMENT,
  boardAPI.writeComment
);
const readCommentSaga = createRequestSaga(READ_COMMENT, boardAPI.readComment);
const updateCommentSaga = createRequestSaga(
  UPDATE_COMMENT,
  boardAPI.updateComment
);
const deleteCommentSaga = createRequestSaga(
  DELETE_COMMENT,
  boardAPI.deleteComment
);
const readPostSaga = createRequestSaga(READ_POST, boardAPI.readPost);

export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
  yield takeLatest(WRITE_COMMENT, writeCommentSaga);
  yield takeLatest(READ_COMMENT, readCommentSaga);
  yield takeLatest(DELETE_COMMENT, deleteCommentSaga);
  yield takeLatest(UPDATE_COMMENT, updateCommentSaga);
}

const initialState = {
  post: null,
  comments: null,
  page: null,
  readError: null,
  commentError: null,

  nowPage: 1,

  beforeList: [],
};

const boardPost = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post: post.boardDetail,
      comments: post.comments,
      page: post.lastPage,
      count: post.commentsCount,
      isHealthsee: post.isHealthsee,
      isReport: post.isReport,
    }),
    [READ_POST_FAILURE]: (state, { payload: readError }) => ({
      ...state,
      readError,
    }),
    [CHANGE_EVALUATION]: (state, { payload: { comments, page } }) => ({
      ...state,
      comments,
      page,
    }),
    [SETBEFORELIST]: (state, { payload: beforeList }) => ({
      ...state,
      beforeList,
    }),
    [CHANGEPAGE]: (state, { payload: page }) => ({
      ...state,
      nowPage: page,
    }),
    [combineActions(
      WRITE_COMMENT_SUCCESS,
      READ_COMMENT_SUCCESS,
      UPDATE_COMMENT_SUCCESS
    )]: (state, { payload: data }) => ({
      ...state,
      comments: data.comments,
      page: data.lastPage,
      count: data.commentsCount,
      commentError: null,
    }),
    [combineActions(
      WRITE_COMMENT_FAILURE,
      READ_COMMENT_FAILURE,
      UPDATE_COMMENT_FAILURE
    )]: (state, { payload: commentError }) => ({
      ...state,
      comments: null,
      commentError,
    }),
    [DELETE_COMMENT_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      comments: data.comments,
      page: data.lastPage,
      count: data.commentsCount,
    }),
    [DELETE_COMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
  },
  initialState
);

export default boardPost;
