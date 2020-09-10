import React from "react"
import { useSelector } from "react-redux"
import RestCom from "../../../component_contet/component/training/exercise/RestCom"

const RestForm = () => {
  let { routin } = useSelector(({ training }) => ({
    routin: training.routin,
  }))

  return <>{routin.map((pose, index) => index % 2 == 0 && <RestCom text={pose} />)}</>
}

export default RestForm
