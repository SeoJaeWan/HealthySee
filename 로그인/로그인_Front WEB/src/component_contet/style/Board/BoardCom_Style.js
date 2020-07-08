import styled, { keyframes } from "styled-components"
import { media } from "../../../ReactiveStyle/ReactiveStyle"

const slideInTop = keyframes`
  
  0% {   
    
    opacity: 0;
    transform: translateY(-1px);
  }
  20% {
    opacity: 1;
    transform: translateY(0px);
  }
  85% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

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
  width: 90%;
  margin-left: 0%;
`}
  .infinitescroll {
    margin: 0;
    width: 100%;
    overflow:visible;
  }
  .Item {
    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: 5%;
    font-size: 1.5rem;
    display:flex;  
    overflow:visible;
    text-align:center; 
    animation: ${slideInTop} 2s forwards ease-in;
    ${media.mobile`
     font-size:1rem;

    margin-top: 15%;
    margin-bottom: 15%;
`}
    cursor: pointer;
  }
  .Board {
    width: 100%;
  }
  option{
    font-size:1.3rem;
  }
  .Searchbox {
    width:50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  select {
    width: 5rem;
    padding: 0.8em 0.5em;
    border: 1px solid #999;
    font-size: 1rem;
    font-family: inherit;
    border-radius: 0px;
    color: #676a72;
  }
  .SearchInput{
    width: 70%;
    font: inherit;
    font-size: 2rem; 
    color: #676a72;
    height: 80%;
  }
  .SearchButton{
    border: 2px solid #676a72;
    width:5rem;
    height: 90%;
    font-size:2rem;
    ${media.desktop`
    font-size:1rem;
  `}
  }
  .Write {
    margin-right: 70px;
  }
  .boardNav {
    display: flex;
    color: #676a72;
    justify-content: space-between;
    margin-left: 9%;
    margin-top: 70px;
    ${media.mobile`
  font-size:1rem;

`}
  }
  .writeButton{
    font-size:2rem;
  }
  .BoardForm {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1rem;
    border: 5px solid #676a72;
    border-left: solid white;
    max-height: 100%;
    margin-left: 5%;
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
  .flex{
    display:flex;
    margin-left:5%;
  }
  .BoardTitle{  
    width: 35vw;
    text-align:center; 
    font-size: 2rem;
    ${media.mobile`
  font-size:1rem;
`}
  }
  
  .BoardWriter{
    width: 15rem;  
    text-align:center; 
    font-size: 2rem;    
    ${media.mobile`
  font-size:1rem;
`}
  }
  .BoardDate{
    width: 10rem;    
    text-align:center; 
    font-size: 2rem;
    ${media.mobile`
  font-size:1rem;

`}
  } 
  .BoardHit{
    width: 10rem;
    text-align:center; 
    font-size: 2rem;    
    ${media.mobile`
  font-size:1rem;
  `}
  }
  .ItemTitle{
    width: 35vw;
    white-space : nowrap;
    overflow : hidden;
    text-overflow : ellipsis;
    text-align:left; 
    font-size: 2rem;
    ${media.mobile`
  font-size:1rem;
`}
  }
  .ItemDate{
    display:flex;
    align-items:center;
    justify-content:center;   
    width: 10rem;    
    white-space : nowrap;
    overflow : hidden;
    text-overflow : ellipsis;
    text-align:center; 
    font-size: 1rem;
    ${media.mobile`
  font-size:0.5rem;
`}
  }
  .ItemWriter{
    width: 15rem;     
    text-align:center; 
    font-size: 2rem;
    ${media.mobile`
  font-size:1rem;
`}
  }
  .ItemHit{
    width: 10rem;   
    white-space : nowrap;
    overflow : hidden;
    text-overflow : ellipsis;
    text-align:center; 
    display:flex;
    align-items:center;
    justify-content:center;  
    font-size: 1rem;
    ${media.mobile`
  font-size:1rem;
`}
  }
  .itemTable{
    margin-left:3.6%;
  }
  
  .EndBoard{
    text-align:center;
    font-size: 2rem;   
    ${media.mobile`
  font-size:1rem;
  `}
  }
`
