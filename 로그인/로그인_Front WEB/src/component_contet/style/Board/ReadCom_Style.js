import styled from "styled-components"
import { media } from "../../../ReactiveStyle/ReactiveStyle"

export const ReadComForm = styled.div`
  .topButton {
    width: 98%;
    display: flex;
    justify-content: space-between;
    margin-left: 7%;
    margin-top: 3%;
    ${media.mobile`
margin-top: 10%;  `}
  }
  .exitButton {
    background-color: white;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    border: 0px white;
    color: #676a72;
    font-size: 3rem;

    ${media.mobile`
  font-size: 1.5rem;
  `}
  }
  .titleForm {
    display: flex;
    width: 100%;
    font-size: 3rem;
    margin-top: 20px;
    margin-left: 2%;
    ${media.mobile`
  font-size: 1.5rem;
  `}
    border: 5px solid #676a72;
    border-left: solid white;
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
      ${media.mobile`    
      margin-top: -20px;
      width: 30px;
      height: 40px;
  `}
    }
  }
  .title {
    min-width: 8rem;
    padding: 14px 3px 14px 14px;
    ${media.mobile`
    min-width: 4rem;
  `}
  }
  .titleContent {
    padding: 14px 3px 14px 2px;
    width: 63vw;
  }
  .titlebutton {
    padding-top: 1%;
    margin-right: 2%;
  }

  .contentForm {
    width: 100%;
    font-size: 3rem;
    margin-top: 50px;
    margin-left: 2%;
    ${media.mobile`
  font-size: 1rem;
  `}
    border: 5px solid #676a72;
    border-left: solid white;
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
      ${media.mobile`    
      margin-top: -20px;
      width: 30px;
      height: 40px;
  `}
    }
  }
  .flex {
    display: flex;
  }
  .fileForm {
    overflow: hidden;
    border-top: 5px solid #676a72;
    width: 100%;
  }
  pre {
    overflow: auto;
    white-space: pre-wrap;
    margin-left: 4%;
    ${media.mobile`
    margin-left: 10%;
  `}
  }

  .FileText {
    margin-left: 34px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
  .FileButton {
    margin-left: 2%;
    padding-top: 14px;
    padding-bottom: 14px;
  }
  .File {
    cursor: pointer;
  }
`
