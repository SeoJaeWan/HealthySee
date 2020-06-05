import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import auth, { authSaga } from "./account/auth";
import user, { userSaga } from "./account/user";
import write, { writeSaga } from "./board/write";
import post, { postSaga } from "./board/post";
import posts, { postsSaga } from "./board/posts";
import evaluation, { evaluationSaga } from "./board/evaluation";
import loading from "./loading";

const rootReducer = combineReducers({
  auth,
  user,
  write,
  post,
  posts,
  evaluation,
  loading,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
    evaluationSaga(),
  ]);
}

export default rootReducer;
