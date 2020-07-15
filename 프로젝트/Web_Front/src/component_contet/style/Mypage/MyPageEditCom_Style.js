import styled, { keyframes } from "styled-components";
import { media } from "../../../ReactiveStyle/ReactiveStyle";

export const InfCom = styled.div`
  width: 100%;
  margin-top: 2rem;

  .flex {
    display: flex;
    justify-content: space-between;
    ${media.tablet`
     flex-wrap:wrap;
    justify-content: center;
    `}
  }
  .flexInput {
    height: 3rem;
    flex-grow: 1;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${media.tablet`
     flex-wrap:wrap;
     justify-content: space-between;
    `}
  }
  .leftDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-left: 3%;
    height: 80%;
    width: 25%;
    min-width: 15rem;
  }
  .Title {
    font-size: 2rem;
  }

  .ImgDiv {
    border: 3px solid #676a72;
    height: 32vw;
    width: 18vw;
    min-height: 22.3rem;
    min-width: 14rem;
    max-width: 15rem;
    max-height: 22.3rem;
  }
  .PublicDiv {
    font-size: 2rem;
  }
  .rightDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 3%;
    height: 80%;
    width: 65%;
    min-width: 20rem;
    ${media.tablet`
     width:100%;
    `}
  }

  .Contents {
    display: flex;
    border: 3px solid #676a72;
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 3rem;
    align-items: center;
  }
  .rowrserver {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2rem;
  }
  .edit {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2rem;
    margin: 0 2rem 2rem 0;
  }
  .FlexGrow {
    flex-grow: 1;
    min-width: 10rem;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
  }
  .TowContetns {
    flex-wrap: wrap;
    display: flex;
    font-size: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    min-width: 20rem;
    width: 90%;
    ${media.tablet`
     font-size:1.5rem;
    `}
  }
  .name {
    border: 3px solid #676a72;
    font-size: 2rem;
    width: 90%;
  }
  .ButtonDiv {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    width: 90%;
  }
  .Buttons {
    font-size: 2rem;
    ${media.tablet`
     font-size:1.5rem;
    `}
  }
  .divwidth {
    width: 4rem;
    text-align: center;
  }

  .InputIMG {
    display: inline-block;
    padding: 0.5em 0.75em;
    color: #999;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
  }
  .hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .IntroForm {
    margin-top: 3rem;
    margin-left: 5%;
  }
  .BoardForm {
    display: flex;
    flex-direction: column;
    width: 95%;
    font-size: 1rem;
    border: 5px solid #676a72;
    border-left: solid white;
    max-height: 100%;
    ${media.mobile`
    width: 100%;
    `}
    &::before {
      content: "";
      position: static;
      margin: -10px;
      margin-top: -30px;
      display: block;
      border-radius: 50%;
      width: 50px;
      height: 58px;
      background: #676a72;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
      transition: 0.2s;
    }
  }
  .IntroInfo {
    margin-left: 5%;
    color: #676a72;
    font: inherit;
    height: 20rem;
    font-size: 2rem;
    width: 93%;
    border: none;
    resize: none;
    padding: 8px;
    box-shadow: 0px 4px 10px -8px black;
  }

  .Introtitle {
    margin: 2rem 0 1rem 3rem;
    font-size: 2rem;
  }
`;

export const CheckBoxLabel = styled.label`
  position: relative;
  top: 0;
  right: 1%;
  width: 4rem;
  height: 26px;
  border-radius: 15px;
  background-color: ${(props) => (props.check ? "skyblue" : "pink")};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    margin-left: ${(props) => (props.check ? "3px" : "40px")};
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 0rem;
  height: 0px;
`;
