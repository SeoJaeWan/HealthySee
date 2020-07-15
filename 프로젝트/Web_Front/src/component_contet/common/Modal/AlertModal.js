import React from "react";
import Modal from "./Modal";

const AlertModal = ({ visible, title, error, onCheck }) => {
  if (!visible) return null;
  return (
    <Modal
      title={title}
      description={error}
      onCancel={onCheck}
      cancelText="뒤로가기"
    />
  );
};

export default AlertModal;
