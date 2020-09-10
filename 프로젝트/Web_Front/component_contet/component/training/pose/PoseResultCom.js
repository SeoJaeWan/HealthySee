import React from "react"
import { Container } from "../../../style/Container_style"
import IMG from "../../../../Images/defaultImg.jpg"
import { Link } from "react-router-dom"
import { PoseResultForm } from "./style/PoseResultCom_style"

const PoseResultCom = () => {
  return (
    <>
      <Container>
        <PoseResultForm>
          <div className="topButton">
            <Link to="/Pose">처음으로</Link>
            <Link to="/Pose/Squat/">다시하기</Link>
          </div>
          <div className="leftForm">
            <div className="titleFrom">
              <img className="profileIMG" src={IMG}></img>
              <dl className="infoForm">
                <dt>스쿼트</dt>
                <dd>&#9734; : 4.5</dd>
                <dd>리뷰 : 4.5</dd>
              </dl>
            </div>
            <dl>
              <dt className="descriptionForm">운동 설명</dt>
              <dd className="explainForm">설명 넣는곳</dd>
            </dl>
          </div>
        </PoseResultForm>
      </Container>
    </>
  )
}

export default PoseResultCom
