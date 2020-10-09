import React, { useEffect } from "react"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import PlanResultCom from "../../component_contet/component/plan/PlanResultCom"

const PlanResultForm = ({ history, match }) => {
  return (
    <>
      <PlanResultCom match={match} /> :
    </>
  )
}

export default withRouter(PlanResultForm)
