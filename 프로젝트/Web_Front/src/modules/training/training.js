import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as trainingAPI from "../../lib/api/training";

const [LOGGING_EXERCISE] = "training/LOGGING_EXERCISE";
const CHANGE_FIELD = "training/CHANGE_FILED";
const INCREASE_FIELD = "training/INCREASE_FIELD";

export const loggingExercise = createAction(LOGGING_EXERCISE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const increaseField = createAction(INCREASE_FIELD, (key) => key);

export function* trainingSaga() {}

const initialState = {
  Plan_PL_Code: 1,
  LOD_Code: 1,
  type: 0,
  goal: 5,

  timmer: 0,
  success_count: 0,
  fault_count: 0,

  finish: false,
};

const training = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => {
      console.log(key, value);
      return produce(state, (draft) => {
        draft[key] = value;
      });
    },
    [INCREASE_FIELD]: (state, { payload: key }) =>
      produce(state, (draft) => {
        draft[key] = state[key] + 1;
      }),
    [LOGGING_EXERCISE]: (state) => {
      trainingAPI.logExercise({
        LO_Time: state.timmer,
        LO_Success_Count: state.success_count,
        LO_Fault_Count: state.fault_count,
        Plan_PL_Code: state.Plan_PL_Code,
        LOD_Code: state.LOD_Code,
      });

      return {
        ...state,
        finish: true,
      };
    },
  },
  initialState
);

export default training;
