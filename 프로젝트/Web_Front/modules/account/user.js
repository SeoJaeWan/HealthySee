import { createAction, handleActions } from "redux-actions";
import { takeLatest, call } from "redux-saga/effects";
import * as authAPI from "../../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

// const TEMP_SET_USER = "user/TEMP_SET_USER";
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  "user/CHECK"
);
const LOGOUT = "user/LOGOUT";

// export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);  // 이제 필요한가??
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem("user");
  } catch (e) {
    console.log("CheckFailure is not working`");
  }
}

function checkSuccessSaga(user) {
  // login을 사용하면 redirect를 하기 때문에 loginForm에서 user를 로컬 스토리지에 저장하지 못해 리다이렉트시 index.js에서 loadUser를 통해 받아오게 함
  try {
    localStorage.setItem("user", JSON.stringify(user.payload));
  } catch (e) {
    console.log("CheckSuccessSaga is not working`");
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    localStorage.removeItem("user");
  } catch (error) {
    console.log("LogoutSaga is not working", error);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_SUCCESS, checkSuccessSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

const user = handleActions(
  {
    // [TEMP_SET_USER]: (state, { payload: user }) => ({
    //   ...state,
    //   user: user.username,
    // }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user: user.username,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: checkError }) => ({
      ...state,
      user: null,
      checkError,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
      login: false,
    }),
  },
  initialState
);

export default user;
