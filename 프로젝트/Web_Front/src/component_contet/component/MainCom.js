import React, { Component } from "react";
import { MainForm, Img, Home } from "../style/MainCom_style.js";

class MainCom extends Component {
  render() {
    return (
      <MainForm>
        <div className="leftCon">
          <h1 className="title">Health&amp;See</h1>
          <h2 className="title2">"나만의 작은 트레이너"</h2>
          <button type="button" className="startButton">
            시작하기
          </button>
          <ul className="Lng">
            <li>
              <Img src={require("../../Images/Main/react-logo.png")} alt="" />
            </li>
            <li>
              <Img src={require("../../Images/Main/Ml5.png")} alt="" />
            </li>
            <li>
              <Img src={require("../../Images/Main/nodejs.png")} alt="" />
            </li>
            <li>
              <Img src={require("../../Images/Main/p5.png")} alt="" />
            </li>
          </ul>
        </div>
        <Home
          out="visible"
          src={require("../../Images/Login/H&S.png")}
          alt=""
        />
      </MainForm>
    );
  }
}

export default MainCom;
