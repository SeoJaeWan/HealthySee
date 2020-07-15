import * as boardAPI from "../../lib/api/board";

import { createAction, handleActions, combineActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes("write/WRITE_POST");
const [
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
] = createRequestActionTypes("write/UPDATE_POST");

const CHANGE_FIELD = "write/CHANGE_FIELD";
const INITIALIZE = "write/INITIALIZE";
const SET_ORIGINAL = "write/SET_ORIGINAL";

export const writePost = createAction(WRITE_POST, (formData) => formData);
export const updatePost = createAction(UPDATE_POST, (id, formData) => ({
  id,
  formData,
}));

export const setOriginal = createAction(SET_ORIGINAL, ({ form, data }) => ({
  form,
  data,
}));
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

export const initialize = createAction(INITIALIZE);

const writePostSaga = createRequestSaga(WRITE_POST, boardAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, boardAPI.updatePost);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState = {
  post: {
    BO_Title: "",
    BO_Content: "",
    BO_File: [],
    file: [],
  },

  comment: {
    content: "",
    update: "",
  },

  postInfo: null,
  postError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),

    [combineActions(WRITE_POST_SUCCESS, UPDATE_POST_SUCCESS)]: (
      state,
      { payload: postInfo }
    ) => ({
      ...state,
      postInfo,
      postError: null,
    }),
    [combineActions(WRITE_POST_FAILURE, UPDATE_POST_FAILURE)]: (
      state,
      { payload: postError }
    ) => ({
      ...state,
      postInfo: null,
      postError,
    }),
    [SET_ORIGINAL]: (state, { payload: { form, data } }) =>
      produce(state, (draft) => {
        draft[form] = data;
      }),
  },
  initialState
);

export default write;
