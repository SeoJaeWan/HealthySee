import styled, { keyframes } from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const PoseInfoForm = styled.div`
  margin: 1.5rem 0;

  .topButton {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem auto;
    width: 80%;
  }

  .profileIMG {
    width: 130px;
    height: 130px;
    border-radius: 20px;
    margin: 20px;
  }
  .flex {
    display: flex;
    ${media.half`
    flex-wrap: wrap;
  `}
  }

  .leftForm {
    width: 45%;
    min-width: 30rem;
    border-radius: 20px;
    margin: 1rem;
    border: 3px solid #676a72;
    ${media.half`
    width: 100%;
    min-width: 100%;
  `}
  }

  .titleFrom {
    display: flex;
    align-items: center;
  }

  .infoForm {
    margin-top: 1rem;
    padding-left: 1rem;

    width: 55%;
    height: 8rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  dt {
    font-size: 2.5rem;
    width: 100%;
    height: 4rem;
    line-height: 3rem;
  }

  dd {
    width: 50%;
    font-size: 1.8rem;
  }

  .descriptionForm {
    margin-top: 1.5rem;
    padding-left: 2rem;
    font-size: 2rem;
  }
  .explainForm {
    width: 100%;
    line-height: 2rem;
    padding: 1.5rem;
    font-size: 2rem;
  }
  .rightForm {
    width: 50%;
    min-width: 35rem;
    margin: 1rem;
    border-radius: 20px;
    border: 3px solid #676a72;
    ${media.half`
    width: 100%;
    min-width: 100%;
  `}
  }

  .videoView {
    padding: 1rem;
    width: 100%;
    height: 100%;
    min-width: 35rem;
    ${media.half`
    width: 100%;
    min-width: 5rem;
  `}
  }
`
