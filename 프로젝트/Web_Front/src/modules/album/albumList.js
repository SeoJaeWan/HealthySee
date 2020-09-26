import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import { RenderImg } from "../../containers/common/RenderImg";
import * as AlbumAPI from "../../lib/api/album";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes(
  "albumList/LIST"
);
const [
  READ_ALBUM,
  READ_ALBUM_SUCCESS,
  READ_ALBUM_FAILURE,
] = createRequestActionTypes("albumList/READ_ALBUM");
const [
  GET_ALBUM_PICTURE,
  GET_ALBUM_PICTURE_SUCCESS,
  GET_ALBUM_PICTURE_FAILURE,
] = createRequestActionTypes("albumList/GET_ALBUM_PICTURE");
const CHANGE_FIELD = "albumList/CHANGE_FIELD";
const INITIALIZE = "albumList/INITIALIZE";

export const list = createAction(LIST, ({ name, year, AL_Code }) => ({
  name,
  year,
  AL_Code,
}));
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const readAlbum = createAction(READ_ALBUM, (code) => code);
export const getAlbumPicture = createAction(
  GET_ALBUM_PICTURE,
  ({ p_code, a_code }) => ({ p_code, a_code })
);
export const initialize = createAction(INITIALIZE);

const listSage = createRequestSaga(LIST, AlbumAPI.readAlbumList);
const readAlbumSaga = createRequestSaga(READ_ALBUM, AlbumAPI.readAlbum);
const getAlbumPictureSaga = createRequestSaga(
  GET_ALBUM_PICTURE,
  AlbumAPI.getAlbumPicture
);

export function* albumListSaga() {
  yield takeLatest(LIST, listSage);
  yield takeLatest(READ_ALBUM, readAlbumSaga);
  yield takeLatest(GET_ALBUM_PICTURE, getAlbumPictureSaga);
}

const initialState = {
  year: null,

  album: [],

  albumDetail: null,
  picture: [],
  picturesCount: null,

  comments: null,

  img: [],
  remainCount: null,
};

const albumList = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => {
      if (key === "img") value = state[key].concat(value);
      return {
        ...state,
        [key]: value,
      };
    },
    [LIST_SUCCESS]: (state, { payload: albumData }) => {
      return {
        ...state,
        album: state.album.concat(albumData.albumList),
        option: { ...state.option, remainCount: albumData.AlbumCount },
      };
    },
    [READ_ALBUM_SUCCESS]: (state, { payload: albumDetailData }) => ({
      ...state,
      albumDetail: albumDetailData.albumDetail,
      picture: state.picture.concat(albumDetailData.picture),
      picturesCount: albumDetailData.picturesCount,
      comments: albumDetailData.comments,
    }),
    [GET_ALBUM_PICTURE_SUCCESS]: (state, { payload: picture }) => ({
      ...state,
      picture: state.picture.concat(picture),
    }),
  },
  initialState
);

export default albumList;
