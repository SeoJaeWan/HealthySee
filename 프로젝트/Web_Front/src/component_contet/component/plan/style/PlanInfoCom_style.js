import styled, { keyframes } from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const PlanInfoForm = styled.div`
  width: 98%;
  height: 35rem;
  margin: 1rem;
  border: 3px solid #676a72;
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
    margin: 2rem;
  }
  h2 {
    width: 20%;
    margin: 0;
    text-align: center;
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
    margin: 0.5rem;
  }

  .moreButton {
    font: normal;
    font-size: 2rem;
    height: 3rem;
    line-height: 3rem;
  }

  .imgView {
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
    ${media.mobile`
    margin: 0 auto;
    width:12rem;
    height:13rem;
  `}
  }

  .content {
    margin: 1rem auto;
    height: 28rem;
    width: 95%;
    border-radius: 20px;
    display: flex;
    overflow: hidden;
    overflow-x: hidden;
    border: 3px solid #676a72;
    ${media.mobile`
    margin-top:0.5rem;
    width:12rem;
    height:13rem;
  `}
  }

  img {
    max-width: 100%;
  }

  .contextTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    ${media.mobile`
    height: 5rem;
  `}
  }

  .contextForm {
    width: 100%;
    height: 400px;

    font-size: 1rem;

    border: 5px solid #676a72;
    border-left: solid white;

    margin: 0 auto;

    ${media.mobile`
  width: 100%;
  margin-left: 2%;
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
      ${media.mobile`    
    margin-top: -20px;
    z-index:3;
    width: 30px;
    height: 40px;
`}
    }
  }
  .writer {
    font-size: 1.8rem;
    width: 17rem;
  }
  h4 {
    margin: 1rem;
    font-size: 2rem;
  }
`
