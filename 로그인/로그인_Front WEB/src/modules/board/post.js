import * as boardAPI from "../../lib/api/board";
import produce from "immer";

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
  UPDATE_COMMENT,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
] = createRequestActionTypes("post/UPDATE_COMMENT");

const [
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
] = createRequestActionTypes("post/DELETE_COMMENT");

export const readPost = createAction(READ_POST, (id) => id);
export const changeEvaluation = createAction(
  CHANGE_EVALUATION,
  ({ key, value }) => ({
    key,
    value,
  })
);
export const writeComment = createAction(
  WRITE_COMMENT,
  ({ content, postId, ref }) => ({ content, postId, ref })
);
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

const writeCommentSaga = createRequestSaga(
  WRITE_COMMENT,
  boardAPI.writeComment
);
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
  yield takeLatest(DELETE_COMMENT, deleteCommentSaga);
  yield takeLatest(UPDATE_COMMENT, updateCommentSaga);
}

const initialState = {
  post: null,
  comments: null,
  page: null,
  readError: null,
  commentError: null,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post: post.boardDetail,
      comments: post.comments,
      page: post.lastPage,
    }),
    [READ_POST_FAILURE]: (state, { payload: readError }) => ({
      ...state,
      readError,
    }),
    [CHANGE_EVALUATION]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft["post"][key] = value;
      }),
    [combineActions(WRITE_COMMENT_SUCCESS, UPDATE_COMMENT_SUCCESS)]: (
      state,
      { payload: data }
    ) => ({
      ...state,
      comments: data.comments,
      page: data.lastPage,

      commentError: null,
    }),
    [combineActions(WRITE_COMMENT_FAILURE, UPDATE_COMMENT_FAILURE)]: (
      state,
      { payload: commentError }
    ) => ({
      ...state,
      comments: null,
      commentError,
    }),
    [DELETE_COMMENT_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      comments: data.comments,
      page: data.lastPage,
    }),
    [DELETE_COMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
  },
  initialState
);

export default post;
