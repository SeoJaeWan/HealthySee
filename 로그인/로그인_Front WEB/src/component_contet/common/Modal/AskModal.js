import React from "react";
import Modal from "./Modal";

const AskModal = ({ visible, title, description, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <Modal
      title={title}
      description={description}
      onConfirm={onConfirm}
      onCancel={onCancel}
      confirmText="확인"
      cancelText="취소"
    />
  );
};
/* 사용자에게 한 번 더 확인을 요청하기 위해 모달 컴포넌트를 만들었다. 모달(Modal)이란 페이지에서 나타난 내용 위에 새 레이어로 어떠한 창을 보여 주는 것을 말한다. */
export default AskModal;
