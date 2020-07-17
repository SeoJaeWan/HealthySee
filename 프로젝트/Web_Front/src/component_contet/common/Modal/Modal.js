import React from "react";
import { Fullscreen, ModalBlock, StyledButton } from "./style/Modal_style";

const Modal = ({
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  return (
    <Fullscreen>
      <ModalBlock>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <StyledButton type="button" onClick={onCancel}>
            {cancelText}
          </StyledButton>
          {confirmText ? (
            <StyledButton type="button" cyan onClick={onConfirm}>
              {confirmText}
            </StyledButton>
          ) : (
            ""
          )}
        </div>
      </ModalBlock>
    </Fullscreen>
  );
};
export default Modal;
