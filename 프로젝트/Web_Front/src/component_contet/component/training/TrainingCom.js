import React from "react";
import Sketch from "react-p5";
import styled from "styled-components";

const TrainingCom = ({ setup, draw, info }) => {
  return (
    <TrainContainer>
      <div className="trainImg">
        <p>{info.my && info.my}</p>
      </div>
      <div className="trainCapture">
        {/* {console.log(pose)} */}
        <Sketch
          setup={setup}
          draw={(p5) => draw(p5, info.pose, info.skeleton)}
        />
      </div>
    </TrainContainer>
  );
};

const TrainContainer = styled.div`
  width: 100%;

  padding-top: 100px;

  display: flex;
  justify-content: center;

  .trainImg {
    width: 630px;
    height: 480px;

    background-color: yellow;
    font-size: 300px;
    text-align: center;
  }

  .trainCapture {
    width: 630px;
  }
`;

export default TrainingCom;
