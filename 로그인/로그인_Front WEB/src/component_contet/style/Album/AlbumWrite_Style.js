import styled from "styled-components";
import { media } from "../../../ReactiveStyle/ReactiveStyle";

export const AlbumForm = styled.div`
  width: 100%;
  margin-top: 2rem;
  font-size: 2rem;
  .flex {
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-around;
  }
  .TitleBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .backbutton {
    font-size: 2rem;
    margin-left: 4rem;
  }
  .Title {
    font-size: 2rem;
    margin-left: 1rem;
  }
  .addbutton {
    margin-right: 3rem;
    font-size: 2rem;
  }
  .Titleform {
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
  .Titleinput {
    border: none;
    height: 55px;
    margin-left: 1%;
    width: 90%;
    box-shadow: 0px 4px 10px -8px black;
  }
  .Titlediv {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Imgdiv {
    border: 5px solid #676a72;
    height: 30rem;
    width: 45%;
  }
  .Contentdiv {
    width: 45%;
    font: inherit;
    margin-left: 2%;
    border: none;
    resize: none;
    font-size: 20px;
    line-height: 24px;
    overflow: auto;
    height: auto;
    padding: 8px;
    box-shadow: 0px 4px 10px -3px black;
  }
  .InputIMG {
    display: inline-block;
    text-align:center;
    
    width:90%;
    height:93%;
    padding: 0.5em 0.75em;
    color: #999;
    font-size: inherit;
    line-height: 25rem;
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
`;
