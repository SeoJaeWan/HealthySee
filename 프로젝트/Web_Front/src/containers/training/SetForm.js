import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../modules/training/training";

const SetForm = () => {
  let dispatch = useDispatch();
  let { routin } = useSelector(({ training }) => ({
    routin: training.routin,
  }));

  useEffect(() => {
    dispatch(changeField({ key: "logging", value: false }));
  }, [dispatch]);

  return (
    <>
      {routin.map(
        (pose, index) =>
          index % 2 == 0 && <Link to={`/Training/${pose}`}>{pose}</Link>
      )}
    </>
  );
  // <div>
  //   <Link to="/Training/squat">스쿼트</Link>
  // </div>
};

export default SetForm;
