import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";

import * as poseAPI from "../../lib/api/pose";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

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

export const listPose = createAction(LIST_POSE);
export const readPose = createAction(READ_POSE, (poseName) => poseName);

const listPoseSaga = createRequestSaga(LIST_POSE, poseAPI.list);
const readPoseSaga = createRequestSaga(READ_POSE, poseAPI.readPose);

export function* poseSaga() {
  yield takeLatest(LIST_POSE, listPoseSaga);
  yield takeLatest(READ_POSE, readPoseSaga);
}

const initialState = {
  poseList: null,
  listCount: 0,

  poseItem: null,
};

const pose = handleActions(
  {
    [LIST_POSE_SUCCESS]: (state, { payload: poseDate }) => ({
      ...state,
      poseList: poseDate.exerciseList,
      listCount: poseDate.exerciseListCount,
    }),
    [READ_POSE_SUCCESS]: (state, { payload: poseData }) => ({
      ...state,
      poseItem: poseData,
    }),
  },
  initialState
);

export default pose;
