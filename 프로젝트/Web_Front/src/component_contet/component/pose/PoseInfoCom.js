import React from "react";
import { Container } from "../../style/Container_style";
import IMG from "../../../Images/defaultImg.jpg";
import test from "../../../Images/test.mp4";
import { PoseInfoForm } from "./style/PoseInfoCom_style";
import { Link } from "react-router-dom";

const PoseInfoCom = ({ onChangeModal, poseItem }) => {
  console.log(poseItem);
  const { EX_KO_Name, EX_Description } = poseItem.exercise;
  const { Review_Count, Review_AVG } = poseItem.exerciserate;
  return (
    <>
      <Container>
        <PoseInfoForm>
          <div className="topButton">
            <Link to="/Pose">뒤로가기</Link>
            <button type="button" onClick={onChangeModal}>
              운동하기
            </button>
            {/* <Link to="/Pose/Squat/Result">운동하기</Link> */}
          </div>
          <div className="flex">
            <div className="leftForm">
              <div className="titleFrom">
                <img className="profileIMG" src={IMG}></img>
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
              <video className="videoView" controls>
                <source src={test} type="video/mp4" />
              </video>
            </div>
          </div>
        </PoseInfoForm>
      </Container>
    </>
  );
};

export default PoseInfoCom;
