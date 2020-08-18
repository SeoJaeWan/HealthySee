import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import auth, { authSaga } from "./account/auth";
import user, { userSaga } from "./account/user";
import boardWrite, { writeSaga } from "./board/boardWrite";
import boardPost, { postSaga } from "./board/boardPost";
import boardList, { postsSaga } from "./board/boardList";
import evaluation, { evaluationSaga } from "./board/evaluation";
import loading from "./loading";
import mypage, { mypageSaga } from "./mypage/mypage";
import albumList, { albumListSaga } from "./album/albumList";
import albumWrite, { albumWriteSaga } from "./album/albumWrite";
import training, { trainingSaga } from "./training/training";

const rootReducer = combineReducers({
  auth,
  user,
  boardWrite,
  boardPost,
  boardList,
  evaluation,
  mypage,
  albumList,
  albumWrite,
  training,
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
    mypageSaga(),
    albumListSaga(),
    albumWriteSaga(),
    trainingSaga(),
  ]);
}

export default rootReducer;
