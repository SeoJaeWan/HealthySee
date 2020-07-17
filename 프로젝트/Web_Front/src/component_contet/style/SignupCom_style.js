import styled from "styled-components"
import { media } from "../../lib/ReactiveStyle/ReactiveStyle"

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
    display: flex;
    flex-direction: column;

    width: 50%;
    padding-top: 2rem;
    ${media.desktop`
    width: 100%;

`}
    ${media.mobile`
    width: 100%;
    padding-top:1rem;
    padding-left:0;
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
    font-size: 2rem;

    margin: 2rem 0;
    word-spacing: 0.3vw;
    ${media.mobile`
    font-size:1.5rem;
`}
  }
    .genderToggle {
      display: flex;
      justify-content:center;

      text-align: center;
      padding-left: 20%;
      width:30%;
      min-width:10rem;
      font-size: 2rem;
      word-spacing: 0.3vw;
      ${media.mobile`
    font-size: 1.5rem;
      
    padding-left: 15%;
`}
    }
  
  .publicToggle {
      display: flex;
      justify-content:center;

      text-align: center;
      padding-left: 20%;
      
      min-width:10rem;
      width:30%;
      font-size: 1.5rem;
      word-spacing: 0.3vw;
      ${media.mobile`
    font-size: 1.5rem; 
    padding-left: 15%;

`}
    }
  
  p {
    text-align: center;
    color: red;
    font-size: 1rem;
    height: 2rem;
    margin: 0;
  }

  label {
    display: inline;
    font-size: 2rem;
    ${media.mobile`
    font-size:1.5rem;
`}
  }

  ul{
    margin:0;
  }

  li {
    list-style-type: none;
  }
`
