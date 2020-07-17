import React from "react";
import TrainingCom from "../../component_contet/component/training/TrainingCom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import * as ml5 from "ml5";

const TrainingForm = ({ match }) => {
  let brain;
  let poseNet;

  let capture;

  let pose;
  let skeleton;

  const option = {
    architecture: "MobileNetV1",
    imageScaleFactor: 0.3,
    outputStride: 16,
    flipHorizontal: false,
    minConfidence: 0.75,
    maxPoseDetections: 5,
    scoreThreshold: 0.7,
    nmsRadius: 20,
    detectionType: "multiple",
    inputResolution: 257,
    multiplier: 0.5,
    quantBytes: 2,
  };

  const brainLoaded = () => {
    console.log("pose classification ready!");
    classifyPose();
  };

  const classifyPose = () => {
    if (pose) {
      let inputs = [];
      for (let i = 0; i < pose.keypoints.length; i++) {
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        inputs.push(x);
        inputs.push(y);
      }
      brain.classify(inputs, gotResult);
    } else {
      setTimeout(classifyPose, 100);
    }
  };

  const gotResult = (error, results) => {
    // if (results[0].confidence > 0.75) {
    //   poseLabel = results[0].label.toUpperCase(); // results[0].label 이 어떤 것인지를 나타냄 동작의 이름
    // }
    classifyPose();
  };

  const setup = (p5) => {
    p5.createCanvas(640, 720);

    let options = {
      inputs: 34,
      outputs: 2,
      task: "classification",
      debug: true,
    };

    capture = p5.createCapture(p5.VIDEO);

    capture.hide();

    brain = ml5.neuralNetwork(options);
    const modelInfo = {
      model: process.env.PUBLIC_URL + "/model.json",
      metadata: process.env.PUBLIC_URL + "/model_meta.json",
      weights: process.env.PUBLIC_URL + "/model.weights.bin",
    };
    brain.load(modelInfo, brainLoaded);
  };

  const draw = (p5) => {};

  return <TrainingCom match={match} />;
};

export default withRouter(TrainingForm);
