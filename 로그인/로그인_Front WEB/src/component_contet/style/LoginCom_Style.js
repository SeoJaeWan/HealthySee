import styled from "styled-components";
import KakaoLogin from "react-kakao-login";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 90%;
  left: 15%;
`;

export const Kakao = styled(KakaoLogin)`
  position: relative;
  width: 20%;
  height: 15%;
  top: 200px;
  left: 15%;
`;
export const Google = styled.div`
  position: relative;
  width: 20%;
  height: 15%;
  top: 40%;
  left: 15%;
`;
export const Label = styled.hr`
  position: relative;
  width: 0px;
  height: 50vh;
  left: 3%;
  top: -30%;
  border-left: 3px solid #676a72;
`;

export const Title = styled.div`
  position: absolute;
  height: 10vh;
  width: 30vh;
  left: 3%;
  top: 10%;
  font-size: 50pt;
  color: #676a72;
`;
export const Login = styled.div`
  position: absolute;
  height: 60vh;
  width: 77%;
  top: 18%;
  font-size: 50pt;
  border: 5px solid #676a72;
  border-left: solid white;
  &::before {
    content: "";
    position: static;
    margin: -1%;
    margin-top: -2.3%;
    display: block;
    border-radius: 50%;
    width: 50px;
    height: 58px;
    background: #676a72;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const Home = styled.label`
  position: absolute;
  height: 53vh;
  top: 5%;
  left: 60%;
`;
