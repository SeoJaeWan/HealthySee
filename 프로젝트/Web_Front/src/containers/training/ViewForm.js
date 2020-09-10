import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import RestForm from "./RestForm";
import ExerciseForm from "./ExerciseForm";
import { changeField, clearLogData } from "../../modules/training/training";

const ViewForm = () => {
  const { logging, restTime, exerciseFinish } = useSelector(({ training }) => ({
    logging: training.logging,
    restTime: training.restTime,
    exerciseFinish: training.exerciseFinish,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (exerciseFinish) {
      // 운동 종료
    } else if (logging) {
      // 한 동작 종료, 휴식 시간
      setTimeout(() => {
        dispatch(changeField({ key: "logging", value: false }));
      }, restTime);
    }
  }, [logging, exerciseFinish, restTime, dispatch]);

  return <>{logging ? <RestForm /> : <ExerciseForm />}</>;
};

export default ViewForm;
