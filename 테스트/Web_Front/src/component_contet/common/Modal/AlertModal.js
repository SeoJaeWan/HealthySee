import React from "react";
import Modal from "./Modal";

const AlertModal = ({ visible, title, description, onCancel }) => {
  if (!visible) return null;
  return (
    <>
      <Modal
        title={title}
        description={description}
        onCancel={onCancel}
        cancelText="뒤로가기"
      />
    </>
  );
};

export default AlertModal;
