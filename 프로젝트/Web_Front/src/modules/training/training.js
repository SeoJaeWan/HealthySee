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
  plan: 1,
  set: 0,

  index: 0,
  routin: [1, 2, 1, 1],

  logData: {
    timmer: 0,
    success_count: [],
    fault_count: 0,
    ref: 0,
  },

  logging: false,
};

const training = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),
    [INCREASE_FIELD]: (state, { payload: { key, value } }) => {
      let train = "logData";
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

    [LOGGING_EXERCISE_SUCCESS]: (state, { payload: log }) => ({
      ...state,

      logData: {
        ...state.logData,
        ref: log.LO_Re_Ref,
      },

      logging: true,
      index: state.index + 1,
    }),
  },
  initialState
);

export default training;
