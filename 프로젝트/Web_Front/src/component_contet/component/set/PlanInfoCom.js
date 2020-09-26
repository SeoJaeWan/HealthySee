import React from "react"
import { Icon } from "semantic-ui-react"
import { useHorizontalScroll } from "../../../containers/common/SideScroll"
import { Container } from "../../style/Container_style"
import PlanPoseItemCom from "./PlanPoseItemCom"
import { PlanInfoForm } from "./style/PlanInfoCom_style"

const PlanInfoCom = ({ onClick }) => {
  const a = useHorizontalScroll()
  return (
    <>
      <Container>
        <PlanInfoForm>
          <div className="titleFrom">
            <h2>이름</h2>
            <h3>휴식 시간 : 50s</h3>
            <h3>&#9734; : 5</h3>
            <h3>리뷰 : 22</h3>
            <button type="button" className="moreButton" onClick={() => onClick("set1")}>
              시작하기
            </button>
          </div>
          <div ref={a} className="content">
            <PlanPoseItemCom />
            <PlanPoseItemCom />
            <PlanPoseItemCom />
            <PlanPoseItemCom />
            <PlanPoseItemCom />
            <PlanPoseItemCom />
          </div>
        </PlanInfoForm>
      </Container>
    </>
  )
}

export default PlanInfoCom
