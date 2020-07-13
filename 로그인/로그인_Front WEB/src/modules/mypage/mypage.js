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
const UPDATE_FILED = "mypage/UPDATE_FILED";
const INITIALIZE = "mypage/INITIALIZE";

export const readMypage = createAction(READ_MYPAGE, (username) => username);
export const updateMypage = createAction(UPDATE_MYPAGE, (mypage) => mypage);
export const changeField = createAction(CHANGE_FILED, ({ key, value }) => ({
  key,
  value,
}));
export const updateField = createAction(UPDATE_FILED, ({ key, value }) => ({
  key,
  value,
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
    ME_Code: null,
    ME_Profile_Photo: null,
    ME_Scope: 1,
    ME_Weight: 0,
    ME_Height: 0,
    ME_Birth: 0,
    ME_Gender: 1,
    ME_Certificate: 0,
    Account_AC_NickName: 0,
  },
  owner: null,
  mypageError: null,
  isUpdate: null,
  originalProfile: null,
};

const mypage = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [combineActions(READ_MYPAGE_SUCCESS)]: (state, { payload: mypage }) => ({
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
    [UPDATE_MYPAGE_SUCCESS]: (state, { payload: isUpdate }) => ({
      ...state,
      isUpdate,
    }),
    [CHANGE_FILED]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),

    [UPDATE_FILED]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft["mypage"][key] = value;
      }),
  },
  initialState
);

export default mypage;
