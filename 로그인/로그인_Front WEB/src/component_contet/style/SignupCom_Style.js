import styled from "styled-components"
import { media } from "../../ReactiveStyle/ReactiveStyle"

export const SignupForm = styled.div`
  width: 100%;
  margin-top: 5%;
  margin-left: 5%;
  .title {
    margin-left: 10%;
    font-size: 4rem;
    color: #676a72;
    ${media.mobile`
    margin-left: 20%;
    font-size: 3rem;

`}
  }
  .signForm {
    display: flex;
    height: 60vh;
    width: 90%;
    font-size: 50pt;
    border: 5px solid #676a72;
    border-left: solid white;
    margin-left: 5%;
    &::before {
      content: "";
      position: static;
      margin: -26px -10px -10px -10px;
      display: block;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background: #676a72;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
      transition: 0.2s;
    }
  }

  .leftdiv {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-top:2rem;
    ${media.desktop`
    width: 100%;

`}
    ${media.mobile`
    width: 100%;

`}
  }
  .contextform {
    display: flex;

    width: 100%;
    height: 80%;
  }

  input {
    box-shadow: 0px 3px 0px 0px #676a72;
    border: 0px;
  }
  .textInput {
    width: 40%;
    margin-left: 20%;
  }

  .completeButton {
    background-color: #676a72;
    font-size: 3rem;
    color: white;
    font-family: "font";

    display: block;
    margin: 0 auto;
  }
  .flex {
    display: flex;
    text-align: center;
    padding-left: 10%;
    font-size: 2rem;
    margin: 2rem 0;
    word-spacing: 0.3vw;
    ${media.mobile`
    font-size: 1.5rem;

`}
    .genderToggle {
      display: flex;
      text-align: center;
      padding-left: 20%;
      font-size: 2rem;
      word-spacing: 0.3vw;
      ${media.mobile`
    font-size: 1.5rem;

`}
    }
  }
`

export const CheckBoxLabel = styled.label`
  width: 62px;
  height: 26px;
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 15px;
  background: skyblue;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

export const CheckBox1 = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 0px;
  height: 0px;
  &:checked + ${CheckBoxLabel} {
    background: pink;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 40px;
      transition: 0.2s;
    }
  }
`

export const CheckBox2 = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;

  width: 0px;
  height: 0px;
  &:checked + ${CheckBoxLabel} {
    background: pink;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 40px;
      transition: 0.2s;
    }
  }
`
