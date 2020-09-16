import React from "react"
import { SetPoseItemForm } from "./style/SetPoseItemCom_style"
import IMG from "../../../Images/defaultImg.jpg"

const SetPoseItemCom = ({ onClick }) => {
  return (
    <>
      <SetPoseItemForm>
        <div className="titleForms">
          <h2 className="name">이름</h2>
          <h3>횟수 : 5</h3>
          <h3>쉬는시간 : 22</h3>
        </div>
        <div className="contents"></div>
      </SetPoseItemForm>
    </>
  )
}

export default SetPoseItemCom
