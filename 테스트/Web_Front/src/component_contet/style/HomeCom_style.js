import styled, { keyframes } from "styled-components";
import { media } from "../../lib/ReactiveStyle/ReactiveStyle";

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

export const HomeForm = styled.div`
  padding-left: 30%;
  margin-top: 100px;

  width: 60%;
  height: 200vh;

  display: flex;

  animation: ${slideInTop} 3s forwards ease-in;
  ${media.mobile`
    padding-left: 18%;
    margin-left: 0%;
`}

  .title {
    display: flex;
    font-weight: bold;
    color: #676a72;
    font-size: 4.5rem;
    margin-top: 40px;
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
    ${media.mobile`
    
    font-size: 1.5rem;
`}
  }

  .startButton {
    font-size: 3rem;
    width: 200px;
    height: 100px;
    background-color: #676a72;

    border: none;

    color: white;
    border-radius: 50%;
    margin-top: 50px;
    margin-left: 20%;
    ${media.mobile`

    margin-left: 10%;
    
    `}
  }

  li {
    display: inline;
  }

  .lng {
    list-style: none;
    width: 120%;
    margin-top: 50px;
    margin-left: -100px;
    ${media.mobile`
    
    margin-left: -23%;
    `}
  }
`;

export const Home = styled.img`
  height: auto;
  max-height: 100%;
  animation-delay: 3s;
  ${media.imgs`
  display:none;
`}
`;

export const Img = styled.img`
  width: auto;
  height: auto;
  margin-right: 20px;
  max-width: 100px;
  max-height: 100px;
  ${media.mobile`
  width: 18%;
  top:10%;
  left:25%;
`}
`;
