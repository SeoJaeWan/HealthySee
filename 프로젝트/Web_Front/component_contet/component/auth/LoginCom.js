import React from "react";

import { GoogleLogin } from "react-google-login";
import NaverLogin from "react-naver-login-not-babel";

import { Container, Kakao, Google, Naver } from "../../style/LoginCom_style.js";
import KakaoLogin from "react-kakao-login";
import ReactHelmet from "../../../containers/common/ReactHelmet.js";

const LoginCom = ({ responseGoogle, responseKakao, responseNaver }) => {
  const errer = (err) => {
    console.log(err);
  };

  return (
    <>
      <ReactHelmet title="Login" />
      <Container>
        <h1 className="title">로그인</h1>
        <div className="loginForm">
          <div className="platform">
            <KakaoLogin
              jsKey={process.env.REACT_APP_KAKAO}
              onSuccess={responseKakao}
              onFailure={errer}
              getProfile="true"
              render={(props) => (
                <Kakao
                  src={require("../../../Images/Login/KakaoLogin.png")}
                  alt=""
                  onClick={props.onClick}
                />
              )}
            />
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE}
              render={(props) => (
                <Google
                  src={require("../../../Images/Login/GoogleLogin.png")}
                  onClick={props.onClick}
                />
              )}
              onSuccess={responseGoogle}
              onFailure={errer}
            />
            <NaverLogin
              clientId={process.env.REACT_APP_NAVER}
              callbackUrl="http://localhost:3000/login"
              render={(props) => (
                <Naver
                  src={require("../../../Images/Login/NaverLogin.png")}
                  alt=""
                  onClick={props.onClick}
                />
              )}
              onSuccess={responseNaver}
              onFailure={(result) => console.error(result)}
            />
          </div>
          <div className="rightform">
            <img
              className="rightImg"
              src={require("../../../Images/Login/H&S.png")}
              alt=""
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginCom;
