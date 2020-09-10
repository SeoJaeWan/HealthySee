import React from "react";
import { PoseItemForm } from "./style/PoseItemCom_style";
import IMG from "../../../Images/defaultImg.jpg";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";

const PoseItemCom = ({ onClick, selected, Menu }) => {
  return (
    <>
      <PoseItemForm onClick={() => onClick()}>
        <div className="titleFrom">
          <img className="profileIMG" src={IMG}></img>
          <dl>
            <dt>스쿼트</dt>
            <dd>&#9734; : 4.5</dd>
            <dd>리뷰 : 4.5</dd>
          </dl>
        </div>
        <div className="content">
          <ScrollMenu
            data={Menu()}
            dragging={false}
            onSelect={false}
            selected={selected}
          />
        </div>
      </PoseItemForm>
    </>
  );
};

export default PoseItemCom;
