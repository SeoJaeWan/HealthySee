import React from "react";
import { GoalEditAddForm } from "../../../style/Mypage/Goal/GoalEditAddForm_Style.js";

const GoalAdd = () => {
  return (
    <GoalEditAddForm>
      <div className="BoardForm">
        <div className="CategoryForm">
          <div className="Category">제목</div>
          <div className="Category">시작값</div>
          <div className="Category">목표값</div>
          <div className="marginbox"></div>
        </div>
        <div className="InfoForm">
          <div className="TitleInfo">
            <input type="text" />
          </div>
          <div className="MinUnit">
            <input type="text" />
          </div>
          <div className="MaxUnit">
            <input type="text" />
          </div>

          <button className="AddButton">+</button>
        </div>
      </div>
    </GoalEditAddForm>
  );
};

export default GoalAdd;
