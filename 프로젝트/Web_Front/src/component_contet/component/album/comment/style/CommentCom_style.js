import styled, { keyframes } from "styled-components"
import { media } from "../../../../../lib/ReactiveStyle/ReactiveStyle"

export const CommentForm = styled.div`
  width: 97%;
  font-size: 2rem;
  height: 10rem;
  margin: 50px 0 0 1rem;

  border: 5px solid #676a72;
  border-left: solid white;
  display: flex;

  &::before {
    content: "";

    margin: -10px;
    margin-top: -27px;

    background: #676a72;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    border-radius: 50%;

    display: block;
    min-width: 50px;
    height: 50px;

    transition: 0.2s;
    ${media.mobile`    
      margin-top: -17px;
      min-width: 30px;
      height: 30px;
  `}
  }

  .textInput {
    margin: 2rem 1rem 0 1rem;
    border-radius: 15px;
    height: 6rem;
    width: 85%;
  }

  .writeButton {
    margin: 2rem 1rem 0 1rem;
    width: 10%;
    font-size: 2rem;
    background-color: #676a72;
    color: white;
    height: 6rem;
    border-radius: 20px;
  }

  .ratingButtonForm {
    text-align: center;
    line-height: 3rem;
    margin: 2rem 1rem 0 1rem;
    width: 6rem;
    height: 6rem;
  }
  h2 {
    font-size: 2rem;
    margin: 0.5rem auto;
    padding-right: 4%;
  }
`

export const CommentsItemForm = styled.div`
  width: 97%;
  font-size: 2rem;
  margin: 50px 0 0 1rem;

  border: 5px solid #676a72;
  border-left: solid white;

  &::before {
    content: "";

    margin: -10px;
    margin-top: -27px;

    background: #676a72;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    border-radius: 50%;

    display: block;
    width: 50px;
    height: 50px;

    transition: 0.2s;
    ${media.mobile`    
      margin-top: -17px;
      width: 30px;
      height: 30px;
  `}
  }
`
