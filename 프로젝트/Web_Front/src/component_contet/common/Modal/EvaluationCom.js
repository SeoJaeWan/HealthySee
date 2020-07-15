import React, { useState } from "react";
import AskModal from "./AskModal";
import { EvaluationComForm } from "./style/EvaluationCom_style";

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
    if (action === "추천") onHealth();
    else onReport();
  };

  return (
    <>
      <EvaluationComForm>
        <div className="contentForm">
          <h3 className="writer">작성자 : {Writer}</h3>
          <table className="buttonForm">
            <thead>
              <tr>
                <th>
                  <button type="submit" name="추천" onClick={onActionClick}>
                    추천
                  </button>
                </th>
                <th>
                  <button type="submit" name="신고" onClick={onActionClick}>
                    신고
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{healthseeCount}</th>
                <th> {reportCount}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </EvaluationComForm>
      <AskModal
        visible={modal}
        title={action}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default EvaluationCom;
