import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import * as ml5 from "ml5"
import { useDispatch, useSelector } from "react-redux"

import AlertModal from "../../component_contet/common/Modal/AlertModal"
import { loggingExercise, increaseField } from "../../modules/training/training"
import ExerciseCom from "../../component_contet/component/training/exercise/ExerciseCom"

const ExerciseForm = ({ history, match }) => {
  let brain // AI를 사용하기 위한 변수
  let poseNet // 카메라를 통해 사용자의 동작을 입력받음

  let poses // 사용자의 포즈

  //  poseNet 함수 안에서 사용됨
  let timmer // 사용자의 횟수 별 시간 측정
  let state = 0 // 현재 상태
  let count = 0 // 현재 횟수

  let dispatch = useDispatch()
  // 서버에 전송할 정보
  let { routin, poseCount, type, success_count } = useSelector(({ training }) => ({
    routin: training.routin,
    poseCount: training.poseCount,
    success_count: training.success_count,
    type: training.type,
  }))

  let [view, setView] = useState(true) // 시작 전 모달창을 출력시카기 위해서 사용
  // 운동 페이지에서만 쓰일 정보
  let [training, setTraining] = useState({
    pose: null, // 동작
    skeleton: null, // 구분점

    poseLabel: null, // 사용자가 취한 포즈

    state: 0, // 다음 해야할 동작
    poses: [], // 운동 포즈

    poseNet: null,
  })

  // AI 입력 및 해야할 운동 저장
  const brainLoaded = () => {
    console.log("pose classification ready!")
    poses = brain.neuralNetworkData.meta.outputs[0].uniqueValues
    poses.pop()
    poses = poses.concat(poses[0])
  }

  // 동작 검증을 위해 AI에 입력
  const classifyPose = (pose) => {
    let inputs = []
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x
      let y = pose.keypoints[i].position.y
      inputs.push(x)
      inputs.push(y)
    }
    brain.classify(inputs, gotResult)
  }

  //  75% 이상 정확도가 있는 사용자의 동작을 저장
  const gotResult = (error, results) => {
    console.log(
      results[0].label === poses[state],
      results[0].label,
      poses[state],
      match.params.type
    )
    if (results[0].label === poses[state]) {
      if (
        // 한 동작을 완료하여 상태를 0으로 초기화 및 카운트 증가
        poses.length > 0 &&
        state + 1 === poses.length
      ) {
        state = 0
        count++
        console.log(new Date().getTime())

        timmer = new Date().getTime() - timmer
        dispatch(increaseField({ key: "success_count", value: timmer }))

        // 운동 완료 시 로비 화면으로 이동
        if (count === routin[poseCount + 1]) {
          poseNet.video = null
          dispatch(loggingExercise())
        }
      } else {
        // 구분 동작으로 한 동작을 수행 후 다음 동작으로 넘김
        if (state === 0) {
          timmer = new Date().getTime()
        }
        state++
      }
    } else if (results[0].label === "배드") {
      // 잘못된 자세를 취할 경우 상태를 0으로 초기화
      state = 0
      dispatch(increaseField({ key: "fault_count" }))
    }

    setTraining((prev) => ({ ...prev, state }))
  }

  // 사용자의 포즈를 카메라를 통해 입력받아 추출
  const gotPoses = (poses) => {
    if (poses.length > 0) {
      let pose = poses[0].pose
      let skeleton = poses[0].skeleton

      setTraining((prev) => ({ ...prev, pose, skeleton }))
      classifyPose(pose)
    }
  }

  // 최초 화면 설정
  const setup = (p5) => {
    let canvas
    {
      type === true
        ? (canvas = p5.createCanvas(window.innerWidth, window.innerHeight / 2.5))
        : (canvas = p5.createCanvas(500, 600))
    }
    let div = p5.select(".trainCapture")

    div.child(canvas)
    canvas.x = 2000
    let capture = p5.createCapture(p5.VIDEO) // 카메라 입력받기 시작
    capture.hide()

    poseNet = ml5.poseNet(capture) // 카메라를 통해 받은 입력에서 동작을 추출
    poseNet.on("pose", gotPoses)

    let options = {
      // 학습 정보 설정
      inputs: 34,
      outputs: 3,
      task: "classification",
      debug: true,
    }

    brain = ml5.neuralNetwork(options)
    const modelInfo = {
      model: process.env.PUBLIC_URL + "/3pose_Test2/model.json",
      metadata: process.env.PUBLIC_URL + "/3pose_Test2/model_meta.json",
      weights: process.env.PUBLIC_URL + "/3pose_Test2/model.weights.bin",
    }
    brain.load(modelInfo, brainLoaded) // AI 모듈 로드
    setTraining((prev) => ({ ...prev, capture }))
  }

  // 최초 화면 세팅 후 자체 반복하며 화면에 출력
  const draw = (p5) => {
    if (training.capture) {
      p5.push() // 새로운 도면 시작
      {
        type === true
          ? p5.image(training.capture, 0, 0, window.innerWidth, window.innerHeight / 2.5)
          : p5.image(training.capture, 0, 0, 500, 600)
      }

      // 입력 받은 포즈의 골격 등을 화면에 출력
      if (training.pose) {
        let currentPose = training.pose
        let currentSkeleton = training.skeleton
        for (let i = 0; i < currentSkeleton.length; i++) {
          let a = currentSkeleton[i][0]
          let b = currentSkeleton[i][1]

          p5.strokeWeight(1)
          p5.stroke(0)

          p5.line(a.position.x, a.position.y, b.position.x, b.position.y)
        }

        for (let i = 0; i < currentPose.keypoints.length; i++) {
          let x = currentPose.keypoints[i].position.x
          let y = currentPose.keypoints[i].position.y

          p5.fill(0)
          p5.stroke(255)
          p5.ellipse(x, y, 8, 8)
        }
      }

      p5.pop()
      p5.fill(255, 0, 255)
      p5.noStroke()
    }
  }

  // 제일 처음 모달창 10초 뒤 제거
  useEffect(() => {
    console.log(match.params)
    let modal
    let clock
    modal = setTimeout(() => {
      setView(false)
      clock = setInterval(() => {
        dispatch(increaseField({ key: "timmer" }))
      }, 1000)
    }, 1000)

    return () => {
      clearTimeout(modal) // 모달창 종료 setTimeout 제거
      clearInterval(clock) // 시간 카운팅 setInterval 제거
    }
  }, [dispatch])

  return (
    <>
      <AlertModal
        visible={view}
        title={"준비!"}
        description={"10초 뒤에 시작합니다! 준비!! (뒤로가기 : 화면)"}
        onCancel={() => history.goBack()}
      />
      <ExerciseCom
        type={type}
        setup={setup}
        draw={draw}
        count={success_count}
        training={training}
        routin={routin}
        timmer={timmer}
      />
    </>
  )
}

export default withRouter(ExerciseForm)
