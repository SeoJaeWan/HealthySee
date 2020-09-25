import React from "react";
import { Route } from "react-router-dom";
import PlanAddForm from "../containers/plan/PlanAddForm";
import PlanForm from "../containers/plan/PlanForm";
import PlanWriteForm from "../containers/plan/PlanWriteForm";

const Plan = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={PlanForm} />
      <Route path={"/Plan/Write"} component={PlanWriteForm} />
      <Route path={"/Plan/Add"} component={PlanAddForm} />
    </>
  );
};

export default Plan;
