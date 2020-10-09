import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { initialize, readPlan } from "../../modules/plan/plan"
import PlanRestCom from "../../component_contet/component/plan/PlanRestCom"

const PlanResstForm = ({ history, match }) => {
  return (
    <>
      <PlanRestCom />
    </>
  )
}

export default withRouter(PlanResstForm)
