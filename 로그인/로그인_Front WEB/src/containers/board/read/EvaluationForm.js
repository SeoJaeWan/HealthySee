import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  healthPost,
  undoHealthPost,
  reportPost,
  undoReportPost,
  setEvaluation,
} from "../../../modules/board/evaluation";
import EvaluationCom from "../../../component_contet/common/EvaluationCom";

const EvaluationForm = ({ post, Writer, isHealthsee, isReport }) => {
  const { BO_Healthsee_Count, BO_Report_Count, BO_Code } = post;

  const dispatch = useDispatch();
  const { healthsee, report, healthseeCount, reportCount } = useSelector(
    ({ evaluation }) => ({
      healthsee: evaluation.healthsee,
      report: evaluation.report,
      healthseeCount: evaluation.healthseeCount,
      reportCount: evaluation.reportCount,
    })
  );

  const onHealth = () => {
    if (!healthsee) dispatch(healthPost({ BO_Code }));
    else dispatch(undoHealthPost(BO_Code));
  };

  const onReport = () => {
    if (!report) dispatch(reportPost({ BO_Code }));
    else dispatch(undoReportPost(BO_Code));
  };

  useEffect(() => {
    dispatch(
      setEvaluation({
        isHealthsee,
        isReport,
        BO_Healthsee_Count,
        BO_Report_Count,
      })
    );
  }, [dispatch, isHealthsee, isReport, BO_Healthsee_Count, BO_Report_Count]);

  return (
    <EvaluationCom
      onHealth={onHealth}
      onReport={onReport}
      healthseeCount={healthseeCount}
      reportCount={reportCount}
      Writer={Writer}
    />
  );
};

export default EvaluationForm;
