import React from "react";
import { Fullscreen, AskModalBlock, StyledButton } from "./style/Modal_Style";

const Modal = ({
  visible,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;
  return (
    <Fullscreen>
      <AskModalBlock>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
          {confirmText ? (
            <StyledButton cyan onClick={onConfirm}>
              {confirmText}
            </StyledButton>
          ) : (
            ""
          )}
        </div>
      </AskModalBlock>
    </Fullscreen>
  );
};
export default Modal;
