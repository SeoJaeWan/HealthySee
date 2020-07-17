import React from "react";
import TrainingForm from "../containers/training/TrainingForm";
import { Route } from "react-router-dom";

const Training = ({ match }) => {
  return <Route exact path={match.path} component={TrainingForm} />;
};

export default Training;
