import styled, { keyframes } from "styled-components"
import { media } from "../../../../../lib/ReactiveStyle/ReactiveStyle"

export const CommentItemForm = styled.div`
  display: flex;

  .contentsForm {
    margin: 1rem 1rem 1rem 2.3rem;
    padding: 0.5rem;
    border: 3px solid #676a72;
    height: 6rem;
    width: 85%;
    ${media.mobile`   
    width: 50%;
  `}
  }

  h2 {
    font-weight: normal;
    margin: 0 auto;
  }

  .writerinfoForm {
    margin: 1rem 0.5rem 0 0;
    text-align: center;
    width: 10%;
    min-width: 5rem;
    height: 6rem;
  }

  .writerFrom {
    font-size: 2rem;
  }

  .dateForm {
    margin-top: 1rem;
    font-weight: normal;
  }

  .ratinginfoForm {
    margin: 0.3rem 0.5rem 0 0;
    width: 10rem;
    min-width: 10rem;
    height: 6rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    ${media.mobile`  
    
    width: 6rem;
    min-width: 6rem;  
  `}
  }

  .ratingScore {
    margin: 1.5rem 0 1rem 0;
    line-height: 1.5rem;
    font-size: 3rem;
  }
`
