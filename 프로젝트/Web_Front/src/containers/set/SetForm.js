import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import SetSelectCom from "../../component_contet/component/set/SetSelectCom"
import { listPose, readPose } from "../../modules/pose/pose"

const SetForm = ({ history }) => {
  const onClick = (setName) => {
    history.push(`/Set/${setName}`)
  }

  return (
    <>
      <SetSelectCom onClick={onClick} />
    </>
  )
}

export default withRouter(SetForm)
