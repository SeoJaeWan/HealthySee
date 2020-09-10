import React, { useState } from "react"
import { Fullscreen, ModalBlock, StyledButton } from "./style/PoseModal_style"

const RatingModal = ({ title, number, numberUp, numberDown, onCancel, visible, grades, Start }) => {
  return (
    <Fullscreen visible={visible}>
      <ModalBlock>
        <h2>{title}</h2>
        <div className="flex">
          <h3 className="context">세트</h3>
          <button type="button" onClick={numberDown}>
            &lt;
          </button>
          <h3>{grades}</h3>
          <button type="button" onClick={numberUp}>
            &gt;
          </button>
        </div>
        <div className="buttons">
          <StyledButton type="button" onClick={onCancel}>
            취소
          </StyledButton>
          <StyledButton type="button" cyan onClick={Start}>
            완료
          </StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  )
}
export default RatingModal
