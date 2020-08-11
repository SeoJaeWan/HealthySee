import styled from "styled-components"
// import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const TrainBox = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  .trainImg {
    width: 630px;
    height: 600px;

    border: 5px solid #676a72;
    font-size: 300px;
    text-align: center;
  }

  .trainCapture {
    margin: 0 2rem;
    border: 5px solid #676a72;
    width: 630px;
    height: 600px;
  }
`

export const Progress = styled.progress`
  height: 10rem;
  width: 80rem;
  margin-left: 20%;
  display: flex;
  justify-content: center;
`
