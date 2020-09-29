import React from "react";
import { Icon } from "semantic-ui-react";
import { useHorizontalScroll } from "../../../containers/common/SideScroll";
import { Container } from "../../style/Container_style";
import PlanPoseItemCom from "./PlanPoseItemCom";
import { PlanInfoForm } from "./style/PlanInfoCom_style";

const PlanInfoCom = ({ onClick, planDetail }) => {
  const a = useHorizontalScroll();

  const {
    PL_Writer_NickName,
    PL_Title,
    PL_RestTIme,
    PL_Routin,
    P_Evaluation_Count,
    P_Healthsee_Count,
  } = planDetail;

  return (
    <>
      <Container>
        <PlanInfoForm>
          <div className="titleFrom">
            <h2>{PL_Title}</h2>
            <h3>휴식 시간 : {PL_RestTIme}s</h3>
            <h3>&#9734; : {P_Healthsee_Count}</h3>
            <h3>리뷰 : {P_Evaluation_Count}</h3>
            <button type="button" className="moreButton" onClick={onClick}>
              시작하기
            </button>
          </div>
          <div ref={a} className="content">
            {PL_Routin.map(
              (pose, index) =>
                index % 2 === 0 && (
                  <PlanPoseItemCom
                    poseName={pose}
                    poseCount={PL_Routin[index + 1]}
                    key={index}
                  />
                )
            )}
          </div>
        </PlanInfoForm>
      </Container>
    </>
  );
};

export default PlanInfoCom;
