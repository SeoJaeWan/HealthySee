import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import PlanWriteCom from "../../component_contet/component/plan/PlanWriteCom";
import { listPose, readPose } from "../../modules/pose/pose";

const PlanWriteForm = ({ history }) => {
  const onClick = (setName) => {
    history.push(`/Plan/${setName}`);
  };

  return (
    <>
      <PlanWriteCom onClick={onClick} />
    </>
  );
};

export default withRouter(PlanWriteForm);
