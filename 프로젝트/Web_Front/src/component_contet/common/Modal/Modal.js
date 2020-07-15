import React from "react";
import { Fullscreen, AskModalBlock, StyledButton } from "./style/Modal_Style";

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
      <AskModalBlock>
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
      </AskModalBlock>
    </Fullscreen>
  );
};
export default Modal;
