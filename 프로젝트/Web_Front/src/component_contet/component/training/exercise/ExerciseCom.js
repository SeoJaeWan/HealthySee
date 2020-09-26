import React from "react"
import Sketch from "react-p5"
import { TrainBox, Progress, TrainBoxApp } from "../style/TrainingCom_style"

const ExerciseCom = ({ setup, draw, count, training, routin }) => {
  return (
    <>
      {/* 앱 화면을 위해서 주석 */}
      {/* <Progress value="1" max="10"></Progress>
      시간 넣을곳 퍼센트 바로 해서 사용 ( training.timmer ) */}

      <TrainBoxApp>
        <div className="infoForm">
          <h2>횟수 : {count}/12</h2>
          <h2>시간 : 30s</h2>
        </div>
        {/* 앱 화면을 위해서 주석 */}
        {/* {console.log(routin)}
        <h1>{routin[0]}</h1> */}
        {/* {console.log(count)} */}
        <div className="trainCapture">
          {/* {console.log(pose)} */}
          <Sketch setup={setup} draw={draw} />
        </div>
        <div className="trainImg">
          {/* <p>{training.poses[training.state]}</p> */}
          {/* <p>{count}</p> */}

          <p>{training.state}</p>

          {/* 숫자 이미지 띄울곳 테두리 시계방향 에니메이션 + 개수 표현 ( count )*/}
        </div>
      </TrainBoxApp>

      <div>{/* <div>횟수 : {info.count}</div>
        <div>시간 : {time}</div> */}</div>
    </>
  )
}

export default ExerciseCom
