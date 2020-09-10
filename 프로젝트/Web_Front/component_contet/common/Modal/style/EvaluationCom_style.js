import styled from "styled-components";
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle";

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
    display: flex;
    align-items: center;
    justify-content: left;

    width: 80%;

    font-weight: normal;

    padding: 1%;
    margin: 0;
  }
  table{

    font-size:1.5rem;
    min-width: 9.5rem;

    ${media.mobile` 

    min-width: 8rem;
    font-size:1rem;
  `}
  }

  .buttonForm {
    text-align: center;

    border: 4px solid #676a72;

    margin:1%;
    
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

      margin: -10px;
      margin-top: -27px;

      border-radius: 50%;

      width: 50px;
      height: 50px;
      background: #676a72;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
      transition: 0.2s;
      
      ${media.mobile`   

      margin-top: -17px;

      min-width: 30px;
      max-height: 30px;
  `}
    }
  }
`;
