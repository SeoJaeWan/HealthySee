import React from "react";
import Sketch from "react-p5";
import { TrainBox, Progress } from "./style/TrainingCom_style";

const TrainingCom = ({ setup, draw, count, training }) => {
  return (
    <>
      <Progress value="1" max="10"></Progress>
      {/* 시간 넣을곳 퍼센트 바로 해서 사용 ( training.timmer ) */}

      <TrainBox>
        <h1>{count}</h1>
        {/* {console.log(count)} */}
        <div className="trainImg">
          {/* <p>{training.poses[training.state]}</p> */}
          {/* <p>{count}</p> */}

          <p>{training.state}</p>

          {/* 숫자 이미지 띄울곳 테두리 시계방향 에니메이션 + 개수 표현 ( count )*/}
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

export default TrainingCom;
