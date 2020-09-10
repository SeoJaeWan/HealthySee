import styled, { keyframes } from "styled-components"
// import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

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

export const TrainBox = styled.div`
  width: 100%;
  height: 600px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  .trainImg {
    width: 35%;
    position: relative;
    border: 5px solid #676a72;
    font-size: 300px;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .trainCapture {
    margin-left: 2rem;
    border: 5px solid #676a72;
    width: 35%;
  }
`
export const Counter = styled.p`
  width: 75%;
  height: 75%;
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
