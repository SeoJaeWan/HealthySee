import React from "react"
import { Fullscreen, ModalBlock, StyledButton } from "./style/PoseModal_style"

const RatingModal = ({ onIncrease, onDecrease, onCancel, visible, ratingCount }) => {
  return (
    <Fullscreen visible={visible}>
      <ModalBlock>
        <div className="flex">
          <h3 className="context">평점</h3>
          <button type="button" onClick={() => onDecrease(ratingCount)}>
            &lt;
          </button>
          <h3>{ratingCount}</h3>
          <button type="button" onClick={() => onIncrease(ratingCount)}>
            &gt;
          </button>
        </div>
        <div className="buttons">
          <StyledButton type="button" onClick={() => onCancel(visible)}>
            취소
          </StyledButton>
          <StyledButton type="button" cyan onClick={() => onCancel(visible)}>
            완료
          </StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  )
}
export default RatingModal
