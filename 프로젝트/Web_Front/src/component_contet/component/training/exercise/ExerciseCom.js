import React from "react"
import Sketch from "react-p5"
import { Link } from "react-router-dom"
import { TrainBox, Progress, TrainBoxApp } from "../style/TrainingCom_style"

const ExerciseCom = ({ setup, draw, count, training, routin, type, timmer }) => {
  return (
    <>
      {type === true ? (
        <>
          <TrainBoxApp>
            <div className="infoForm">
              <h2>운동명</h2>
              <h2>
                횟수 : {count}/{routin[1]}
              </h2>
              <h2>시간 : {timmer}s</h2>
            </div>
            <div className="trainCapture">
              <Sketch setup={setup} draw={draw} />
            </div>
            <div className="trainImg">
              {training.state === 2 ? (
                <img src={require(`../../../../Images/Excercise/squat/squatUP.gif`)} />
              ) : (
                <img src={require(`../../../../Images/Excercise/squat/squatDown.gif`)} />
              )}
            </div>
          </TrainBoxApp>
        </>
      ) : (
        <>
          <TrainBox>
            <div className="infoForm">
              <h2>운동명</h2>
              <h2>
                횟수 : {count}/{routin[1]}
              </h2>
              <h2>시간 : {timmer}s</h2>
            </div>
            <div className="trainForm">
              <div className="trainCapture">
                <Sketch setup={setup} draw={draw} />
              </div>
              <div className="trainImg">
                {training.state === 2 ? (
                  <img src={require(`../../../../Images/Excercise/squat/squatUP.gif`)} />
                ) : (
                  <img src={require(`../../../../Images/Excercise/squat/squatDown.gif`)} />
                )}
              </div>
            </div>
          </TrainBox>
        </>
      )}
    </>
  )
}

export default ExerciseCom
