import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import PlanSelectCom from "../../component_contet/component/set/PlanSelectCom";
import { listPlan, readPlan } from "../../modules/plan/plan";

const PlanForm = ({ history }) => {
  const { planList } = useSelector(({ plan }) => ({
    planList: plan.planList,
  }));
  const dispatch = useDispatch();

  const onClick = (setName, code) => {
    dispatch(readPlan(code));
    history.push(`/Plan/${setName}`);
  };

  useEffect(() => {
    dispatch(listPlan());
  }, [dispatch]);

  return (
    <>
      {" "}
      {planList ? (
        <PlanSelectCom onClick={onClick} planList={planList} />
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default withRouter(PlanForm);
