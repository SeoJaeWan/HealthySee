import React from "react";
import { PoseItemForm } from "./style/PoseItemCom_style";
import IMG from "../../../Images/defaultImg.jpg";
import ScrollMenu from "react-horizontal-scrolling-menu";

const PoseItemCom = ({ onClick, pose }) => {
  const { EX_Name, EX_KO_Name, Review_Count, Review_AVG } = pose;
  return (
    <>
      <PoseItemForm onClick={() => onClick(EX_Name)}>
        {console.log(pose, EX_KO_Name)}
        <div className="titleFrom">
          <img className="profileIMG" src={IMG}></img>
          <dl>
            <dt>{EX_KO_Name}</dt>
            <dd>&#9734; : {Review_AVG}</dd>
            <dd>리뷰 : {Review_Count}</dd>
          </dl>
        </div>
        <div className="content">
          <ScrollMenu dragging={false} onSelect={false} pose={pose} />
        </div>
      </PoseItemForm>
    </>
  );
};

export default PoseItemCom;
