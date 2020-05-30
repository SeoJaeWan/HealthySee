import * as boardAPI from "../../lib/api/board";

import { createAction, handleActions } from "redux-actions";
import { takeLastest } from "redux-saga/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const [
  READ_POST,
  READ_POST_SUCCESS,
  READ_POST_FAILURE,
] = createRequestActionTypes("post/READ_POST");

export const readPost = createAction(READ_POST, (id) => id);

export const readPostSaga = createRequestSaga(READ_POST, boardAPI.readPost);
export function* postSaga() {
  yield takeLastest(READ_POST, readPostSaga);
}

const initialState = {
  post: null,
  comment: null,

  error: null,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: { post, comment } }) => ({
      ...state,
      post,
      comment,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default post;
