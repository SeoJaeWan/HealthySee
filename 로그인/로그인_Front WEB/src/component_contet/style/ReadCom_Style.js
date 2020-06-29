import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  width: 70%;
  margin-left: 13%;
  ${media.board`
  margin-left: 5%;
`}
  ${media.desktop`
  width:90%;
  `}
  ${media.mobile`
  margin-left: 2%;
  `}
  .titlebutton {
    padding-top: 1%;
    margin-right: 2%;
  }
  .flex {
    display: flex;
  }
  .TitleForm {
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
  .TopButton {
    width: 98%;
    display: flex;
    justify-content: space-between;
    margin-left: 7%;
    margin-top: 3%;
    ${media.mobile`
margin-top: 10%;  `}
  }
  button.exit {
    background-color: white;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    border: 0px white;
    color: #676a72;
    font-size: 3rem;

    ${media.mobile`
  font-size: 1.5rem;
  `}
  }
  .ContentForm {
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

  .Title {
    padding: 14px 14px 14px 14px;
  }
  pre {
    margin-left: 4%;
    ${media.mobile`
    margin-left: 10%;
  `}
  }
  .FileForm {
    overflow: hidden;
    border-top: 5px solid #676a72;
    width: 100%;
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
`;
