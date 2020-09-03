import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import RestForm from "./RestForm";
import ExerciseForm from "./ExerciseForm";
import { changeField, clearLogData } from "../../../modules/training/training";

const ViewForm = () => {
  const { logging, restTime, routin, poseCount, set } = useSelector(
    ({ training }) => ({
      logging: training.logging,
      restTime: training.restTime,
      routin: training.routin,
      poseCount: training.poseCount,
      set: training.set,
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (set < 0) {
      // 결과 호출
    } else if (routin.length < poseCount)
      dispatch(changeField({ key: "set", value: set - 1 }));

    setTimeout(() => {
      dispatch(clearLogData());
    }, restTime);
  }, [routin, poseCount, set, restTime, dispatch]);

  return <>{logging ? <RestForm /> : <ExerciseForm />}</>;
};

export default ViewForm;
