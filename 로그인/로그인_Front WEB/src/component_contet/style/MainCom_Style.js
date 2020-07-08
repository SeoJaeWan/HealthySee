import styled, { keyframes } from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

const slideInTop = keyframes`
  
  0% {   
    opacity: 0;
    transform: translateY(100px);
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
    opacity: 4;
    transform: translateY(0px);
  }
`;

export const MainForm = styled.div`
  padding-left: 30%;
  width: 60%;
  margin-top: 100px;
  
  display: flex;
  ${media.mobile`
    
    margin-left: 0%;
`}

  .title {
    display: flex;
    font-weight: bold;
    color: #676a72;
    font-size: 4.5rem;
    margin-top: 40px;

    animation: ${slideInTop} 3s forwards ease-in;
    ${media.mobile`
    
    font-size: 3rem;
`}
  }

  .leftCon {
    display: flex;
    flex-direction: column;
  }

  .title2 {
    margin-left: 10%;
    font-weight: bold;
    color: #676a72;
    font-size: 2rem;
    visibility: none;
    animation: ${slideInTop} 3s ease-in;
    ${media.mobile`
    
    font-size: 1.5rem;
`}
  }

  .startButton {
    font-size: 3rem;
    width: 200px;
    height: 100px;
    font-family: "font";
    background-color: #676a72;
    border-color: #676a72;
    color: white;
    border-radius: 50%;
    margin-top: 50px;
    margin-left: 20%;
    animation: ${slideInTop} 3s ease-in;
    ${media.mobile`
    
    margin-left: 10%;
`}
  }
  li{
    display:inline;
  }
  .Lng {
    list-style:none;
    width: 120%;
    margin-top: 50px;
    margin-left: -90px;
    animation: ${slideInTop} 3s ease-in;
    ${media.mobile`
    
    margin-left: -20%;
`}
  }
`;

export const Home = styled.img`
  height: auto;
  max-height: 100%;
  animation-delay: 3s;
  animation: ${slideInTop} 3s ease-in;  
  ${media.imgs`
  display:none;
`}
`;

export const Img = styled.img`
  width: auto;
  height: auto;
  margin-right:20px;
  max-width: 100px;
  max-height: 100px;
  ${media.mobile`
  width: 50%;
  top:10%;
  left:25%;
`}
`;
