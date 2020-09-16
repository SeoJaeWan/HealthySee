import React from "react"
import { Route } from "react-router-dom"
import PoseForm from "../containers/pose/PoseForm"
import PoseInfoForm from "../containers/pose/PoseInfoForm"
import PoseResultForm from "../containers/pose/PoseResultForm"

const Pose = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={PoseForm} />
      <Route exact path={`${match.path}/:Pose`} component={PoseInfoForm} />
      <Route path={`${match.path}/:Pose/Result`} component={PoseResultForm} />
    </>
  )
}

export default Pose
