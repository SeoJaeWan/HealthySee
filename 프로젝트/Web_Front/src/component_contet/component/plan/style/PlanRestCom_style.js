import styled, { keyframes } from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const PlanRestForm = styled.div`
  width: 98%;
  height: 35rem;
  margin: 1rem;
  border-radius: 20px;
  ${media.mobile`
    min-width: 15rem;
    height: 20rem;
  `}

  .titleFrom {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
    ${media.mobile`
    height: 5rem;
  `}
  }
  h1 {
    margin: 1rem;
  }
  h2 {
    margin: 1rem;
  }
  .flex {
    display: flex;
    justify-content: space-around;
  }
  dl {
    margin: 1.5rem;
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 2rem;
  }
  dt {
    width: 30%;
  }
  dd {
    width: 70%;
  }
  .InfoForm {
    border: 3px solid #676a72;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 48%;
  }
  .trainingForm {
    border: 3px solid #676a72;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 49%;
  }
  .nextTraining {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .videoView {
    width: 95%;
  }
  .remainingExerciseForm {
    display: flex;
    flex-wrap: wrap;
    height: 15rem;
    overflow: hidden;
    overflow-y: scroll;
    border: 3px solid #676a72;
    margin: 0.2rem;
  }
  .remainingExercise {
    margin: 0.5rem;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 2rem;
  }
  .trainingName {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #676a72;
    height: 3rem;
    color: white;
  }
  .trainingCount {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #676a72;
    height: 3rem;
    color: white;
  }
`
