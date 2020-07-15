import React from "react";
import { GoalForm } from "../../../style/Mypage/Goal/Goal_Style";
import GoalInfo from "./GoalInfo";
import { Link } from "react-router-dom";

const GoalCom = () => {
  return (
    <GoalForm>
      <div className="IntroForm">
        <div className="TitleForm">
          <div className="Introtitle">목표</div>
          <div className="MoreButton">
            <Link to="/MyPage/GoalBO">더보기</Link>
          </div>
        </div>
        <div className="BoardForm">
          <GoalInfo />
          <GoalInfo />
        </div>
      </div>
    </GoalForm>
  );
};

export default GoalCom;
