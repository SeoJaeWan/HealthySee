import * as boardAPI from "../../lib/api/board";

import { createAction, handleActions, combineActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const INITIALIZE = "posts/INITIALIZE";
const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes(
  "posts/LIST"
);
const [
  LISTDETAIL,
  LISTDETAIL_SUCCESS,
  LISTDETAIL_FAILURE,
] = createRequestActionTypes("posts/LISTDETAIL");
// export const list = createAction(LIST, ({ search, next }) => ({
//   search,
//   next,
// }));

export const initialize = createAction(INITIALIZE);
export const list = createAction(LIST);
export const listDetail = createAction(LISTDETAIL, (id) => id);

const listSaga = createRequestSaga(LIST, boardAPI.list);
const listDetailSaga = createRequestSaga(LISTDETAIL, boardAPI.listDetail);

export function* postsSaga() {
  yield takeLatest(LIST, listSaga);
  yield takeLatest(LISTDETAIL, listDetailSaga);
}

const initialState = {
  posts: null,
  postError: null,

  lastId: null, // 다음 10개를 불러오기 위해서 사용함
};

const posts = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [combineActions(LIST_SUCCESS, LISTDETAIL_SUCCESS)]: (
      state,
      { payload: posts }
    ) => ({
      ...state,
      posts: state.posts
        ? state.posts.concat(posts.boardList)
        : posts.boardList,
      postError: null,
    }),
    [combineActions(LIST_FAILURE, LISTDETAIL_FAILURE)]: (
      state,
      { payload: postError }
    ) => ({
      ...state,
      posts: null,
      postError,
    }),
  },
  initialState
);

export default posts;
