import React from "react";
import TrainingForm from "../containers/training/TrainingForm";
import { Route } from "react-router-dom";
import SetForm from "../containers/training/SetForm";

const Training = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={SetForm} />
      <Route path={`${match.path}/:pose`} component={TrainingForm} />
    </>
  );
};

export default Training;
