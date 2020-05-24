import React from "react";
import styled from "styled-components";

const LoginCom = () => {
  return (
    <Container>
      로그인페이지라고 합니다..
      <br />
      <br />
      <button>
        <a href="https://kauth.kakao.com/oauth/authorize?client_id=547c9b9d2e03aadbbe27934850cb0bc9&redirect_uri=http://localhost:4000/auth/kakao/check&response_type=code">
          카카오톡
        </a>
      </button>
      <button>구글</button>
    </Container>
  );
};

export default LoginCom;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;
