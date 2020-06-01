import * as boardAPI from "../../lib/api/board";

import { createAction, handleActions } from "redux-actions";
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
  WRITE_COMMENT,
  WRITE_COMMENT_SUCCESS,
  WRITE_COMMENT_FAILURE,
] = createRequestActionTypes("board/WRITE_COMMENT");

const SET_ORIGINAL = "write/SET_ORIGINAL";
const CHANGE_FIELD = "write/CHANGE_FIELD";
const INITIALIZE = "write/INITIALIZE";

export const writePost = createAction(WRITE_POST, (formData) => formData);

export const writeComment = createAction(
  WRITE_COMMENT,
  ({ content, postId }) => ({
    content,
    postId,
  })
);

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

export const writePostSaga = createRequestSaga(WRITE_POST, boardAPI.writePost);
export const writeCommentSaga = createRequestSaga(
  WRITE_COMMENT,
  boardAPI.writeComment
);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(WRITE_COMMENT, writeCommentSaga);
}

const initialState = {
  post: {
    title: "",
    content: "",
    file: "",
  },
  comment: {
    content: "",
  },

  postInfo: null,
  postError: null,
  comments: null,
};

const write = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [WRITE_POST]: (state) => ({
      ...state,
      postInfo: null,
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: postInfo }) => ({
      ...state,
      postInfo,
      postError: null,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postInfo: null,
      postError,
    }),
    [WRITE_COMMENT_SUCCESS]: (state, { payload: comments }) => ({
      ...state,
      comments,
    }),
    [SET_ORIGINAL]: (state, { payload: { form, data } }) =>
      produce(state, (draft) => {
        draft[form] = data;
      }),
  },
  initialState
);

export default write;
