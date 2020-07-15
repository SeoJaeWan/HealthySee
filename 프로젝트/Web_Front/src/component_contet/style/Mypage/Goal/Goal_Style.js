import styled from "styled-components";
import {media} from "../../../../ReactiveStyle/ReactiveStyle";

export const GoalForm = styled.div `
  .TitleForm{
    display:flex;
    justify-content:space-between;    
  }
  .MoreButton{  
    margin: 2rem 3rem 1rem 3rem;
    font-size: 2rem;
  }
  .IntroForm{
    margin-top:3rem;
    margin-left:5%;
  }
  .BoardForm {
    display: flex;
    flex-direction: column;
    width: 95%;
    font-size: 1rem;
    border: 5px solid #676a72;
    border-left: solid white;
    max-height: 100%;
    ${media.mobile`
    width: 100%;
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
    }
  }
  .IntroInfo{
    font-size:2rem;
    padding: 2rem;
  }

  .Introtitle{
    margin: 2rem 0 1rem 3rem;
    font-size: 2rem;
  }

`