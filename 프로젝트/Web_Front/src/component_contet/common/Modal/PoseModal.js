import React, { useState } from "react"
import { Fullscreen, ModalBlock, StyledButton } from "./style/PoseModal_style"

const PoseModal = ({
  title,
  number,
  numberUp,
  numberDown,
  onCancel,
  visible,
  timeUp,
  timeDown,
  time,
  Start,
}) => {
  return (
    <Fullscreen visible={visible}>
      <ModalBlock>
        <h2>{title}</h2>
        <div className="flex">
          <div className="times">
            <h3 className="context">세트</h3>
            <button type="button" onClick={numberDown}>
              &lt;
            </button>
            <h3>{number}</h3>
            <button type="button" onClick={numberUp}>
              &gt;
            </button>
          </div>
          <div className="times">
            <h3 className="context">횟수</h3>
            <button type="button" onClick={timeDown}>
              &lt;
            </button>
            <h3>{time}</h3>
            <button type="button" onClick={timeUp}>
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
          <StyledButton type="button" cyan onClick={Start}>
            시작하기
          </StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  )
}
export default PoseModal
