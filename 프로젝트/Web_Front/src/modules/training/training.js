import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as trainingAPI from "../../lib/api/training";

const CHANGE_FIELD = "training/CHANGE_FILED";
// const CLEAR_LOGDATA = "training/CLEAR_LOGDATA";

const [
  LOGGING_EXERCISE,
  LOGGING_EXERCISE_SUCCESS,
  LOGGING_EXERCISE_FAILURE,
] = createRequestActionTypes("training/LOGGING_EXERCISE");
const INCREASE_FIELD = "training/INCREASE_FIELD";

// export const clearLogData = createAction(CLEAR_LOGDATA);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value = null }) => ({
    key,
    value,
  })
);

export const loggingExercise = createAction(LOGGING_EXERCISE);
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

const logData = {
  timmer: 0,
  success_count: [],
  fault_count: 0,
  ref: 0,
};

const initialState = {
  planCode: 4, // 계획 코드
  set: 1, // 몇 세트를 진행하였는지
  restTime: 5000,

  poseCount: 0,
  routin: [],

  logData,

  logging: false,
  exerciseFinish: false,
};

const training = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),
    // [CLEAR_LOGDATA]: (state) => ({
    //   ...state,
    //   logData,
    //   logging: false,
    // }),
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

    [LOGGING_EXERCISE_SUCCESS]: (state, { payload: log }) => {
      let result = {
        ...state,
        logging: true,
        logData,
      };

      // 운동 종료
      if (state.set - 1 === 0) {
        return {
          ...state,
          exerciseFinish: true,
        };
      } else {
        // 루틴 종료
        if (state.routin.length < state.poseCount + 2)
          return {
            ...result,
            set: state.set - 1,
          };
        // 다음 운동으로
        else
          return {
            ...result,
            logData: {
              ...result.logData,
              ref: log.LO_Re_Ref,
            },

            poseCount: state.poseCount + 2,
          };
      }
    },
  },
  initialState
);

export default training;
