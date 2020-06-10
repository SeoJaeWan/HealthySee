import styled from "styled-components";

export const EvaluationComForm = styled.div`
  width: 70%;
  margin-left: 260px;
  button {
    font-size: 3rem;
  }
  .PositionB {
    display: flex;
    margin-left: 160px;
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
`;
