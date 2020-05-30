import * as boardAPI from "../../lib/api/board";

import { createAction, handleActions } from "redux-actions";
import { takeLastest } from "redux-saga/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes(
  "posts/LIST"
);

export const listSaga = createRequestSaga(LIST, boardAPI.list);

export function* postsSaga() {
  yield takeLastest(LIST, listSaga);
}

export const list = createAction(LIST, ({ search, next }) => ({
  search,
  next,
}));

const initialState = {
  posts: null,
  postError: null,

  lastId: null, // 다음 10개를 불러오기 위해서 사용함
};

const posts = handleActions(
  {
    [LIST_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
      postError: null,
    }),
    [LIST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      posts: null,
      postError,
    }),
  },
  initialState
);

export default posts;
