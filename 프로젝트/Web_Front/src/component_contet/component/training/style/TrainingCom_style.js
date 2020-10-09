import styled, { keyframes } from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const loaderP = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const TrainBoxApp = styled.div`
  width: 100%;

  padding-top: 40px;
  .infoForm {
    display: flex;
    justify-content: space-around;
  }
  .trainImg {
    height: 40%;
    width: 100%;
    position: absolute;
    border: 5px solid #676a72;
    font-size: 300px;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    bottom: 0;
  }
  p {
    font-size: 8rem;
  }
  h2 {
    margin: 0;
  }
  .trainCapture {
    margin-top: 2.5rem;
    width: 10%;
  }
`

export const TrainBox = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .infoForm {
    width: 80%;
    display: flex;
    justify-content: space-around;
  }

  h2 {
    margin: 1rem;
    font-size: 3rem;
  }
  .trainForm {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .trainImg {
    border: 5px solid #676a72;
    margin: 0 4rem 0 4rem;
    width: 510px;
    height: 610px;
  }
  .trainCapture {
    margin-left: 2rem;
    border: 5px solid #676a72;
    margin: 0 4rem 0 4rem;
    width: 510px;
    height: 610px;
  }

  img {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`
export const Counter = styled.p`
  width: 75%;
  opacity: 0;
  z-index: 3;
  color: #676a72;
  transition: opacity 1s;
  display: ${(props) => (props.CountView ? "block" : "none")};
  animation: ${loaderP} 1s;
`

export const Progress = styled.progress`
  -webkit-appearance: none;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  height: 80px;
  width: 73%;
  border: 5px solid #676a72;
  transition: all 0.5s;
  border-radius: 60px;
  ::-webkit-progress-bar {
    background-color: white;
    border-radius: 60px;
  }
  ::-webkit-progress-value {
    background-color: #676a72;

    border-radius: 30px;
  }
`
