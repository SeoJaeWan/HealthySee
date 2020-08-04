import React, { useState } from "react";
import TrainingCom from "../../component_contet/component/training/TrainingCom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import * as ml5 from "ml5";
import AlertModal from "../../component_contet/common/Modal/AlertModal";

const TrainingForm = ({ history }) => {
  let brain;
  let poseNet;

  let [view, setView] = useState(true);
  let [info, setInfo] = useState({
    capture: null,
    pose: null,
    skeleton: null,
    count: 0,
    nextPose: 0,
    poses: null,
  });

  let poses;
  let capture;
  let pose;
  let skeleton;

  const brainLoaded = () => {
    console.log("pose classification ready!");

    poses = brain.neuralNetworkData.meta.outputs[0].uniqueValues;
    poses = poses.concat(poses[0]);

    setInfo((pre) => ({ ...pre, poses }));

    let beforePose;

    classifyPose(0, beforePose, 0);
  };

  const classifyPose = (state, beforePose, samePose) => {
    if (pose) {
      let inputs = [];
      for (let i = 0; i < pose.keypoints.length; i++) {
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        inputs.push(x);
        inputs.push(y);
      }

      beforePose = pose;
      brain.classify(inputs, (error, results) =>
        gotResult(error, results, state, beforePose, samePose)
      );
    } else {
      setTimeout(() => classifyPose(state, beforePose, samePose), 100);
    }
  };

  const gotResult = (error, results, state, beforePose, samePose) => {
    console.log(
      results,
      "내포즈",
      results[0].label,
      "해야하는 포즈",
      poses[state],
      results[0].confidence > 0.75,
      results[0].confidence,
      "sdasadsadadssadsaddsaasdsadsadsadsadsad",
      results[0].label === poses[state],
      results[0],

      state
    );

    if (results[0].confidence > 0.75 && results[0].label === poses[state]) {
      state = state + 1;
      if (state === poses.length) {
        state = 1;
        setInfo((pre) => ({ ...pre, count: pre.count + 1, nextPose: state }));
      } else {
        setInfo((pre) => ({ ...pre, nextPose: state }));
      }
    }

    if (pose.score === beforePose.score) {
      samePose++;
      if (samePose === 100) {
        return;
      }
    } else samePose = 0;

    setInfo((pre) => ({ ...pre, my: results[0].label }));
    // console.log(results[0].confidence > 0.75, results[0].label.toUpperCase());
    classifyPose(state, beforePose, samePose);
  };

  const gotPoses = (poses) => {
    if (poses.length > 0) {
      pose = poses[0].pose;
      skeleton = poses[0].skeleton;
      setInfo((pre) => ({
        ...pre,
        pose,
        skeleton,
      }));
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

    setTimeout(() => {
      setView(false);
      brain = ml5.neuralNetwork(options);
      const modelInfo = {
        model: process.env.PUBLIC_URL + "/3pose_Test3/model.json",
        metadata: process.env.PUBLIC_URL + "/3pose_Test3/model_meta.json",
        weights: process.env.PUBLIC_URL + "/3pose_Test3/model.weights.bin",
      };
      brain.load(modelInfo, brainLoaded);
    }, 1000);

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
      <h1>
        {info.count}
        {info.poses}
      </h1>
      <TrainingCom setup={setup} draw={draw} info={info} />

      <AlertModal
        visible={view}
        title={"준비!"}
        description={"10초 뒤에 시작합니다! 준비!! (뒤로가기 : 화면)"}
        onCancel={goBack}
      />
    </>
  );
};

export default withRouter(TrainingForm);
