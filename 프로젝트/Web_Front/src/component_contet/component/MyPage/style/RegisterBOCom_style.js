import styled from "styled-components";
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle";

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

  .Title {
    display: flex;
    color: #676a72;
    justify-content: space-between;
    font-size: 3rem;
    margin-left: 9%;
    margin-top: 70px;
    ${media.mobile`
  font-size:1rem;

`}
  }
  .BoardForm {
    display: flex;
    flex-direction: column;
    width: 95%;
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
    text-align:center;
    margin-left: 5%;
  }
  .BoardTitle{  
    width: 45vw;
    font-size: 2rem;
    ${media.mobile`
  font-size:1rem;
`}
  }
  .BoardDate{
    width: 10rem;    
    font-size: 2rem;
    ${media.mobile`
  font-size:1rem;

`}
  } 
  .BoardResult{
    width: 10rem;
    font-size: 2rem;    
    ${media.mobile`
  font-size:1rem;
  `}
  }
  .Item{
    margin-top: 1rem;
    display:flex;
    text-align:center;
    margin-left: 5%;
    margin-bottom: 1rem;
  }
  .ItemTitle{  
    width: 45vw;
    font-size: 2rem;
    text-align:left;
    ${media.mobile`
  font-size:1rem;
`}
  }
  .ItemDate{
    display:flex;
    justify-content:center;
    width: 10rem; 
    align-items:center;   
    font-size: 1.5rem;
    ${media.mobile`
  font-size:1rem;

`}
  } 
  .ItemResult{
    width: 10rem;
    font-size: 2rem;    
    ${media.mobile`
  font-size:1rem;
  `}
  }
`;
