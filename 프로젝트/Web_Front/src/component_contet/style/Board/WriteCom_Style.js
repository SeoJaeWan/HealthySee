import styled from "styled-components"
import { media } from "../../../ReactiveStyle/ReactiveStyle"
export const WriteForm = styled.div`
  .buttonForm {
    margin-left: 5%;
    margin-top: 2%;

    width: 90%;

    display: flex;
    justify-content: space-between;
  }
  .backButton {
    margin-left: 4%;

    font-size: 3rem;

    ${media.mobile`

    margin-left: 2%;
    margin-top: 5%;
    margin-bottom: 5%;

    font-size: 1.5rem;
  `}
  }
  .writeButton {
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
  .title {
    font-size: 1.5rem;
    width: 5rem;

    margin: 0;
    padding: 1rem;
  }

  .titleInputForm {
    width: 92%;

    margin: 0;
    padding-right: 10px;
  }
  .titleInput {
    border: none;

    margin-top: 10px;

    width: 100%;
    height: 70%;
    color: #676a72;
    font: inherit;
    font-size: 1.5rem;
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
      z-index:3;
      width: 30px;
      height: 40px;
  `}
    }
  }
  .textArea {
    margin-left: 2%;
    color: #676a72;
    font: inherit;
    font-size: 1.5rem;
    width: 100%;
    border: none;
    resize: none;
    overflow: auto;
    height: auto;
    padding: 8px;
    box-shadow: 0px 4px 10px -8px black;
  }
  h1 {
    font-weight: normal;
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


  .hidden {
    position: absolute;
    display:visible;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .inputImg{
    margin-left: 2rem;
    font-size:2rem;
    
    border-radius : 10px;
    border: 2px solid #676a72;
    cursor: pointer;
  }
  .filetext {
    margin-top: 2%;
    display: flex;
  }
  .filetitle {
    font-size: 1.5rem;
    width: 5rem;

    margin: 0;
    padding: 1rem;

    ${media.mobile`    
      font-size: 1.2rem;
  `}
  }
  .storageFileForm {
    margin-top: 1.5%;
    width: 75%;
  }
  .storageFile {
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:1.5rem;

    
    margin-left: 2%;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
  }
`
