import { createAction, handleActions, createActions } from "redux-actions";
import produce from "immer";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as AlbumAPI from "../../lib/api/album";

const [
  WRITEALBUM,
  WRITEALBUM_SUCCESS,
  WRITEALBUM_FAILURE,
] = createRequestActionTypes("albumWrite/WRITE");
const INITIALIZE = "albumWrite/INITIALIZE";
const CHANGE_FIELD = "albumWrite/CHANGE_FIELD";

export const writeAlbum = createAction(WRITEALBUM, (formData) => formData);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initialize = createAction(INITIALIZE);

const writeSaga = createRequestSaga(WRITEALBUM, AlbumAPI.writeAlbum);

export function* albumWriteSaga() {
  yield takeLatest(WRITEALBUM, writeSaga);
}

const initialState = {
  field: {
    content: "",
    scope: true,

    photo: [],
    img: [],
  },

  albumInfo: null,
  albumError: null,
};

const albumWrite = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        if (key === "photo") value = draft.field.photo.concat(value);
        else if (key === "img")
          value = draft.field.img.concat({ original: value, thumbnail: value });
        draft["field"][key] = value;
      }),
    [WRITEALBUM_SUCCESS]: (state, { payload: albumInfo }) => ({
      ...state,
      albumInfo,
      albumError: null,
    }),
    [WRITEALBUM_FAILURE]: (state, { payload: albumError }) => ({
      ...state,
      albumInfo: null,
      albumError,
    }),
  },
  initialState
);

export default albumWrite;
