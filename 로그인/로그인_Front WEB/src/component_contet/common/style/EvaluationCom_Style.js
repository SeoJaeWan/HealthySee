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
    font-size: 2rem;
    ${media.mobile`  
    font-size:1.5rem;
  `}
  }
  .writer {
    width: 80%;
    font-weight: normal;
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: left;
  }

  table{
    font-size:1.5rem;
  }
  .buttonForm {
    border: 4px solid #676a72;
    margin:1%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .contentForm {
    width: 100%;
    font-size: 3rem;
    height: 30%;
    ${media.mobile` 
    font-size:1.5rem;
  `}
    display:flex;

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
