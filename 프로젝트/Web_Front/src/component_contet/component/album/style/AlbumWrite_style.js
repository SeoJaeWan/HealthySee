import styled from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const AlbumWriteForm = styled.div`
  width: 100%;
  margin-top: 2rem;
  font-size: 2rem;
  .titleBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .backButton {
    font-size: 2rem;
    margin-left: 4rem;
  }

  .addButton {
    margin-right: 3rem;
    font-size: 2rem;
  }

  .titleForm {
    display: flex;
    width: 95%;
    font-size: 1rem;
    border: 5px solid #676a72;
    border-left: solid white;
    margin-top: 1%;
    margin-left: 2%;
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
  dl {
    display: flex;
    width: 80%;
  }
  dt {
    margin: 2rem 0 0 0;
    width: 13rem;
    padding-left: 5%;
  }
  dd {
    width: 80%;
    margin: 1rem 0;
    padding-left: 5%;
  }
  .filenameform {
    width: 100%; 
    margin: 1rem 0;
  }
  .tmgdiv {
    border: 5px solid #676a72;
    height: 30rem;
    width: 45%;
  }
  .fileForm {
    position: relative;
    margin: 2rem auto;
  }
  .flex {
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-around;
  }

  .inputImg {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .fileButton {
    position: absolute;
    right: 0;
  }
  .fileInput {
    font-family: none;
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
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

  .context {
    display: flex;
    justify-content: space-around;
  }

  .imageView {
    display: flex;
    align-items: center;
    height: 600px;
    width: 50%;
  }

  textarea {
    margin: 1.8rem 0 0 2%;
    width: 40%;
    max-height: 500px;
    height: auto;
    font: inherit;
    border: none;
    resize: none;
    font-size: 20px;
    overflow: auto;
    padding: 8px;
    box-shadow: 0px 4px 10px -3px black;
  }
`
