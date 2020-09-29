import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

import * as planAPI from "../../lib/api/plan";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";

const CHANGE_FIELD = "plan/CHANGE_FIELD";
const [
  LIST_PLAN,
  LIST_PLAN_SUCCESS,
  LIST_PLAN_FAILURE,
] = createRequestActionTypes("plan/LIST_PLAN");

const [
  READ_PLAN,
  READ_PLAN_SUCCESS,
  READ_PLAN_FAILURE,
] = createRequestActionTypes("plan/READ_PLAN");

const [
  WRITE_PLAN,
  WRITE_PLAN_SUCCESS,
  WRITE_PLAN_FAILURE,
] = createRequestActionTypes("plan/WRITE_PLAN");

const INITIALIZE = "plan/INITIALIZE";

export const listPlan = createAction(LIST_PLAN);
export const readPlan = createAction(READ_PLAN, (code) => code);
export const writePlan = createAction(WRITE_PLAN);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initialize = createAction(INITIALIZE);

const listPlanSaga = createRequestSaga(LIST_PLAN, planAPI.planList);
const readPlanSaga = createRequestSaga(READ_PLAN, planAPI.readPlan);

export function* planSaga() {
  yield takeLatest(LIST_PLAN, listPlanSaga);
  yield takeLatest(READ_PLAN, readPlanSaga);
}

const initialState = {
  planList: null,

  planDetail: null,
  lastPage: null,
  option: null,
  evaluations: null,

  write: {},
  planCount: 0,
};

const plan = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft["write"][key] = value;
      }),
    [LIST_PLAN_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      planList: list.planList,
      planCount: list.planCount,
    }),
    [READ_PLAN_SUCCESS]: (state, { payload: plan }) => ({
      ...state,
      planDetail: {
        ...plan.planDetail,
        PL_Routin: plan.planDetail.PL_Routin.slice(
          1,
          plan.planDetail.PL_Routin.length - 1
        )
          .replace(/"/gi, "")
          .split(","),
      },
      lastPage: plan.lastPage,
      option: plan.option,
      evaluations: plan.evaluations,
    }),
  },
  initialState
);

export default plan;
