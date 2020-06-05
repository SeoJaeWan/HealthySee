import React from "react";

import { GoogleLogin } from "react-google-login";
import NaverLogin from "react-naver-login";

import {
  Container,
  Title,
  Login,
  Home,
  Kakao,
  Google,
  Label,
  Naver,
} from "../../style/LoginCom_Style.js";
import KakaoLogin from "react-kakao-login";

const LoginCom = ({ responseGoogle, responseKakao, responseNaver }) => {
  const errer = (err) => {
    console.log(err);
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Login>
        <KakaoLogin
          jsKey={"2f70e141f23b6a78e4b7fdd56b7be83e"}
          onSuccess={responseKakao}
          onFailure={errer}
          getProfile="true"
          render={(props) => <Kakao onClick={props.onClick}>KaKao Login</Kakao>}
        />
        <GoogleLogin
          clientId={"281223087961-0400s5doef0oi7gdg6jdamuuvmi3rkj4"}
          render={(props) => (
            <Google onClick={props.onClick}>Google Login</Google>
          )}
          onSuccess={responseGoogle}
          onFailure={errer}
        />
        <NaverLogin
          clientId={"nJEBHhkCawrEQWG18VFF"}
          callbackUrl="http://localhost:3000/login"
          render={(props) => <Naver onClick={props.onClick}>Naver Login</Naver>}
          onSuccess={responseNaver}
          onFailure={(result) => console.error(result)}
        />
        <Label />
        <Home>
          <img src={require("../../../Images/Login/H&S.png")} alt="" />
        </Home>
      </Login>
    </Container>
  );
};

export default LoginCom;
