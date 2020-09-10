import React from "react";
import { Route } from "react-router-dom";
import PoseForm from "../containers/pose/PoseForm";
import PoseInfo from "../containers/pose/PoseInfo";
import PoseResult from "../containers/pose/PoseResult";

const Pose = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={PoseForm} />
      <Route exact path={`${match.path}/:Pose`} component={PoseInfo} />
      <Route path={`${match.path}/:Pose/Result`} component={PoseResult} />
    </>
  );
};

export default Pose;
