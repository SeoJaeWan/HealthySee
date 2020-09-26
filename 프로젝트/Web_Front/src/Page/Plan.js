import React from "react";
import { Route } from "react-router-dom";
import PlanAddForm from "../containers/plan/PlanAddForm";
import PlanForm from "../containers/plan/PlanForm";
import PlanInfoForm from "../containers/plan/PlanInfoForm";
import PlanWriteForm from "../containers/plan/PlanWriteForm";

const Plan = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={PlanForm} />
      <Route path={"/Plan/Write"} component={PlanWriteForm} />
      <Route path={"/Plan/Add"} component={PlanAddForm} />
      <Route path={`${match.path}/:PlanName/Info`} component={PlanInfoForm} />
    </>
  );
};

export default Plan;
