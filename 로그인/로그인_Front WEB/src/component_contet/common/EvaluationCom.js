import React, { useState } from "react";
import AskModal from "./Modal/AskModal";
import { EvaluationComForm } from "./style/EvaluationCom_Style";

const EvaluationCom = ({
  onHealth,
  onReport,
  healthseeCount,
  reportCount,
  Writer,
}) => {
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState(null);

  const onActionClick = (e) => {
    setModal(true);
    setAction(e.target.name);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    if (action === "health") onHealth();
    else onReport();
  };

  return (
    <>
      <EvaluationComForm>
        {console.log(modal)}
        <div className="ContentForm">
          <div className="flex">
            <div className="Writer">작성자 : {Writer}</div>
            <div className="Buttondiv">
              <div className="onHealth">
                <button name="health" type={"submit"} onClick={onActionClick}>
                  추천
                </button>
                <div>{healthseeCount}</div>
              </div>
              <hr />
              <div className="onReport">
                <button name="report" type={"submit"} onClick={onActionClick}>
                  신고
                </button>
                <div>{reportCount}</div>
              </div>
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
