import React, { useState } from "react";
import { Fullscreen, ModalBlock, StyledButton } from "./style/PoseModal_style";

const PoseModal = ({
  title,
  onCancel,
  visible,
  onIncrease,
  onDecrease,
  count,
  onStartButton,
}) => {
  return (
    <Fullscreen visible={visible}>
      <ModalBlock>
        <h2>{title}</h2>
        <div className="flex">
          <div className="times">
            <h3 className="context">횟수</h3>
            <button type="button" onClick={onDecrease}>
              &lt;
            </button>
            <h3>{count}</h3>
            <button type="button" onClick={onIncrease}>
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
          <StyledButton type="button" cyan onClick={onStartButton}>
            시작하기
          </StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
};
export default PoseModal;
