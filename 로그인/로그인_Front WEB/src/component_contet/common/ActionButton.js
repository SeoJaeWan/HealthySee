import React, { useState } from "react";
import AskModal from "./AskModal";
import {ButtonForm} from "./style/ActionButton_Style.js"

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
      <ButtonForm>
        <button>수정</button>
        
        <hr></hr>
        <button onClick={onRemoveClick}>삭제</button>
      </ButtonForm>
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
