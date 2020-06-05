import React, { useState } from "react";
import AskModal from "./AskModal";

const ActionButton = ({ onUpdate, onDelete }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onDelete();
  };

  return (
    <>
      <div>
        <button>수정</button>
        <button onClick={onRemoveClick}>삭제</button>
      </div>
      <AskModal
        visible={modal}
        title="삭제"
        description="정말 삭제하시겠습니까?"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default ActionButton;
