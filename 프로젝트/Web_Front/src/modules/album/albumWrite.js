import { createAction, handleActions, createActions } from "redux-actions";
import produce from "immer";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as AlbumAPI from "../../lib/api/album";

const [WRITE, WRITE_SUCCESS, WRITE_FAILURE] = createRequestActionTypes(
  "albumWrite/WRITE"
);
const INITIALIZE = "albumWrite/INITIALIZE";
const CHANGEFIELD = "albumWrite/CHANGEFIELD";

export const write = createAction(WRITE, (formData) => formData);
export const changeField = createAction(CHANGEFIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initialize = createAction(INITIALIZE);

const writeSaga = createRequestSaga(WRITE, AlbumAPI.writeAlbum);

export function* albumWriteSaga() {
  yield takeLatest(WRITE, writeSaga);
}

const initialState = {
  field: {
    photo: [],
    content: null,
    scope: true,
  },

  albumInfo: null,
  albumError: null,
};

const albumWrite = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGEFIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft["field"][key] = value;
      }),
    [WRITE_SUCCESS]: (state, { payload: albumInfo }) => ({
      ...state,
      albumInfo,
      albumError: null,
    }),
    [WRITE_FAILURE]: (state, { payload: albumError }) => ({
      ...state,
      albumInfo: null,
      albumError,
    }),
  },
  initialState
);

export default albumWrite;
