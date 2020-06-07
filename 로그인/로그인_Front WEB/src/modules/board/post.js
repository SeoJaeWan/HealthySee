import * as boardAPI from "../../lib/api/board";
import produce from "immer";

import { createAction, handleActions } from "redux-actions";
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
] = createRequestActionTypes("write/WRITE_COMMENT");

const [
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
] = createRequestActionTypes("write/DELETE_COMMENT");

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
export const deleteComment = createAction(DELETE_COMMENT, (id) => id);

const writeCommentSaga = createRequestSaga(
  WRITE_COMMENT,
  boardAPI.writeComment
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
}

const initialState = {
  post: null,
  comments: null,

  readError: null,
  commentError: null,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post: post.boardDetail,
      comments: post.comments,
    }),
    [READ_POST_FAILURE]: (state, { payload: readError }) => ({
      ...state,
      readError,
    }),
    [CHANGE_EVALUATION]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft["post"][key] = value;
      }),
    [WRITE_COMMENT_SUCCESS]: (state, { payload: comments }) => ({
      ...state,
      comments,
      commentError: null,
    }),
    [WRITE_COMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      comments: null,
      commentError,
    }),
    [DELETE_COMMENT_SUCCESS]: (state, { payload: comments }) => ({
      ...state,
      comments: comments,
    }),
    [DELETE_COMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
  },
  initialState
);

export default post;
