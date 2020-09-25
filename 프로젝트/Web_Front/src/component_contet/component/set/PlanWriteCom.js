import React from "react";
import { Icon } from "semantic-ui-react";
import { useHorizontalScroll } from "../../../containers/common/SideScroll";
import IMG from "../../../Images/defaultImg.jpg";
import { Container } from "../../style/Container_style";
import PlanPoseItemCom from "./PlanPoseItemCom";
import { PlanWriteForm } from "./style/PlanWriteCom_style";

const PlanWriteCom = ({ onClick }) => {
  const a = useHorizontalScroll();
  return (
    <>
      <Container>
        <PlanWriteForm>
          <div className="titleFrom">
            <h1>제목</h1>
            <input type="text" className="titleInput"></input>
            <button
              type="button"
              className="writeButton"
              onClick={() => onClick("")}
            >
              만들기
            </button>
            <button
              type="button"
              className="addButton"
              onClick={() => onClick("Add")}
            >
              추가하기
            </button>
          </div>
          <div ref={a} className="content">
            <PlanPoseItemCom />
          </div>
          <h1 className="setTitle">세트 설명</h1>
          <div className="textForm">
            <textarea className="textArea" type="text" name="BO_Content" />
          </div>
        </PlanWriteForm>
      </Container>
    </>
  );
};

export default PlanWriteCom;
