import * as boardAPI from "../../lib/api/board";

import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const INITIALIZE = "posts/INITIALIZE";
const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes(
  "posts/LIST"
);
// export const list = createAction(LIST, ({ search, next }) => ({
//   search,
//   next,
// }));

export const initialize = createAction(INITIALIZE);
export const list = createAction(LIST);

export const listSaga = createRequestSaga(LIST, boardAPI.list);

export function* postsSaga() {
  yield takeLatest(LIST, listSaga);
}

const initialState = {
  posts: null,
  postError: null,

  lastId: null, // 다음 10개를 불러오기 위해서 사용함
};

const posts = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [LIST_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts: state.posts
        ? state.posts.concat(posts.boardList)
        : posts.boardList,
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
