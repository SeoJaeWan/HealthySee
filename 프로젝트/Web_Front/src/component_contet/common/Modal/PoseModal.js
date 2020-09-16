import React, { useState } from "react"
import { Fullscreen, ModalBlock, StyledButton } from "./style/PoseModal_style"

const PoseModal = ({
  title,
  onCancel,
  visible,
  onIncrease,
  onDecrease,
  poseCount,
  onStartButton,
}) => {
  return (
    <Fullscreen visible={visible}>
      <ModalBlock>
        <h2>{title}</h2>
        <div className="flex">
          <div className="times">
            <h3 className="context">횟수</h3>
            <button type="button" onClick={() => onDecrease(poseCount)}>
              &lt;
            </button>
            <h3>{poseCount}</h3>
            <button type="button" onClick={() => onIncrease(poseCount)}>
              &gt;
            </button>
          </div>
        </div>
        <h2>최근한 횟수</h2>
        <div className="flex">
          <button className="recentTime" type="submit">
            1
          </button>
          <button className="recentTime" type="submit">
            2
          </button>
          <button className="recentTime" type="submit">
            3
          </button>
        </div>
        <div className="buttons">
          <StyledButton type="button" onClick={onCancel}>
            취소
          </StyledButton>
          <StyledButton type="button" cyan onClick={() => poseCount > 0 && onStartButton()}>
            시작하기
          </StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  )
}
export default PoseModal
