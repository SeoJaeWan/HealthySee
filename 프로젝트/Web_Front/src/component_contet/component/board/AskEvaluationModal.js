import React from "react";
import AskModal from "../../common/AskModal";

const AskEvaluationModal = ({ visible, title, onCancel, onConfirm }) => {
  return (
    <AskModal
      visible={visible}
      title={title}
      description={`포스트를 ${title}하시겠습니까?`}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default AskEvaluationModal;
