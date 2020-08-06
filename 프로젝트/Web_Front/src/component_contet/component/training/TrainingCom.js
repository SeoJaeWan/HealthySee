import React from "react";
import Sketch from "react-p5";
import styled from "styled-components";

const TrainingCom = ({ setup, draw, info }) => {
  return (
    <>
      <TrainBox>
        <div className="trainImg">
          <p>{info.poses[info.nextPose]}</p>
        </div>
        <div className="trainCapture">
          {/* {console.log(pose)} */}
          <Sketch
            setup={setup}
            draw={(p5) => draw(p5, info.pose, info.skeleton)}
          />
        </div>
      </TrainBox>

      <div>
        <div>asdsdaads</div>
        <div>sadsadasd</div>
      </div>
    </>
  );
};

const TrainBox = styled.div`
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
