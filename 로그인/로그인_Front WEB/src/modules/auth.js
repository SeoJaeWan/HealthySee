import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";

import * as authAPI from "../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZEFORM = "auth/INITIALIZEFORM";
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  "auth/REGISTER"
);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initializeForm = createAction(INITIALIZEFORM);
export const register = createAction(
  REGISTER,
  ({ nickname, weight, gender, scope }) => ({
    nickname,
    weight,
    gender,
    scope,
  })
);

export const registeSage = createRequestSaga(REGISTER, authAPI.register);

export function* authSaga() {
  yield takeLatest(REGISTER, registeSage);
}

const accountForm = {
  nickname: "",
  weight: "",
  gender: 1,
  scope: 1,
};

const initialState = {
  account: {
    accountForm,
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft["account"][key] = value;
      }),
    [INITIALIZEFORM]: (state) => ({
      ...state,
      account: {
        ...state.account,
        accountForm,
      },
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      auth,
      authError: null,
    }),
    [REGISTER_FAILURE]: (state, { payload: authError }) => ({
      ...state,
      auth: null,
      authError,
    }),
  },
  initialState
);

export default auth;
