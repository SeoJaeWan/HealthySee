import styled, { keyframes } from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const PlanPoseItemForm = styled.div`
  width: 20%;
  min-width: 20rem;
  margin: 1.2rem;
  height: 25rem;
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

  .titleForms {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    ${media.mobile`
    height: 5rem;
  `}
  }

  .name {
    width: 100%;
    margin: 0;
    text-align: center;
    font-size: 2.5rem;
    color: #676a72;
  }
  h3 {
    flex-grow: 1;
    text-align: center;
    margin: 1rem;
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
  .contents {
    margin: 1rem;
    max-height: 18rem;
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

  .menu-item-wrapper {
    width: 17.5rem;
    vertical-align: middle;
  }
  .menu-wrapper {
  }
`
