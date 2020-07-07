import React, { useState } from "react";
import { GoalBOForm, GraphForm } from "../../../style/Mypage/Goal/GoalBO_Style";
import { Container } from "../../../style/Mypage/RegisterReadCom_Style";
import { Link } from "react-router-dom";
import GoalInfo from "./GoalInfo";
import GraphInfo from "./GoalGraph";

const GoalBO = () => {
  const [isView, setView] = useState(true);
  const setTrigger = () => {
    return setView(!isView);
  };

  return (
    <Container>
      <GoalBOForm>
        <div className="Board">
          <div className="Title">
            목표
            <button className="EditButton">
              <Link to="/Mypage/GoalBO/GoalEdit">편집하기</Link>
            </button>
          </div>
          <div className="BoardForm">
            <button className="Z_index" onClick={() => setView(setTrigger)}>
              <GoalInfo />
            </button>
            <GraphForm isView={isView}>
              <GraphInfo />
            </GraphForm>
          </div>
          
        </div>
      </GoalBOForm>
    </Container>
  );
};

export default GoalBO;
