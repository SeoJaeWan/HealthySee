import React, { useState } from "react";
import Modal from "./Modal";
import { ButtonForm } from "./style/ActionButton_style.js";

const ActionButton = ({ onChange, onDelete }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
    console.log("sdasadsad");
  };
  const onConfirm = () => {
    setModal(false);
    onDelete();
  };

  return (
    <>
      {console.log(modal)}
      <ButtonForm>
        <button type="button" onClick={onChange}>
          수정
        </button>
        <hr/>
        <button type="submit" onClick={onRemoveClick}>
          삭제
        </button>
      </ButtonForm>
      {modal && (
        <Modal
          title="삭제"
          description="정말 삭제하시겠습니까?"
          confirmText="확인"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
    </>
  );
};

export default ActionButton;
