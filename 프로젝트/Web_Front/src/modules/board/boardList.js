import * as boardAPI from "../../lib/api/board";

import { createAction, handleActions, combineActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const INITIALIZE = "boardList/INITIALIZE";
const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes(
  "boardList/LIST"
);
const [
  BEST_LIST,
  BEST_LIST_SUCCESS,
  BEST_LIST_FAILURE,
] = createRequestActionTypes("boardList/BEST_LIST");
const SETPOSTS = "boardList/SETPOSTS";
const [
  LISTDETAIL,
  LISTDETAIL_SUCCESS,
  LISTDETAIL_FAILURE,
] = createRequestActionTypes("boardList/LISTDETAIL");

const CHANGE_FIELD = "boardList/CHANGE_FIELD";
// export const list = createAction(LIST, ({ search, next }) => ({
//   search,
//   next,
// }));

export const initialize = createAction(INITIALIZE);
export const setPosts = createAction(
  SETPOSTS,
  ({ posts, options, postsCount }) => ({
    posts,
    options,
    postsCount,
  })
);
export const list = createAction(LIST, ({ id, name, keyword }) => ({
  id,
  name,
  keyword,
}));
export const bestList = createAction(BEST_LIST);
export const listDetail = createAction(LISTDETAIL, ({ id, name, keyword }) => ({
  id,
  name,
  keyword,
}));
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);

const listSaga = createRequestSaga(LIST, boardAPI.list);
const bestListSaga = createRequestSaga(BEST_LIST, boardAPI.bestList);
const listDetailSaga = createRequestSaga(LISTDETAIL, boardAPI.list);

export function* postsSaga() {
  yield takeLatest(LIST, listSaga);
  yield takeLatest(BEST_LIST, bestListSaga);
  yield takeLatest(LISTDETAIL, listDetailSaga);
}

const initialState = {
  posts: [],
  postsCount: null,
  options: {
    name: "BO_Title",
    keyword: null,
  },
  bestPosts: {},

  postError: null,
  lastId: null, // 다음 10개를 불러오기 위해서 사용함
};

const boardList = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [SETPOSTS]: (state, { payload: { posts, options, postsCount } }) => ({
      ...state,
      posts,
      options,
      postsCount,
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
    [BEST_LIST_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      bestPosts: posts,
      postError: null,
    }),
    [BEST_LIST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      bestPosts: null,
      postError,
    }),
  },
  initialState
);

export default boardList;
