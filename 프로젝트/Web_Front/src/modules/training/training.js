import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { takeLatest, select } from "redux-saga/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as trainingAPI from "../../lib/api/training";

const [
  LOGGING_EXERCISE,
  LOGGING_EXERCISE_SUCCESS,
  LOGGING_EXERCISE_FAILURE,
] = createRequestActionTypes("training/LOGGING_EXERCISE");
const CHANGE_FIELD = "training/CHANGE_FILED";
const INCREASE_FIELD = "training/INCREASE_FIELD";

export const loggingExercise = createAction(LOGGING_EXERCISE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value = null }) => ({
    key,
    value,
  })
);
export const increaseField = createAction(INCREASE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

const loggingExerciseSaga = createRequestSaga(
  LOGGING_EXERCISE,
  trainingAPI.logExercise
);

export function* trainingSaga() {
  yield takeLatest(LOGGING_EXERCISE, loggingExerciseSaga);
}

const initialState = {
  plan_code: 1,
  goal: 5,

  trainingInfo: {
    timmer: 0,
    success_count: [],
    fault_count: 0,
  },

  finish: false,
};

const training = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),
    [INCREASE_FIELD]: (state, { payload: { key, value } }) => {
      let train = "trainingInfo";
      console.log(key);
      if (value) {
        return produce(state, (draft) => {
          draft[train][key] = state[train][key].concat(value);
        });
      } else
        return produce(state, (draft) => {
          draft[train][key] = state[train][key] + 1;
        });
    },

    [LOGGING_EXERCISE_SUCCESS]: (state) => ({
      ...state,
      finish: true,
    }),
  },
  initialState
);

export default training;
