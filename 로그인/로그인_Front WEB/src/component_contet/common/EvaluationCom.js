import React, { useState } from "react";
import AskModal from "./AskModal";
import { EvaluationComForm } from "./style/EvaluationCom_Style";

const EvaluationCom = ({ onHealth, onReport, healthseeCount, reportCount }) => {
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState(null);

  const onActionClick = (action) => {
    console.log(action);
    setModal(true);
    setAction(action);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    action();
  };

  return (
    <>
      <EvaluationComForm>
        <div className="ContentForm">
          <div className="PositionB">
            <div>
              <button onClick={() => onActionClick(() => onHealth)}>
                추천
              </button>
              <p>{healthseeCount}</p>
            </div>

            <div>
              <button onClick={() => onActionClick(() => onReport)}>
                신고
              </button>
              <p>{reportCount}</p>
            </div>
          </div>
        </div>
      </EvaluationComForm>

      <AskModal
        visible={modal}
        title="추천&amp;신고"
        description="정말 하시겠습니까?"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default EvaluationCom;
