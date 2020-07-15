import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";

import * as authAPI from "../../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZEFORM = "auth/INITIALIZEFORM";
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "auth/LOGIN"
);
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  "auth/REGISTER"
);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initializeForm = createAction(INITIALIZEFORM);
export const login = createAction(LOGIN, ({ name, platform, email }) => ({
  name,
  platform,
  email,
}));
export const register = createAction(
  REGISTER,
  ({ nickname, weight, gender, scope, name, email, platform }) => ({
    nickname,
    weight,
    gender,
    scope,
    name,
    email,
    platform,
  })
);

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const registeSage = createRequestSaga(REGISTER, authAPI.register);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registeSage);
}

const initialState = {
  account: {
    nickname: "",
    weight: "",
    gender: 1,
    scope: 1,
  },
  platforms: {
    name: "",
    platform: "",
    email: "",
  },
  auth: null,
  authError: null,
  data: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft["account"][key] = value;
      }),
    [INITIALIZEFORM]: () => initialState,
    [LOGIN]: (state, { payload: { name, platform, email } }) => ({
      ...state,
      platforms: { name, platform, email },
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      auth,
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: authError }) => ({
      ...state,
      auth: null,
      authError,
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
