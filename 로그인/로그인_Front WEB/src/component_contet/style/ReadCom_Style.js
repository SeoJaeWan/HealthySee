import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  height: 100%;
  width: 70%;
  margin-left: 260px;

  .TitleForm {
    display: flex;
    width: 100%;
    font-size: 3rem;
    margin-top: 20px;
    margin-left: 30px;
    border: 5px solid #676a72;
    border-left: solid white;
    &::before {
      content: "";
      position: static;
      margin: -1%;
      margin-top: -2.3%;
      display: block;
      border-radius: 50%;
      width: 50px;
      height: 58px;
      background: #676a72;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
      transition: 0.2s;
    }
  }
  .TopButton {
    width:100%;
    display: flex;
    justify-content: space-between;
    margin-left:65px;
    margin-top: 30px;
  }
  button.exit {
    background-color: white;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    border: 0px white;
    color: #676a72;
    font-size: 3rem;
  }
  .ContentForm {
    width: 100%;
    font-size: 3rem;
    margin-top: 50px;
    margin-left: 30px;
    border: 5px solid #676a72;
    border-left: solid white;
    &::before {
      content: "";
      position: static;
      margin: -1%;
      margin-top: -2.3%;
      display: block;
      border-radius: 50%;
      width: 50px;
      height: 58px;
      background: #676a72;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
      transition: 0.2s;
    }
  }

  .Title {
    padding: 14px 14px 14px 14px;
  }
  pre {
    margin-left: 34px;
  }
  .FileForm {
    overflow: hidden;
    border-top: 5px solid #676a72;
    width: 100%;
  }
  .FileText {
    margin-left: 34px;
    padding-top: 14px;
    padding-bottom:14px;
  }
`;
