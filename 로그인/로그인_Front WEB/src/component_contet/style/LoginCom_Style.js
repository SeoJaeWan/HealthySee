import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  width: 70%;
  margin-left: 13%;

  .Title {
    font-size: 50pt;
    margin-left: 10%;
    color: #676a72;
    ${media.mobile`
    margin-top: 20%;
    margin-left: 20%;
    font-size: 2rem;

`}
  }
  .platform {
    width: 50%;
    height: 100%;
    flex-direction: column;
    margin-top: 8%;
    margin-bottom: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.imgs`
    width: 100%;
`}
  }
  .Login {
    margin-top: 5%;
    height: 100%;
    margin-left: 5%;
  }
  .LoginForm {
    display: flex;
    width: 95%;
    height: 100%;
    font-size: 1rem;
    border: 5px solid #676a72;
    border-left: solid white;
    max-height: 100%;
    margin-left: 5%;
    &::before {
      content: "";
      position: static;
      margin: -10px;
      margin-top: -20px;
      display: block;
      border-radius: 50%;
      width: 50px;
      height: 58px;
      background: #676a72;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
      transition: 0.2s;
      ${media.imgs`
    width: 40px;
    height: 40px;
`}
    }
  }
  .rightform {
    display: flex;
    align-items: center;
  }
  .rightImg {
    width: auto;
    height: auto;
    margin-right: 10%;
    max-width: 400px;
    max-height: 400px;
    ${media.mobile`
  display:none;

`}
    ${media.imgs`
  display:none;
`}
  }
`;

export const Kakao = styled.div`
  width: 300px;
  color: #2b0b20;
  background-color: #fcf012;
  text-align: center;
  font-size: 3rem;
  ${media.mobile`
  width:200px;
  font-size: 2rem;

`}
`;

export const Google = styled.div`
  width: 300px;
  color: white;
  background-color: #d94d3d;
  text-align: center;
  font-size: 3rem;
  margin-top: 70px;
  ${media.mobile`
  width:200px;
  font-size: 2rem;

`}
`;
export const Naver = styled.div`
  color: white;
  background-color: #13d261;
  text-align: center;
  width: 300px;
  font-size: 3rem;
  margin-top: 70px;
  ${media.mobile`
  width:200px;
  font-size: 2rem;

`}
`;

export const Label = styled.hr`
  width: 0px;
  height: 50vh;
  align-items: center;
  border-left: 3px solid #676a72;
  ${media.mobile`
  display:none;

`}
  ${media.imgs`
  display:none;
`}
`;
