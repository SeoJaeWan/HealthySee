import * as mypageAPI from "../../lib/api/mypage";
import produce from "immer";

import { createAction, handleActions, combineActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const [
  READ_MYPAGE,
  READ_MYPAGE_SUCCESS,
  READ_MYPAGE_FAILURE,
] = createRequestActionTypes("mypage/READ_MYPAGE");

const [
  UPDATE_MYPAGE,
  UPDATE_MYPAGE_SUCCESS,
  UPDATE_MYPAGE_FAILURE,
] = createRequestActionTypes("mypage/UPDATE_MYPAGE");

const CHANGE_FILED = "mypage/CHANGE_FILED";
const INITIALIZE = "write/INITIALIZE";

export const readMypage = createAction(READ_MYPAGE, (username) => username);
export const updateMypage = createAction(
  UPDATE_MYPAGE,
  ({ scope, weight, height, birthday, username }) => ({
    scope,
    weight,
    height,
    birthday,
    username,
  })
);
export const changeField = createAction(CHANGE_FILED, ({ key, data }) => ({
  key,
  data,
}));
export const initialize = createAction(INITIALIZE);

const readMypageSaga = createRequestSaga(READ_MYPAGE, mypageAPI.readMypage);
const updateMypageSaga = createRequestSaga(
  UPDATE_MYPAGE,
  mypageAPI.updateMypage
);

export function* mypageSaga() {
  yield takeLatest(READ_MYPAGE, readMypageSaga);
  yield takeLatest(UPDATE_MYPAGE, updateMypageSaga);
}

const initialState = {
  mypage: {
    scope: null,
    weight: null,
    height: null,
    birthday: null,
  },
  owner: null,
  mypageError: null,
};

const mypage = handleActions(
  {
    [combineActions(READ_MYPAGE_SUCCESS, UPDATE_MYPAGE_SUCCESS)]: (
      state,
      { payload: mypage }
    ) => ({
      ...state,
      mypage,
      mypageError: null,
    }),
    [combineActions(READ_MYPAGE_FAILURE, UPDATE_MYPAGE_FAILURE)]: (
      state,
      { payload: mypageError }
    ) => ({
      ...state,
      mypage: {},
      mypageError,
    }),
    [CHANGE_FILED]: (state, { payload: { key, data } }) =>
      produce(state, (draft) => {
        draft[key] = data;
      }),
  },
  initialState
);

export default mypage;
