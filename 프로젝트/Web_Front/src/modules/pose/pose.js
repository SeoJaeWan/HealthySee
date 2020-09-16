import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";

import * as poseAPI from "../../lib/api/pose";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const CHANGE_COMMENT = "pose/CHANGE_COMMENT";
const [
  LIST_POSE,
  LIST_POSE_SUCCESS,
  LIST_POSE_FAILURE,
] = createRequestActionTypes("pose/LIST_POSE");
const [
  READ_POSE,
  READ_POSE_SUCCESS,
  READ_POSE_FAILURE,
] = createRequestActionTypes("pose/READ_POSE");
const [
  WRITE_REVIEW,
  WRITE_REVIEW_SUCCESS,
  WRITE_REVIEW_FAILURE,
] = createRequestActionTypes("pose/WRITE_REVIEW");

export const changeComment = createAction(CHANGE_COMMENT, ({ key, value }) => ({
  key,
  value,
}));
export const listPose = createAction(LIST_POSE);
export const readPose = createAction(READ_POSE, (poseName) => poseName);
export const writeReview = createAction(
  WRITE_REVIEW,
  ({ rank, content, name }) => ({ rank, content, name })
);

const listPoseSaga = createRequestSaga(LIST_POSE, poseAPI.list);
const readPoseSaga = createRequestSaga(READ_POSE, poseAPI.readPose);
const writeReviewSaga = createRequestSaga(WRITE_REVIEW, poseAPI.writeReview);

export function* poseSaga() {
  yield takeLatest(LIST_POSE, listPoseSaga);
  yield takeLatest(READ_POSE, readPoseSaga);
  yield takeLatest(WRITE_REVIEW, writeReviewSaga);
}

const initialState = {
  poseList: null,
  listCount: 0,

  comment: { content: "", rank: 5 },

  poseItem: null,
};

const pose = handleActions(
  {
    [CHANGE_COMMENT]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft["comment"][key] = value;
      }),
    [LIST_POSE_SUCCESS]: (state, { payload: poseDate }) => ({
      ...state,
      poseList: poseDate.exerciseList,
      listCount: poseDate.exerciseListCount,
    }),
    [READ_POSE_SUCCESS]: (state, { payload: poseData }) => ({
      ...state,
      poseItem: poseData,
    }),
    [WRITE_REVIEW_SUCCESS]: (state, { payload: poseData }) => ({
      ...state,
      poseItem: poseData,
      comment: { value: "", rank: 5 },
    }),
  },
  initialState
);

export default pose;
