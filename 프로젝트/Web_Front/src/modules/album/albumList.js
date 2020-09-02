import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as AlbumAPI from "../../lib/api/album";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes(
  "albumList/LIST"
);
const CHANGE_FIELD = "albumList/CHANGE_FIELD";
const INITIALIZE = "albumList/INITIALIZE";

export const list = createAction(LIST, ({ name, year, AL_Code }) => ({
  name,
  year,
  AL_Code,
}));
export const changeField = createAction(CHANGE_FIELD, ({ form, data }) => ({
  form,
  data,
}));
export const initialize = createAction(INITIALIZE);

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
    [CHANGE_FIELD]: (state, { payload: { form, data } }) => ({
      ...state,
      [form]: data,
    }),
    [LIST_SUCCESS]: (state, { payload: albumData }) => ({
      ...state,
      album: state.album.concat(albumData.albumList),
      remainCount: albumData.AlbumCount,
    }),
  },
  initialState
);

export default albumList;
