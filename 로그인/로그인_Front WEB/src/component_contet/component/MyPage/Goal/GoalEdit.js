import React from "react";
import { GoalEditForm } from "../../../style/Mypage/Goal/GoalEdit_Style";
import { Link } from "react-router-dom";
import { Container } from "../../../style/Mypage/RegisterReadCom_Style";
import GoalEditInFoForm from "./GoalEditInfo";
import GoalEditAddFormForm from "./GoalAdd";

const GoalEdit = () => {
  return (
    <Container>
      <GoalEditForm>
        <div className="Board">
          <div className="Title">
            목표
            <button className="WriteButton">
              <Link to="/MyPage/GoalBO">완료</Link>
            </button>
          </div>
          <GoalEditAddFormForm />
        </div>
        <GoalEditInFoForm />
      </GoalEditForm>
    </Container>
  );
};

export default GoalEdit;
