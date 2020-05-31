import * as boardAPI from "../../lib/api/board";

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

const CHANGE_COMMENTS = "post/CHANGE_COMMENTS";

export const readPost = createAction(READ_POST, (id) => id);
export const changeComments = createAction(
  CHANGE_COMMENTS,
  (comments) => comments
);

export const readPostSaga = createRequestSaga(READ_POST, boardAPI.readPost);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
  post: null,
  comments: null,

  error: null,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post: post.boardDetail,
      comments: post.comments,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [CHANGE_COMMENTS]: (state, { payload: comments }) => ({
      ...state,
      comments: comments.comments,
    }),
  },
  initialState
);

export default post;
