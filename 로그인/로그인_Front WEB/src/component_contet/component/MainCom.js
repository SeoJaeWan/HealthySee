import React, { Component } from "react";
import { Container, Lng, Img ,Home,Title,Title2,StartB} from "../style/MainCom_Style.js";

class MainCom extends Component {
  render() {
    return (
      <Container>
        <Title>Health&See</Title>
        <Title2>"나만의 작은 트레이너"</Title2>
        <StartB>시작하기</StartB>
        <Lng>
          <Img src={require("../../Images/Main/react-logo.png")} alt="" />
          <Img src={require("../../Images/Main/Ml5.png")} alt="" />
          <Img src={require("../../Images/Main/nodejs.png")} alt="" />
          <Img src={require("../../Images/Main/p5.png")} alt="" />
        </Lng>
        <Home src={require("../../Images/Login/H&S.png")} alt="" />
      </Container>
    );
  }
}

export default MainCom;
