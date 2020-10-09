import styled, { keyframes } from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const PlanResultForm = styled.div`
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
  a {
    font-size: 3rem;
    margin: 1rem 0 3rem 0;
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
    text-align: left;
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
    width: 49%;
  }
  .planName {
    text-align: center;
    margin: 1rem auto;
  }
  .planExercise {
    display: flex;
    flex-wrap: wrap;
    height: 85%;
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
