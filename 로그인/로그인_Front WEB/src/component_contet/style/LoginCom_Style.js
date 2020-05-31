import styled from "styled-components";
import KakaoLogin from "react-kakao-login";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 90%;
  left: 15%;
`;

export const Kakao = styled.div`
  position: relative;
  width: 24%;
  color:#2B0B20;
  background-color:#FCF012;
  text-align:center;
  height: 10%;
  top: 20%; 
  font-size: 3rem;
  left: 13%;
`;

export const Google = styled.div`
  position: relative;
  width: 24%;
  color:white;
  background-color:#D94D3D;
  text-align:center;
  height: 10%;
  font-size: 3rem;
  top: 30%;
  left: 13%;
`;
export const Naver = styled.div`
  position: relative;
  color:white;
  background-color:#13D261;
  text-align:center;
  width: 24%;
  height: 10%;
  font-size: 3rem;
  top: 40%;
  left: 13.5%;
`;

export const Label = styled.hr`
  position: absolute;
  width: 0px;
  height: 50vh;
  top:3%;
  left: 50%;
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
