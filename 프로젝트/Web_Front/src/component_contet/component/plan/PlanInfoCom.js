import React from "react"
import { Link } from "react-router-dom"
import { Icon } from "semantic-ui-react"
import { useHorizontalScroll } from "../../../containers/common/SideScroll"
import { Container } from "../../style/Container_style"
import PlanPoseItemCom from "./PlanPoseItemCom"
import { PlanInfoForm } from "./style/PlanInfoCom_style"

const PlanInfoCom = ({ onClick, planDetail, match, onEdit }) => {
  const a = useHorizontalScroll()

  const {
    PL_Description,
    PL_Writer_NickName,
    PL_Title,
    PL_RestTIme,
    PL_Routin,
    P_Evaluation_Count,
    P_Healthsee_Count,
  } = planDetail

  return (
    <>
      <Container>
        <PlanInfoForm>
          <div className="titleFrom">
            <h2>{PL_Title}</h2>
            <h3>휴식 시간 : {PL_RestTIme}s</h3>
            <h3>&#9734; : {P_Healthsee_Count}</h3>
            <h3>리뷰 : {P_Evaluation_Count}</h3>
            <button
              type="submit"
              className="moreButton"
              onClick={() => onEdit(match.params.PlanName, "Write")}
            >
              수정
            </button>
            <Link to={`/Plan/${match.params.PlanName}/Rest`}>휴식화면</Link>
            <button type="button" className="moreButton" onClick={onClick}>
              시작하기
            </button>
          </div>
          <div ref={a} className="content">
            {PL_Routin.map(
              (pose, index) =>
                index % 2 === 0 && (
                  <PlanPoseItemCom poseName={pose} poseCount={PL_Routin[index + 1]} key={index} />
                )
            )}
          </div>

          <div className="contextTitle">
            <h1>세트 설명</h1> <h2 className="writer">작성자 : {PL_Writer_NickName}</h2>
          </div>
          <div className="contextForm">
            <h4>{PL_Description}</h4>
          </div>
        </PlanInfoForm>
      </Container>
    </>
  )
}

export default PlanInfoCom
