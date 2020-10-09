import React, { useState } from "react"
import { Container } from "../../style/Container_style"
import { PoseInfoForm } from "./style/PoseInfoCom_style"
import { Link } from "react-router-dom"

const PoseInfoCom = ({ onChangeModal, poseItem, poseModal }) => {
  const { EX_KO_Name, EX_Description, EX_Name } = poseItem.exercise
  const { Review_Count, Review_AVG } = poseItem.exerciserate

  return (
    <>
      <Container>
        <PoseInfoForm>
          <div className="topButton">
            <Link to="/Pose">뒤로가기</Link>
            {/* 결과창 미리보기 */}
            <Link to={`/Pose/${EX_Name}/Result`}>결과창</Link>
            <button type="button" onClick={() => onChangeModal(poseModal)}>
              운동하기
            </button>
          </div>
          <div className="flex">
            <div className="leftForm">
              <div className="titleFrom">
                <img
                  className="profileIMG"
                  src={require(`../../../Images/Excercise/${EX_Name}/${EX_Name}thumnail.jpg`)}
                />
                <dl className="infoForm">
                  <dt>{EX_KO_Name}</dt>
                  <dd>&#9734; : {Review_AVG}</dd>
                  <dd>리뷰 : {Review_Count}</dd>
                </dl>
              </div>
              <dl>
                <dt className="descriptionForm">운동 설명</dt>
                <dd className="explainForm">{EX_Description}</dd>
              </dl>
            </div>
            <div className="rightForm">
              <video
                key={`../../../Images/Excercise/${EX_Name}/${EX_Name}.mp4`}
                className="videoView"
                controls
              >
                <source
                  src={require(`../../../Images/Excercise/${EX_Name}/${EX_Name}.mp4`)}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </PoseInfoForm>
      </Container>
    </>
  )
}

export default PoseInfoCom
