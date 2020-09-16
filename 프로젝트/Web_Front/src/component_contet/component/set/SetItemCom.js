import React from "react"
import { Icon } from "semantic-ui-react"
import { useHorizontalScroll } from "../../../containers/common/SideScroll"
import IMG from "../../../Images/defaultImg.jpg"
import SetPoseItemCom from "./SetPoseItemCom"
import { SetItemForm } from "./style/SetItemCom_style"

const SetItemCom = ({ onClick }) => {
  const a = useHorizontalScroll()
  return (
    <>
      <SetItemForm>
        <div className="titleFrom">
          <h2>이름</h2>
          <h3>&#9734; : 5</h3>
          <h3>리뷰 : 22</h3>
          <button type="button" className="moreButton" onClick={() => onClick("set1")}>
            <Icon link name="play" />
          </button>
        </div>
        <div ref={a} className="content">
          <SetPoseItemCom />
          <SetPoseItemCom />
          <SetPoseItemCom />
          <SetPoseItemCom />
          <SetPoseItemCom />
          <SetPoseItemCom />
        </div>
      </SetItemForm>
    </>
  )
}

export default SetItemCom
