import React from "react";
import { Icon } from "semantic-ui-react";
import { useHorizontalScroll } from "../../../containers/common/SideScroll";
import IMG from "../../../Images/defaultImg.jpg";
import PlanPoseItemCom from "./PlanPoseItemCom";
import { PlanItemForm } from "./style/PlanItemCom_style";

const PlanItemCom = ({ onClick, plan }) => {
  const a = useHorizontalScroll();
  const { PL_Code, PL_Title, PL_Creation_Date, PL_Routin } = plan;

  const routin = PL_Routin.slice(1, PL_Routin.length - 1)
    .replace(/"/gi, "")
    .split(",");

  console.log(routin);
  return (
    <>
      <PlanItemForm>
        {routin}
        <div className="titleFrom">
          <h2>{PL_Title}</h2>
          <h3>&#9734; : 5</h3>
          <h3>리뷰 : 22</h3>
          <h3>{PL_Creation_Date.slice(0, 10)}</h3>
          <button
            type="button"
            className="moreButton"
            onClick={() => onClick(PL_Code)}
          >
            <Icon link name="play" />
          </button>
        </div>
        <div ref={a} className="content">
          <PlanPoseItemCom />
          <PlanPoseItemCom />
          <PlanPoseItemCom />
          <PlanPoseItemCom />
          <PlanPoseItemCom />
          <PlanPoseItemCom />
        </div>
      </PlanItemForm>
    </>
  );
};

export default PlanItemCom;
