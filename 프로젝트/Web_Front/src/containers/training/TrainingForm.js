import React, { useState } from "react";
import TrainingCom from "../../component_contet/component/training/TrainingCom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import * as ml5 from "ml5";

const TrainingForm = ({ match, history }) => {
  let brain;
  let poseNet;

  let poses;
  let [view, setView] = useState(true);
  let [info, setInfo] = useState({
    capture: null,
    pose: null,
    skeleton: null,
    count: 0,
  });
  let capture;

  let pose;
  let skeleton;

  const option = {
    architecture: "MobileNetV1",
    imageScaleFactor: 0.3,
    outputStride: 16,
    flipHorizontal: false,
    minConfidence: 0.75,
    maxPoseDetections: 1,
    scoreThreshold: 0.7,
    nmsRadius: 20,
    detectionType: "multiple",
    inputResolution: 321,
    multiplier: 0.75,
    quantBytes: 2,
  };

  const brainLoaded = () => {
    console.log("pose classification ready!");
    console.log(pose);
    poses = brain.neuralNetworkData.meta.outputs[0].uniqueValues;
    poses = poses.concat(poses[0]);

    let beforeState;

    classifyPose(0, 0, beforeState);
  };

  const classifyPose = (state, c, beforeState) => {
    if (pose) {
      // 현재 1번만 score가 같으면 재귀함수 탈출 이부분을 한 10번 정도 반복하면 바뀌게끔 하면 될듯
      let inputs = [];
      for (let i = 0; i < pose.keypoints.length; i++) {
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        inputs.push(x);
        inputs.push(y);
      }
      if (c === 9) {
        console.log("sadsadsad");
        c = 0;
        console.log(pose);

        if (beforeState && beforeState.score === pose.score) {
          return;
        }

        beforeState = pose;
      }
      c++;
      console.log(c);
      brain.classify(inputs, (error, results) =>
        gotResult(error, results, state, c, beforeState)
      );
    } else {
      setTimeout(() => classifyPose(state, c, beforeState), 100);
    }
  };

  const gotResult = (error, results, state, c, beforeState) => {
    if (results[0].confidence > 0.75 && results[0].label === poses[state]) {
      state = state + 1;

      if (state === poses.length) {
        state = 1;

        setInfo((pre) => ({ ...pre, count: pre.count + 1 }));
      }

      console.log(results[0].label.toUpperCase()); // results[0].label 이 어떤 것인지를 나타냄 동작의 이름
    }
    classifyPose(state, c, beforeState);
  };

  const gotPoses = (poses) => {
    console.log("sadsadsadasd");
    console.log(poses);
    if (poses.length > 0) {
      pose = poses[0].pose;
      skeleton = poses[0].skeleton;
      setInfo((pre) => ({
        ...pre,
        pose,
        skeleton,
      }));
      // console.log(poses);

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

  const goBack = () => {
    history.goBack();
  };

  const onCheck = () => {
    console.log("saddsaasd", info.capture);
    poseNet = ml5.poseNet(info.capture, option);
    poseNet.on("pose", gotPoses);

    setTimeout(() => {
      brain = ml5.neuralNetwork();

      setView(false);

      const modelInfo = {
        model: process.env.PUBLIC_URL + "/model.json",
        metadata: process.env.PUBLIC_URL + "/model_meta.json",
        weights: process.env.PUBLIC_URL + "/model.weights.bin",
      };
      brain.load(modelInfo, brainLoaded);
    }, 100);
  };

  window.addEventListener("beforeunload", function (e) {
    let confirmationMessage = "정말 닫으시겠습니까?";
    e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
    return confirmationMessage; // Gecko, WebKit, Chrome < 34
  });

  const setup = (p5) => {
    let canvas = p5.createCanvas(640, 480);
    let div = p5.select(".trainCapture");

    div.child(canvas);

    capture = p5.createCapture(p5.VIDEO);
    capture.hide();

    setInfo((pre) => ({ ...pre, capture }));
  };

  const draw = (p5, pose, skeleton) => {
    p5.push(); // 새로운 도면 시작
    p5.image(info.capture, 0, 0, 640, 480);

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
  };

  return (
    <>
      <TrainingCom
        match={match}
        setup={setup}
        draw={draw}
        pose={info.pose}
        skeleton={info.skeleton}
        onCheck={onCheck}
      />
    </>
  );
};

export default withRouter(TrainingForm);
