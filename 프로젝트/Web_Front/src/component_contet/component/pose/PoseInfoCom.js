import React from "react";
import { Container } from "../../style/Container_style";
import IMG from "../../../Images/defaultImg.jpg";
import test from "../../../Images/test.mp4";
import { PoseInfoForm } from "./style/PoseInfoCom_style";
import { Link } from "react-router-dom";

const PoseInfoCom = ({ onChangeModal }) => {
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
