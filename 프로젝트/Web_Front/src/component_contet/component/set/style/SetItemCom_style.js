import styled, { keyframes } from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const SetItemForm = styled.div`
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
  h2 {
    width: 20%;
    margin: 0;
    text-align: center;
    font-size: 2.5rem;
  }
  h3 {
    margin: 1rem;
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
`
