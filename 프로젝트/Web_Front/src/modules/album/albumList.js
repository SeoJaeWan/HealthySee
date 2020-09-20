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
export const initialize = createAction(INITIALIZE);

const listSage = createRequestSaga(LIST, AlbumAPI.readAlbumList);

export function* albumListSaga() {
  yield takeLatest(LIST, listSage);
}

const initialState = {
  year: null,

  album: [],

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
      // const album = albumData.albumList.map((data) => {
      //   let blob = new Blob([Uint8Array.from(data.AL_Thumbnail.data).buffer], {
      //     type: "image/png",
      //   });
      //   console.log(blob);
      //   return {
      //     ...data,
      //     AL_Thumbnail: RenderImg({ blob }),
      //   };
      // });

      // console.log("dsaasdasdsda", album);

      return {
        ...state,
        album: state.album.concat(albumData.albumList),
        option: { ...state.option, remainCount: albumData.AlbumCount },
      };
    },
  },
  initialState
);

export default albumList;
