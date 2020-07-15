import React from "react";
import { GoalEditInFoForm } from "../../../style/Mypage/Goal/GoalEditInfo_Style.js";

const GoalEditInfo = () => {

  return (
    <GoalEditInFoForm>
      <div className="BoardForm">
        <div className="CategoryForm">
          <div className="Category">제목</div>
          <div className="Category">시작값</div>
          <div className="Category">목표값</div>
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
        </div>
      </div>
    </GoalEditInFoForm>
  );
};

export default GoalEditInfo;
