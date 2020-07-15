import React from "react";
import AskModal from "../../common/AskModal";

const AskRemoveModal = ({ visible, onCancel, onConfirm }) => {
  return (
    <AskModal
      visible={visible}
      title="삭제"
      description="정말 삭제하시겠습니까?"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default AskRemoveModal;
