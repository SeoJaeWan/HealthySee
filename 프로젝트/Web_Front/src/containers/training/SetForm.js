import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeField } from "../../modules/training/training";

const SetForm = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeField({ key: "logging", value: false }));
  }, [dispatch]);

  return (
    <div>
      {console.log("여기아니니?")}
      <Link to="/Training/squat">스쿼트</Link>
    </div>
  );
};

export default SetForm;
