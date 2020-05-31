import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import auth, { authSaga } from "./account/auth";
import user, { userSaga } from "./account/user";
import loading from "./loading";

const rootReducer = combineReducers({
  auth,
  user,
  loading,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
