import React from "react"
import { Route } from "react-router-dom"
import PlanAddForm from "../containers/plan/PlanAddForm"
import PlanForm from "../containers/plan/PlanForm"
import PlanInfoForm from "../containers/plan/PlanInfoForm"
import PlanRestForm from "../containers/plan/PlanRestForm"
import PlanResultForm from "../containers/plan/PlanResultForm"
import PlanWriteForm from "../containers/plan/PlanWriteForm"

const Plan = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={PlanForm} />
      <Route path={`/Plan/Add`} component={PlanAddForm} />
      <Route path={`${match.path}/:PlanName/Info`} component={PlanInfoForm} />
      <Route path={`${match.path}/:PlanName/Rest`} component={PlanRestForm} />
      <Route path={`${match.path}/Write`} component={PlanWriteForm} />
      <Route path={`${match.path}/:PlanName/Write`} component={PlanWriteForm} />
      <Route path={`${match.path}/:PlanName/Result`} component={PlanResultForm} />
    </>
  )
}

export default Plan
