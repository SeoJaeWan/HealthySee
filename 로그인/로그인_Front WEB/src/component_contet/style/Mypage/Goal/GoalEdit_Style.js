import styled from "styled-components";
import { media } from "../../../../ReactiveStyle/ReactiveStyle";

export const GoalEditForm = styled.div`
  width: 100%;

  .WriteButton {
    font-size: 2rem;
  }
  .Title {
    display: flex;
    color: #676a72;
    justify-content: space-between;
    font-size: 3rem;
    margin-left: 9%;
    margin-top: 2rem;
    ${media.mobile`
  font-size:1rem;

  `}
  }
  .BoardForm {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    width: 95%;
    font-size: 1rem;
    border: 5px solid #676a72;
    border-left: solid white;
    max-height: 100%;
    margin-left: 5%;
    z-index: 999;
    ${media.mobile`
  width: 100%;
  `}
    &::before {
      content: "";
      position: static;
      z-index: 999;
      margin: -10px;
      margin-top: -30px;
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
