import React from "react";

import LoginCom from "../../component_contet/component/LoginCom";

const LoginForm = () => {
  const onClick = () => {
    localStorage.setItem("login", JSON.stringify(true));
    // 로그인 시 리다이렉트 되기 때문에 로그인 상태를 유지하는 게 쿠키 말곤 방법이 없다. 그렇게 되면 로그인 상태가 아니여도 무조건 서버를 거쳐야해서 로컬스토리지에 분기를 한번 주었다.
  };

  return <LoginCom onClick={onClick} />;
};

export default LoginForm;
