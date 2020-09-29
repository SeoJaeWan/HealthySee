import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import PlanInfoCom from "../../component_contet/component/plan/PlanInfoCom";
import { initialize, readPlan } from "../../modules/plan/plan";
import { changeField } from "../../modules/training/training";

const SetInfoForm = ({ history, match }) => {
  const { planDetail } = useSelector(({ plan }) => ({
    planDetail: plan.planDetail,
  }));
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(changeField({ key: "routin", value: planDetail.PL_Routin }));
    dispatch(changeField({ key: "restTime", value: planDetail.PL_RestTIme }));
    history.push(`/Training/${planDetail.PL_Title}`);
  };
  const planCode = match.params.PlanName;

  useEffect(() => {
    dispatch(readPlan(planCode));

    return () => dispatch(initialize());
  }, [dispatch]);

  return (
    <>
      {planDetail ? (
        <PlanInfoCom onClick={onClick} planDetail={planDetail} />
      ) : (
        /*댓글 코멘트는 포즈에 있는 커맨트를 그대로 이용할 생각
      <CommentCom />
      <RatingModal
        visible={ratingModal}
        ratingCount={ratingCount}
        onCancel={onCancel}
        onComplete={onComplete}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      /> */
        <div>Loading</div>
      )}
    </>
  );
};

export default withRouter(SetInfoForm);
