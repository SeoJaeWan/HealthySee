import React from "react"
import { PlanPoseItemForm } from "./style/PlanPoseItemCom_style"

const PlanPoseItemCom = ({ onClick, poseName, poseCount }) => {
  return (
    <>
      <PlanPoseItemForm onClick={() => onClick(poseName)}>
        <div className="titleForms">
          <h2 className="name">{poseName}</h2>
          {/* 이거 이렇게 해둔거는 운동추가 부분에서는 횟수 안적어도되서 있을때만 되게 해놧어 */}
          {poseCount !== undefined ? <h3> 횟수 : {poseCount}</h3> : ""}
        </div>
        <div className="contents">
          <img src={require(`../../../Images/Excercise/${poseName}/${poseName}.jpg`)} />
        </div>
      </PlanPoseItemForm>
    </>
  )
}

export default PlanPoseItemCom
