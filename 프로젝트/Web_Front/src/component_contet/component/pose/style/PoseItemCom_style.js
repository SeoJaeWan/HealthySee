import styled, { keyframes } from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const PoseItemForm = styled.div`
  width: 20%;
  min-width: 20rem;
  height: 30rem;
  margin: 1rem;
  border: 3px solid #676a72;
  border-radius: 20px;
  ${media.mobile`
    min-width: 15rem;
    height: 20rem;
  `}
  :hover {
    cursor: pointer;
  }

  .profileIMG {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin: 10px;
    ${media.mobile`
    width: 50px;
    height: 50px;
  `}
  }

  .titleFrom {
    display: flex;
    align-items: center;
    ${media.mobile`
    height: 5rem;
  `}
  }

  dl {
    margin-top: 1rem;

    width: 50%;
    height: 8rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    ${media.mobile`
    margin-top:0.5rem;
    height: 5rem;
  `}
  }

  dt {
    text-align: center;
    font-size: 2.5rem;
    width: 100%;
    height: 4rem;
    line-height: 3rem;
    ${media.mobile`
    font-size: 2rem;
    line-height: 2rem;
    height: 2rem;
  `}
  }

  dd {
    width: 50%;
    text-align: center;
    min-width: 6rem;
    font-size: 1.5rem;
  }

  .moreButton {
    font-size: 3rem;
    height: 3rem;
    line-height: 3rem;
    width: 20%;
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
    margin: 1rem;
    height: 18rem;
    width: 17.5rem;
    border-radius: 20px;
    overflow: hidden;
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

  .contextIMG {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`
