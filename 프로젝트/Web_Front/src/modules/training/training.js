import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";

const CHANGE_FIELD = "training/CHANGE_FILED";

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

const initialState = {
  timmer: 90,
  count: 0,
  nextPose: 0,
  poses: [],
};

const training = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),
  },
  initialState
);

export default training;
