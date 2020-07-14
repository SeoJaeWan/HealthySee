import styled from "styled-components";
import { media } from "../../../ReactiveStyle/ReactiveStyle";

export const EvaluationComForm = styled.div`
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
  button {
    font-size: 3rem;
    ${media.mobile`  
    font-size:1.5rem;
  `}
  }
  .Writer {
    width: 50%;
    padding: 2% 2% 2% 3%;
    display: flex;
    align-items: center;
    justify-content: left;
  }

  hr {
    width: 5px;
    height: 100%;
    background-color: #676a72;
    border-color: #676a72;
  }
  .Buttondiv {
    border: 5px solid #676a72;
    text-align: center;
    margin: 0% 2% 1% 1%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .ContentForm {
    width: 100%;
    font-size: 3rem;
    ${media.mobile` 
    font-size:1.5rem;
  `}
    margin-top: 50px;
    margin-left: 2%;
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
`;
