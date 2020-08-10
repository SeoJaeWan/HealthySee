import React, { useState, useEffect } from "react";
import TrainingCom from "../../component_contet/component/training/TrainingCom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import * as ml5 from "ml5";
import { useDispatch, useSelector } from "react-redux";

import AlertModal from "../../component_contet/common/Modal/AlertModal";
import { changeField } from "../../modules/training/training";

const TrainingForm = ({ history }) => {
  let brain; // AI를 사용하기 위한 변수
  let poseNet; // 카메라를 통해 사용자의 동작을 입력받음

  let dispatch = useDispatch();
  // let { timmer, count, nextPose, poses } = useSelector(({ training }) => ({
  //   timmer: training.timmer,
  //   count: training.count,
  //   nextPose: training.nextPose,
  //   poses: training.poses,
  // }));

  let [view, setView] = useState(true); // 시작 전 모달창을 출력시카기 위해서 사용

  let capture;
  let pose;
  let poses;
  let count = 0;
  let beforePose = 0;
  let samePose = 0;
  let state = 0;
  let skeleton;

  let bad = true;

  // 학습 결과물을 로드하여 판단하는 재귀 함수를 실행시킨다.
  const brainLoaded = () => {
    console.log("pose classification ready!");

    poses = brain.neuralNetworkData.meta.outputs[0].uniqueValues;
    poses.pop();
    poses = poses.concat(poses[0]);

    // console.log(capture);

    // dispatch(changeField({ key: "poses", value: poses }));
  };

  // 무한 재귀함수를 통해 동작은 계속 판단
  // state : 해야할 포즈
  // beforePose : 이전 포즈
  // samePose : 같은 위치에 있는 경우 탈출을 하기위한 변수
  const classifyPose = () => {
    // pose가 확인될 경우
    let inputs = [];
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      inputs.push(x);
      inputs.push(y);
    }

    beforePose = pose;
    brain.classify(inputs, gotResult);
    // pose가 없다면 다시 자기 자신을 호출
  };

  // 동작 검증
  const gotResult = (error, results) => {
    // console.log(results[0].label);
    // 동작의 정확도가 75% 이상이며 해야할 동작과 같은 경우
    if (results[0].confidence > 0.75 && results[0].label === poses[state]) {
      state = state + 1;
      // state이 poses.length와 같다면 한 동작을 완료하였다고 판단
      if (state === poses.length) {
        state = 0; // 상태를 0으로 만든 후 count를 증가
        dispatch(changeField({ key: "count", value: ++count }));
      }
      dispatch(changeField({ key: "nextPose", value: state }));
      // 동작이 배드일 경우 state을 0으로 초기화
    } else if (results[0].label === "배드" && bad) {
      state = 0;
      bad = !bad; // 동시에 여러번 bad가 뜰경우 진행이 불가능 하니 제한을 걸어줌

      // 5초동안 bad가 나오지 않게 설정
      setTimeout(() => {
        bad = !bad;
      }, 5000);
    }

    // 한 동작에서 멈춰있을 경우(화면 밖, 종료 같은 상황) 탈출
    if (pose.score === beforePose.score) {
      samePose++;
      if (samePose === 100) {
        return;
      }
    } else samePose = 0;
  };

  // 카메라를 통해 사용자의 동작을 입력받는 함수
  const gotPoses = (poses) => {
    if (poses.length > 0) {
      pose = poses[0].pose;
      skeleton = poses[0].skeleton;

      // console.log("???");

      classifyPose();
      // if (state === "collecting") {   사용 할수록 성능이 증가하게끔 만드는건 고려중
      //   console.log(pose);
      //   console.log(targetLabel);
      //   let inputs = [];
      //   for (let i = 0; i < pose.keypoints.length; i++) {
      //     let x = pose.keypoints[i].position.x;
      //     let y = pose.keypoints[i].position.y;
      //     console.log(pose.keypoints[i]);
      //     inputs.push(x);
      //     inputs.push(y);
      //   }
      //   console.log(inputs);
      //   let target = [targetLabel];
      //   brain.addData(inputs, target);
      // }
    }
  };

  // let [time, setTime] = useState(90);

  // const timmer = () => {
  //   setInterval(() => {
  //     setTime(--time);
  //     console.log(time);
  //   }, 1000);
  // };

  const goBack = () => {
    history.goBack();
  };

  const setup = (p5) => {
    let canvas = p5.createCanvas(640, 480);
    let div = p5.select(".trainCapture");

    div.child(canvas);

    capture = p5.createCapture(p5.VIDEO);
    capture.hide();

    poseNet = ml5.poseNet(capture);
    poseNet.on("pose", gotPoses);

    let options = {
      inputs: 34,
      outputs: 3,
      task: "classification",
      debug: true,
    };

    brain = ml5.neuralNetwork(options);
    const modelInfo = {
      model: process.env.PUBLIC_URL + "/3pose_Test2/model.json",
      metadata: process.env.PUBLIC_URL + "/3pose_Test2/model_meta.json",
      weights: process.env.PUBLIC_URL + "/3pose_Test2/model.weights.bin",
    };
    brain.load(modelInfo, brainLoaded);

    // console.log(capture);
  };

  const draw = (p5) => {
    // console.log(capture, pose);

    if (capture) {
      p5.push(); // 새로운 도면 시작
      p5.image(capture, 0, 0, 640, 480);

      if (pose) {
        for (let i = 0; i < skeleton.length; i++) {
          let a = skeleton[i][0];
          let b = skeleton[i][1];

          p5.strokeWeight(1);
          p5.stroke(0);

          p5.line(a.position.x, a.position.y, b.position.x, b.position.y);
        }

        for (let i = 0; i < pose.keypoints.length; i++) {
          let x = pose.keypoints[i].position.x;
          let y = pose.keypoints[i].position.y;

          p5.fill(0);
          p5.stroke(255);
          p5.ellipse(x, y, 8, 8);
        }
      }

      p5.pop();
      p5.fill(255, 0, 255);
      p5.noStroke();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setView(false);
    }, 1000);
  }, []);

  return view ? (
    <AlertModal
      visible={view}
      title={"준비!"}
      description={"10초 뒤에 시작합니다! 준비!! (뒤로가기 : 화면)"}
      onCancel={goBack}
    />
  ) : (
    <TrainingCom setup={setup} draw={draw} />
  );
};

export default withRouter(TrainingForm);
