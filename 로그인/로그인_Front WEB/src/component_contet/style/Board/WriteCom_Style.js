import styled from "styled-components"
import { media } from "../../../ReactiveStyle/ReactiveStyle"

export const WriteForm = styled.div`
  .buttonform {
    margin-left: 5%;
    margin-top: 2%;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  .backbutton {
    margin-left: 4%;
    font-size: 3rem;
    ${media.mobile`
    margin-left: 2%;
    margin-top: 5%;
    margin-bottom: 5%;
  font-size: 1.5rem;
  `}
  }
  .writebutton {
    margin-left: 4%;
    font-size: 3rem;
    ${media.mobile`
    margin-left: 2%;
    margin-top: 5%;
    margin-bottom: 5%;
  font-size: 1.5rem;
  `}
  }
  .titleform {
    display: flex;
    width: 90%;
    font-size: 1rem;
    border: 5px solid #676a72;
    border-left: solid white;
    margin-top: 1%;
    margin-left: 5%;
    ${media.mobile`
    width: 100%;
    margin-left: 2%;
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
      ${media.mobile`    
      margin-top: -20px;
      width: 30px;
      height: 40px;
  `}
    }
  }
  .titlediv {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 1.5rem;
    width: 5rem;
    margin-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
  }
  .titleinput {
    border: none;
    height: 55px;
    width: 100%;
    color: #676a72;
    font: inherit;
    font-size: 2rem;
    box-shadow: 0px 4px 10px -8px black;
  }
  .textTitle {
    margin-top: 2%;
    padding-left: 9%;
    font-size: 3rem;
    width: 90%;
    display: flex;
    justify-content: space-between;
    ${media.mobile`
    margin-top: 5%;
    margin-bottom: 5%;
  font-size: 1.5rem;
  `}
  }
  .textForm {
    display: flex;
    width: 90%;
    height: 400px;
    font-size: 1rem;
    border: 5px solid #676a72;
    border-left: solid white;
    margin-top: 1%;
    margin-left: 5%;
    ${media.mobile`
    width: 100%;
    margin-left: 2%;
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
      ${media.mobile`    
      margin-top: -20px;
      z-index:9999;
      width: 30px;
      height: 40px;
  `}
    }
  }
  .textArea {
    margin-left: 2%;
    color: #676a72;
    font: inherit;
    font-size: 3rem;
    width: 100%;
    border: none;
    resize: none;
    overflow: auto;
    height: auto;
    padding: 8px;
    box-shadow: 0px 4px 10px -8px black;
  }
  .fileForm {
    width: 90%;
    font-size: 1rem;
    border: 5px solid #676a72;
    border-left: solid white;
    margin-top: 5%;
    margin-left: 5%;
    ${media.mobile`
    width: 100%;
    margin-left: 2%;
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
      ${media.mobile`    
      margin-top: -20px;
      width: 30px;
      height: 40px;
  `}
    }
  }

  .fileButton {
    margin-left: 2%;
    margin-top: 2%;
  }
  .filetext {
    margin-top: 2%;
    display: flex;
  }
  .storageFileForm {
    margin-top: 1.5%;
    width: 75%;
  }
  .storageFile {
    font-size: 1.5rem;
    padding-top: 0.8%;
    margin-left: 2%;
    margin-bottom: 1%;
    display: flex;
    align-items: center;
  }
`
