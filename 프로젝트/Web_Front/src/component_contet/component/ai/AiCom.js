import React from "react";
import * as ml5 from "ml5";
import styled, { createGlobalStyle } from "styled-components";
import Sketch from "react-p5";
import { useState } from "react";
import { useEffect } from "react";

const AiCom = () => {
  let poseNet = [];
  let pose = ["", "", ""];
  let skeleton = ["", "", ""];

  let playing = false;

  let [motions, setMotions] = useState({});
  let video = [];

  let toggle = true;

  let options = {
    inputs: 34,
    outputs: 2,
    task: "classification",
    debug: true,
  };

  let brain = ml5.neuralNetwork(options);

  let state = ["waiting", "waiting", "waiting"];
  let targetLabel;

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

  const setup = (p5, index) => {
    let canvas = p5.createCanvas(1280, 720);
    canvas.style("display", "block");
    console.log(index);
    let div = p5.select(`.canvas_${index}`);

    let input = p5.createFileInput((file) => handleFile(file, index, p5));

    div.child(canvas);
    div.child(input);
  };
  const finished = () => {
    console.log("model trained");
    brain.save();
  };

  const draw = (p5, index) => {
    // console.log(count);
    p5.push(); // 새로운 도면 시작
    p5.translate(0, 0); // 실제 그려지는 동영상의 위치 이동

    if (video[index]) {
      p5.clear();
      p5.image(video[index], 0, 0, video[index].width, video[index].height);
      const completion = video[index].time() / video[index].duration();
      p5.ellipse(completion * 1280, 710, 20, 20);
    }
    if (pose[index]) {
      for (let i = 0; i < skeleton[index].length; i++) {
        let a = skeleton[index][i][0];
        let b = skeleton[index][i][1];

        p5.strokeWeight(2);
        p5.stroke(0);

        p5.line(a.position.x, a.position.y, b.position.x, b.position.y);
      }

      for (let i = 0; i < pose[index].keypoints.length; i++) {
        let x = pose[index].keypoints[i].position.x;
        let y = pose[index].keypoints[i].position.y;

        p5.fill(0);
        p5.stroke(255);
        p5.ellipse(x, y, 16, 16);
      }
    }

    p5.pop();
  };

  const handleFile = (file, index, p5) => {
    if (file.type === "video") {
      video.push(p5.createVideo(file.data));

      video[index].hide();
      video[index].speed(1);
      video[index].volume(0);
      poseNet.push(ml5.poseNet(video[index], option));

      poseNet[index].on("pose", (poses) => gotPoses(poses, index));
    } else {
      video[index] = null;
    }
  };

  const gotPoses = (poses, index) => {
    if (poses.length > 0) {
      pose[index] = poses[0].pose;
      skeleton[index] = poses[0].skeleton;
      if (state[index] === "collecting") {
        let inputs = [];
        for (let i = 0; i < pose[index].keypoints.length; i++) {
          let x = pose[index].keypoints[i].position.x;
          let y = pose[index].keypoints[i].position.y;
          inputs.push(x);
          inputs.push(y);
        }
        console.log(inputs);
        let target = [targetLabel];
        brain.addData(inputs, target);
      }
    }
  };

  const mousePressed = (e, index) => {
    if (!playing && video[index]) {
      video[index].showControls();
      video[index].play();
      video[index].time((e.pageX / 1280) * video[index].duration());
      playing = true;
    } else if (video[index]) {
      video[index].pause();
      playing = false;
    }
  };

  const ClickButton = (e, index) => {
    const poses = e.target.value;
    console.log(e.target.value);

    if (poses === "Save") {
      brain.saveData();
    } else if (poses === "Learn") {
      brain.normalizeData();
      brain.train({ epochs: 50 }, finished);
    } else {
      console.log("?asdasd");
      targetLabel = poses;
      if (toggle) {
        state[index] = "collecting";
      } else {
        state[index] = "waiting";
      }
      console.log(state[index]);
      toggle = !toggle;
    }
  };

  const MainField = styled.div`
    margin: 0 auto;
    .controlButton {
      padding: 5px 15px;
      margin-left: 10px;
      color: white;
      background-color: #70a1ff;
      border: none;
      border-radius: 5px;
    }
    .motions {
      padding: 10px;
    }
    .canvasBox {
      position: relative;
      margin-top: 10px;
    }
    .canvasBack {
      position: absolute;
      width: 1280px;
      height: 700px;
      margin-top: 10px;
      top: 75px;
      /* background-color:yellow; */
      .controls {
        width: 1280px;
        height: 700px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        font-size: 3rem;
        transition: all 1s;
      }
    }
    .canvasBack:hover {
      .controls {
        opacity: 1;
      }
      .timeScroll {
        display: block;
      }
    }
    .timeScroll {
      position: absolute;
      width: 1280px;
      height: 25px;
      background-color: white;
      margin-top: 10px;
      top: 775px;
      display: none;
      transition: all 1s;
    }
  `;

  const Button = styled.button`
    border: 1px;
    border-radius: 5px;
    background-color: black;
    width: 200px;
    height: 25px;
    color: white;
    margin-left: 5px;
    :hover {
      background-color: gray;
    }
  `;

  const addItem = (e, index) => {
    e.preventDefault();

    var motion = e.target[`motion_${index}`];
    console.log(motion, index);
    let motionArr = motions[index].map((motion) => {
      return motion;
    });
    motionArr.push(motion.value);

    setMotions((pre) => {
      return { ...pre, [index]: motionArr };
    });
  };

  // pose, skeleton 도 useState에 넣으니 할때마다 새로그료ㅕ서 에러뜸 ㅋㅋ

  const onChangeSpeed = (index, speed) => {
    video[index].speed(speed);
  };

  return (
    <MainField>
      <button className="controlButton" value={"Learn"} onClick={ClickButton}>
        학습
      </button>
      <button className="controlButton" value={"Save"} onClick={ClickButton}>
        저장
      </button>

      <button
        className="controlButton"
        onClick={() => {
          let amount = Object.keys(motions).length;
          setMotions((pre) => ({
            ...pre,
            [amount]: [],
          }));
        }}
      >
        추가
      </button>
      {motions &&
        Object.keys(motions).map((indexValue) => {
          return (
            <div className="canvasBox">
              <form onSubmit={(e) => addItem(e, indexValue)}>
                <input
                  type="text"
                  placeholder="동작명을 입력"
                  name={`motion_${indexValue}`}
                />
                <button onSubmit={(e) => addItem(e, indexValue)}>입력</button>
              </form>

              <button onClick={() => onChangeSpeed(indexValue, 0.2)}>
                0.2
              </button>

              <button onClick={() => onChangeSpeed(indexValue, 1)}>1</button>
              <div className="motions">
                <span>모션</span>
                {motions[indexValue] &&
                  motions[indexValue].map((motion, index) => {
                    return (
                      <Button
                        value={motion}
                        key={index}
                        onClick={(e) => ClickButton(e, indexValue)}
                      >
                        {motion}
                      </Button>
                    );
                  })}
              </div>

              <div className={`canvas_${indexValue}`}>
                <Sketch
                  setup={(p5) => setup(p5, indexValue)}
                  draw={(p5) => draw(p5, indexValue)}
                />
              </div>

              <div
                className={`canvasBack`}
                onClick={(e) => mousePressed(e, indexValue)}
              >
                <div className="controls">&gt;</div>
              </div>
              <div className={"timeScroll"}></div>
            </div>
          );
        })}
    </MainField>
  );
};

export default AiCom;
