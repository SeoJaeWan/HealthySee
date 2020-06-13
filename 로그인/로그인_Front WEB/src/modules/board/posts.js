import * as boardAPI from "../../lib/api/board";

import { createAction, handleActions, combineActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";

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

const CHANGE_FIELD = "posts/CHANGE_FIELD";
// export const list = createAction(LIST, ({ search, next }) => ({
//   search,
//   next,
// }));

export const initialize = createAction(INITIALIZE);
export const list = createAction(LIST, ({ id, name, keyword, category }) => ({
  id,
  name,
  keyword,
  category,
}));
export const listDetail = createAction(
  LISTDETAIL,
  ({ id, name, keyword, category }) => ({ id, name, keyword, category })
);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);

const listSaga = createRequestSaga(LIST, boardAPI.list);
const listDetailSaga = createRequestSaga(LISTDETAIL, boardAPI.list);

export function* postsSaga() {
  yield takeLatest(LIST, listSaga);
  yield takeLatest(LISTDETAIL, listDetailSaga);
}

const initialState = {
  posts: [],
  postsCount: null,
  options: {
    name: "BO_Title",
    keyword: null,
  },

  postError: null,
  lastId: null, // 다음 10개를 불러오기 위해서 사용함
};

const posts = handleActions(
  {
    [INITIALIZE]: () => initialState,
    // [LIST]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),

    [combineActions(LIST_SUCCESS, LISTDETAIL_SUCCESS)]: (
      state,
      { payload: posts }
    ) => ({
      ...state,
      posts: state.posts.concat(posts.boardList),
      postsCount: posts.boardCount,
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
