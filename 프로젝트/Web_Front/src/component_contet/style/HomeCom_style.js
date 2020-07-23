import styled, { keyframes } from "styled-components"
import { media } from "../../lib/ReactiveStyle/ReactiveStyle"

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
`

export const HomeForm = styled.div`
  margin-left: 10%;
  margin-top: 100px;

  width: 100%;

  display: flex;
  justify-content: center;

  animation: ${slideInTop} 3s forwards ease-in;
  ${media.mobile`
    margin-left: 0%;
  `}
  ${media.desktop`
    margin-left: 0%;
  `}

  .title {
    display: flex;
    text-align: center;
    color: #676a72;
    font-size: 4.5rem;
    margin: 1rem auto;
    ${media.mobile`
    
    font-size: 3rem;
`}
  }

  .leftCon {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${media.mobile`
    margin-left: 2rem;
    width: 90%;
    `}
  }

  .title2 {
    margin: 1rem auto;
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
    border-radius: 50%;

    margin: 1rem auto;
  }

  .startButton a {
    color: #fff;
  }

  li {
    display: inline;
    justify-content: space-around;
  }

  .lng {
    display: flex;
    justify-content: space-around;
    width: 80%;
    padding: 0;
    list-style: none;
    margin: 1rem auto;
    ${media.mobile`
    
    `}
  }
`

export const Home = styled.img`
  height: auto;
  max-height: 100%;
  animation-delay: 3s;
  ${media.imgs`
  display:none;
`}
`

export const Img = styled.img`
  width: auto;
  height: auto;
  margin-right: 4%;
  max-width: 75px;
  max-height: 100px;
  ${media.mobile`
  max-width: 55px;
  margin: 0 0.5rem;
`}
`

export const ScrollDiv = styled.div`
  border: 5px solid #676a72;
  height: 11000px;
`
