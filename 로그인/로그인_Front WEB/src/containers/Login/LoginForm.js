import React, { useEffect } from "react";

import LoginCom from "../../component_contet/component/LoginCom";
import { useDispatch, useSelector } from "react-redux";
import { login, initializeForm } from "../../modules/account/auth";
import { check } from "../../modules/account/user";
import { withRouter } from "react-router-dom";

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const { auth, authError, platforms, user } = useSelector(
    ({ auth, user }) => ({
      auth: auth.auth,
      authError: auth.authError,
      platforms: auth.platforms,

      user: user.user,
    })
  );

  const responseGoogle = (req) => {
    const info = {
      name: req.profileObj.name,
      platform: "google",
      email: req.profileObj.email,
    };
    dispatch(login(info));
  };

  const responseNaver = (req) => {
    const info = { name: req.name, platform: "naver", email: req.email };
    dispatch(login(info));
  };

  const responseKakao = (req) => {
    const info = {
      name: req.profile.properties.nickname,
      platform: "kakao",
      email: req.profile.kakao_account.email,
    };
    dispatch(login(info));
  };

  useEffect(() => {
    if (auth) dispatch(check(auth));
    else if (authError) {
      history.push("/Signup");
      try {
        sessionStorage.setItem("platforms", JSON.stringify(platforms));
        dispatch(initializeForm());
      } catch (error) {
        console.log("sessionStorage setItem is not working");
      }
    }
  }, [auth, authError, platforms, history, dispatch]);

  useEffect(() => {
    if (user) {
      history.push("/");
      try {
        sessionStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        console.log("LoginForm sessionStorage is not work");
      }
    }
  }, [user, history]);

  return (
    <LoginCom
      responseGoogle={responseGoogle}
      responseKakao={responseKakao}
      responseNaver={responseNaver}
    />
  );
};

export default withRouter(LoginForm);
