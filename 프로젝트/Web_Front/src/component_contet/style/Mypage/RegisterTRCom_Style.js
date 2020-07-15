import styled from "styled-components";
import { media } from "../../../ReactiveStyle/ReactiveStyle";

export const WriteForm = styled.div`
  .Filetext {
    margin-top: 2%;
    display: flex;
  }
  .Buttonform {
    margin-left: 5%;
    margin-top: 2%;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  .Backbutton {
    margin-left: 4%;
    font-size: 3rem;
    ${media.mobile`
    margin-left: 2%;
    margin-top: 5%;
    margin-bottom: 5%;
  font-size: 1.5rem;
  `}
  }
  .Writebutton {
    margin-left: 4%;
    font-size: 3rem;
    ${media.mobile`
    margin-left: 2%;
    margin-top: 5%;
    margin-bottom: 5%;
  font-size: 1.5rem;
  `}
  }
  .Titlediv {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .TextTitle {
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
  .Title {
    font-size: 1.5rem;
    width: 5rem;
    margin-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
  }
  .FileForm {
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
  .Titleform {
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
  .Titleinput {
    border: none;
    height: 55px;
    width: 100%;
    box-shadow: 0px 4px 10px -8px black;
  }
  .FileButton {
    margin-left: 2%;
    margin-top: 2%;
  }
  .StorageFileForm{
    margin-top:1.5%;
    width: 75%;
  }
  .StorageFile{  
    font-size: 1.5rem;
    margin-left: 2%;
    margin-bottom: 1%;
    display:flex;
    align-items:center;
  }
  .TextForm {
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
  .TextArea {
    margin-left: 2%;
    height: 100%;
    width: 100%;
    border: none;
    resize: none;
    font-size: 20px;
    line-height: 24px;
    overflow: auto;
    height: auto;
    padding: 8px;
    box-shadow: 0px 4px 10px -8px black;
  }
`;
