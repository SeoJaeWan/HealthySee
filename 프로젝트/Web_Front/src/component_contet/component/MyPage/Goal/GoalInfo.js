import React from "react";
import { GoalInFoForm } from "../../../style/Mypage/Goal/GoalInfo_Style";

const GoalInfo = () => {
  return (
    <GoalInFoForm>
      <div className="TitleInfo"> 제목 들어갈칸 </div>
      <div className="UnitInfo">
        <div className="Unitform">
          <div className="MinUnit">100kg</div>
          <div className="MaxUnit">80kg</div>
        </div>
        <progress value="50" max="100"></progress>
      </div>
    </GoalInFoForm>
  );
};

export default GoalInfo;
