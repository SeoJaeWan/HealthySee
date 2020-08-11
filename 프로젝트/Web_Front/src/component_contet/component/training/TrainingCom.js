import React from "react";
import Sketch from "react-p5";
import styled from "styled-components";

const TrainingCom = ({ setup, draw, count, training }) => {
  return (
    <>
      <TrainBox>
        <h1>{count}</h1>
        {/* {console.log(count)} */}
        <div className="trainImg">
          {/* <p>{training.poses[training.state]}</p> */}
          {/* <p>{count}</p> */}
          <p>{training.state}</p>
        </div>
        <div className="trainCapture">
          {/* {console.log(pose)} */}
          <Sketch setup={setup} draw={draw} />
        </div>
      </TrainBox>

      <div>
        {/* <div>횟수 : {info.count}</div>
        <div>시간 : {time}</div> */}
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
