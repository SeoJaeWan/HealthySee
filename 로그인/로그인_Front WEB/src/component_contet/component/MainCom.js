import React, { Component } from "react";
import { Container, Img, Home } from "../style/MainCom_Style.js";

class MainCom extends Component {
  render() {
    return (
      <Container>
        <div className="Main">
          <div className="Con">
            <div className="leftCon">
              <div className="Title">Health&amp;See</div>
              <div className="Title2">"나만의 작은 트레이너"</div>
              <button className="StartB">시작하기</button>

              <div className="Lng">
                <Img src={require("../../Images/Main/react-logo.png")} alt="" />
                <Img src={require("../../Images/Main/Ml5.png")} alt="" />
                <Img src={require("../../Images/Main/nodejs.png")} alt="" />
                <Img src={require("../../Images/Main/p5.png")} alt="" />
              </div>
            </div>
            <div className="rightCon">
              <Home out="visible" src={require("../../Images/Login/H&S.png")} alt="" />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default MainCom;
