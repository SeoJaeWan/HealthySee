import React from "react"
import { useHorizontalScroll } from "../../../containers/common/SideScroll"
import { Container } from "../../style/Container_style"
import PlanPoseItemCom from "./PlanPoseItemCom"
import { PlanWriteForm } from "./style/PlanWriteCom_style"

const PlanWriteCom = ({ onClick, writeList, match }) => {
  const scroll = useHorizontalScroll()
  return (
    <>
      <Container>
        <PlanWriteForm>
          <div className="titleFrom">
            <h1>세트 명 : </h1>
            <input type="text" className="titleInput"></input>
            <h2>휴식 시간 : 30s</h2>
            <button type="button" className="writeButton" onClick={() => onClick("")}>
              만들기
            </button>
            <button type="button" className="addButton" onClick={() => onClick("Add")}>
              운동 설정
            </button>
          </div>
          <div ref={scroll} className="content">
            {writeList !== undefined
              ? writeList.AddPose.items.map((items, index) => (
                  <PlanPoseItemCom
                    key={index}
                    poseName={items.PoseName}
                    poseCount={items.PoseCount}
                  />
                ))
              : ""}
          </div>
          <h1 className="setTitle">세트 설명</h1>
          <div className="textForm">
            <textarea className="textArea" type="text" name="BO_Content" />
          </div>
        </PlanWriteForm>
      </Container>
    </>
  )
}

export default PlanWriteCom
