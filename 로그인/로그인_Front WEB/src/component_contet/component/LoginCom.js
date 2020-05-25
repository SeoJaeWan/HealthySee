import React from "react";
import {
  Container,
  Title,
  Login,
  Home,
  Kakao,
  Google,
  Label
} from "../style/LoginCom_Style.js";

const LoginCom = () => {
  return (
    <Container>
      <Title>로그인</Title>
      <Login>
        <Kakao>
          <a href="https://kauth.kakao.com/oauth/authorize?client_id=547c9b9d2e03aadbbe27934850cb0bc9&redirect_uri=http://localhost:4000/auth/kakao/check&response_type=code">
            <img src={require("../../Images/Login/Kakao.png")} alt="" />
          </a>
        </Kakao>
        <Google>
          <img src={require("../../Images/Login/google.png")} alt="" />
        </Google>
        
        <Label/>
        <Home>
          <img src={require("../../Images/Login/H&S.png")} alt="" />
        </Home>
      </Login>
    </Container>
  );
};

export default LoginCom;
