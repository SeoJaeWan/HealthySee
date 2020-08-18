import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as trainingAPI from "../../lib/api/training";

const LOGGING_EXERCISE = "training/LOGGING_EXERCISE";
const CHANGE_FIELD = "training/CHANGE_FILED";
const UPVALUE = "training/UPVALUE";
const CHECK_GOAL = "training/CHECK_GOAL";

export const loggingExercise = createAction(LOGGING_EXERCISE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const checkGoal = createAction(CHECK_GOAL, (key) => key);

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
    [UPVALUE]: (state, { payload: key }) => {
      return produce(state, (draft) => {
        draft[key] = state[key] + 1;
      });
    },
    [CHECK_GOAL]: (state, { payload: key }) => {
      if (
        (state.type === 0 && state.goal === state.timmer) ||
        (state.type === 1 && state.goal === state.success_count)
      )
        return produce(state, (draft) => {
          draft["finish"] = true;
        });
      else
        return produce(state, (draft) => {
          draft[key] = state[key] + 1;
        });
    },
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
      };
    },
  },
  initialState
);

export default training;
