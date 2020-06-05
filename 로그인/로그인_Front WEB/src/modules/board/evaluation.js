import * as boardAPI from "../../lib/api/board";

import { createAction, handleActions, combineActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const [
  REPORT_POST,
  REPORT_POST_SUCCESS,
  REPORT_POST_FAILURE,
] = createRequestActionTypes("evaluation/REPORT_POST");
const [
  UNDOREPORT_POST,
  UNDOREPORT_POST_SUCCESS,
  UNDOREPORT_POST_FAILURE,
] = createRequestActionTypes("evaluation/UNDOREPORT_POST");

const [
  HEALTH_POST,
  HEALTH_POST_SUCCESS,
  HEALTH_POST_FAILURE,
] = createRequestActionTypes("evaluation/HEALTH_POST");
const [
  UNDOHEALTH_POST,
  UNDOHEALTH_POST_SUCCESS,
  UNDOHEALTH_POST_FAILURE,
] = createRequestActionTypes("evaluation/UNDOHEALTH_POST");
const SETEVALUATION = "evaluation/SETEVALUATION";

export const healthPost = createAction(HEALTH_POST, ({ BO_Code }) => ({
  BO_Code,
}));
export const undoHealthPost = createAction(
  UNDOHEALTH_POST,
  (BO_Code) => BO_Code
);

export const reportPost = createAction(REPORT_POST, ({ BO_Code }) => ({
  BO_Code,
}));
export const undoReportPost = createAction(
  UNDOREPORT_POST,
  (BO_Code) => BO_Code
);
export const setEvaluation = createAction(
  SETEVALUATION,
  ({ isHealthsee, isReport, BO_Healthsee_Count, BO_Report_Count }) => ({
    isHealthsee,
    isReport,
    BO_Healthsee_Count,
    BO_Report_Count,
  })
);

const healthPostSaga = createRequestSaga(HEALTH_POST, boardAPI.healthPost);
const undoHealthPostSaga = createRequestSaga(
  UNDOHEALTH_POST,
  boardAPI.undoHealthPost
);

const reportPostSaga = createRequestSaga(REPORT_POST, boardAPI.reportPost);
const undoReportPostSaga = createRequestSaga(
  UNDOREPORT_POST,
  boardAPI.undoReportPost
);
export function* evaluationSaga() {
  yield takeLatest(HEALTH_POST, healthPostSaga);
  yield takeLatest(UNDOHEALTH_POST, undoHealthPostSaga);

  yield takeLatest(REPORT_POST, reportPostSaga);
  yield takeLatest(UNDOREPORT_POST, undoReportPostSaga);
}

const initialState = {
  report: false,
  healthsee: false,
  healthseeCount: 0,
  reportCount: 0,

  healthError: null,
  reportError: null,
};

const evaluation = handleActions(
  {
    [SETEVALUATION]: (
      state,
      {
        payload: { isHealthsee, isReport, BO_Healthsee_Count, BO_Report_Count },
      }
    ) => ({
      ...state,
      healthsee: isHealthsee,
      report: isReport,
      healthseeCount: BO_Healthsee_Count,
      reportCount: BO_Report_Count,
    }),
    [combineActions(HEALTH_POST_SUCCESS, UNDOHEALTH_POST_SUCCESS)]: (
      state,
      { payload: health }
    ) => ({
      ...state,

      healthseeCount: health.BO_Healthsee_Count,
      healthsee: health.isHealthsee,
      healthError: null,
    }),
    [combineActions(HEALTH_POST_FAILURE, UNDOHEALTH_POST_FAILURE)]: (
      state,
      { payload: healthError }
    ) => ({
      ...state,
      healthError,
    }),
    [combineActions(REPORT_POST_SUCCESS, UNDOREPORT_POST_SUCCESS)]: (
      state,
      { payload: report }
    ) => ({
      ...state,
      reportCount: report.BO_Report_Count,
      report: report.isReport,
      reportError: null,
    }),
    [combineActions(REPORT_POST_FAILURE, UNDOREPORT_POST_FAILURE)]: (
      state,
      { payload: reportError }
    ) => ({
      ...state,
      reportError,
    }),
  },
  initialState
);

export default evaluation;
