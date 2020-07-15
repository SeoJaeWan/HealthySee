import { createAction, handleActions, createActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as AlbumAPI from "../../lib/api/album";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes(
  "albumList/LIST"
);
const INITIALIZE = "albumList/INITIALIZE";

export const list = createAction(LIST, ({ user, year, remainCount }) => ({
  user,
  year,
  remainCount,
}));
export const initialize = createActions(INITIALIZE);

const listSage = createRequestSaga(LIST, AlbumAPI.readAlbumList);

export function* albumListSaga() {
  yield takeLatest(LIST, listSage);
}

const initialState = {
  year: null,
  album: [],

  remainCount: null,
};

const albumList = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [LIST_SUCCESS]: (state, { payload: albumData }) => ({
      ...state,
      album: state.album.concat(albumData.album),
      remainCount: albumData.count,
      year: albumData.year,
    }),
  },
  initialState
);

export default albumList;
