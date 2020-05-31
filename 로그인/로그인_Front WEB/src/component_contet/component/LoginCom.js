import React from "react";
import {
  Container,
  Title,
  Login,
  Home,
  Kakao,
  Google,
  Label,
  Naver,
} from "../style/LoginCom_Style.js";

const LoginCom = ({ onClick }) => {
  return (
    <Container>
      <Title>로그인</Title>
      <Login>
        <a href="https://kauth.kakao.com/oauth/authorize?client_id=547c9b9d2e03aadbbe27934850cb0bc9&redirect_uri=http://localhost:4000/auth/kakao/check&response_type=code">
          <Kakao
            src={require("../../Images/Login/Kakao.png")}
            alt=""
            onClick={onClick}
          />
        </a>

        <Google src={require("../../Images/Login/google.png")} alt="" />
        <Naver src={require("../../Images/Login/naver.png")} alt="" />
        <Label />
        <Home src={require("../../Images/Login/H&S.png")} alt="" />
      </Login>
    </Container>
  );
};

export default LoginCom;
