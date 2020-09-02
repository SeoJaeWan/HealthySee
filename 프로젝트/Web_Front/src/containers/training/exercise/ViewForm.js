import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import RestForm from "./RestForm";
import ExerciseForm from "./ExerciseForm";
import { changeField, clearLogData } from "../../../modules/training/training";

const ViewForm = () => {
  const { logging } = useSelector(({ training }) => ({
    logging: training.logging,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    logging &&
      setTimeout(() => {
        dispatch(changeField({ key: "logging", value: false }));
        dispatch(clearLogData());
      }, 5000);
  }, [logging, dispatch]);

  return <>{logging ? <RestForm /> : <ExerciseForm />}</>;
};

export default ViewForm;
