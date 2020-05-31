import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 85%;
  left: 15%;
`;

export const Kakao = styled.img`
  position: absolute;
  left: 8%;
  top: 13%;
  width: auto;
  height: auto;
  max-width: 400px;
  max-height: 100px;
  padding-left: 5%;
  ${media.mobile`
  width: 80%;
  top:15%;
`}
`;
export const Google = styled.img`
  position: absolute;
  left: 8%;
  top: 43%;
  width: auto;
  height: auto;
  max-width: 400px;
  max-height: 100px;
  padding-left: 5%;
  ${media.mobile`
  width: 80%;
  top:45%;
`}
`;
export const Naver = styled.img`
  position: absolute;
  left: 8%;
  top: 73%;
  width: auto;
  height: auto;
  max-width: 400px;
  max-height: 100px;
  padding-left: 5%;
  ${media.mobile`
  width: 80%;
  top:70%;
`}
`;

export const Label = styled.hr`
  position: relative;
  width: 0px;
  height: 50vh;
  left: 3%;
  border-left: 3px solid #676a72;
  ${media.mobile`
  display:none;
`}
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

export const Home = styled.img`
  position: absolute;
  height: 53vh;
  top: 5%;
  left: 60%;
  ${media.mobile`
  display:none;
`}
`;
