import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import SetWriteCom from "../../component_contet/component/set/SetWriteCom"
import { listPose, readPose } from "../../modules/pose/pose"

const SetWriteForm = ({ history }) => {
  const onClick = (setName) => {
    history.push(`/Set/${setName}`)
  }

  return (
    <>
      <SetWriteCom onClick={onClick} />
    </>
  )
}

export default withRouter(SetWriteForm)
