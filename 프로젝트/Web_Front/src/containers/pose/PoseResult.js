import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeField } from "../../modules/training/training";
import PoseResultCom from "../../component_contet/component/pose/PoseResultCom";
import CommentCom from "../../component_contet/component/training/comment/CommentCom";

const PoseResult = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeField({ key: "logging", value: false }));
  }, [dispatch]);

  return (
    <>
      <PoseResultCom />
      <CommentCom />
    </>
  );
};

export default PoseResult;
