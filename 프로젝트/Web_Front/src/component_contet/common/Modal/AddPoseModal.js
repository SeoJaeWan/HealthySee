import React, { useState } from "react"
import { Fullscreen, ModalBlock, StyledButton } from "./style/PoseModal_style"

const AddPoseModal = ({
  PoseName,
  PoseCount,
  onCancel,
  visible,
  onIncrease,
  onDecrease,
  onAddPose,
}) => {
  return (
    <Fullscreen visible={visible}>
      <ModalBlock>
        <h2>{PoseName}</h2>
        <div className="flex">
          <div className="times">
            <h3 className="context">횟수</h3>
            <button type="button" onClick={() => onDecrease(PoseCount)}>
              &lt;
            </button>
            <h3>{PoseCount}</h3>
            <button type="button" onClick={() => onIncrease(PoseCount)}>
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
          <StyledButton
            type="button"
            onClick={() => PoseCount > 0 && onAddPose(PoseName, PoseCount)}
          >
            추가
          </StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  )
}
export default AddPoseModal
