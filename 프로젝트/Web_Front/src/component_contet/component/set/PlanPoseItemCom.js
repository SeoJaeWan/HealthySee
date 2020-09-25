import React from "react";
import { PlanPoseItemForm } from "./style/PlanPoseItemCom_style";
import IMG from "../../../Images/defaultImg.jpg";

const PlanPoseItemCom = ({ onClick }) => {
  return (
    <>
      <PlanPoseItemForm>
        <div className="titleForms">
          <h2 className="name">이름</h2>
          <h3>횟수 : 5</h3>
          <h3>쉬는시간 : 22</h3>
        </div>
        <div className="contents"></div>
      </PlanPoseItemForm>
    </>
  );
};

export default PlanPoseItemCom;
