import styled, { keyframes } from "styled-components"
import { media } from "../../../../ReactiveStyle/ReactiveStyle"

const slideInTop = keyframes`
  
  0% {   
    opacity: 0;
    transform: translateY(-1px);
  }
  20% {
    opacity: 1;
    transform: translateY(0px);
  }
  85% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const SelectBoardForm = styled.div`
  min-width: 35rem;
  ${media.imgs`
  width: 100%;
  `}
  ${media.board`
  width: 90%;
  `}
  ${media.mobile`
  min-width: 20rem;
  `}

  h1 {
    padding-bottom: 0.5rem;
    padding-left: 1.5rem;
    font-size: 2rem;
  }

  option {
    font-size: 1.3rem;
  }

  select {
    width: 5rem;
    padding: 0.8em 0.5em;
    border: 1px solid #999;
    font-size: 1rem;
    font-family: inherit;
    border-radius: 0px;
    color: #676a72;
  }
  .Write {
    margin-right: 70px;
  }
  .boardNav {
    display: flex;
    color: #676a72;
    justify-content: space-between;
    margin-left: 9%;
    margin-top: 70px;
    ${media.mobile`
  font-size:1rem;

`}
  }
  .writeButton{
    font-size:2rem;
  }
  .boardForm {
    display: flex;
    flex-direction: column;
    width: 95%;
    font-size: 1rem;
    border: 5px solid #676a72;
    border-left: solid white;
    max-height: 100%;
    margin-left: 5%;
    ${media.mobile`
    width: 100%;
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
    }
  }
  .boardTitle {
    width: 67%;

    ${media.mobile`
    max-width:2rem;
    `}
  }
  .boardWriter {
    width: 10%;
    ${media.mobile`
    display:none;
    `}
  }
  .boardDate {
    ${media.mobile`
    display:none;
    `}
  }
  .boardHit {
    
    width: 5rem;
    ${media.mobile`
    display:none;
    `}
  }

  
  .table {
    width:100%;
    table-layout: fixed;

    border-collapse: separate;
    border-spacing: 10px 20px;
  }
  
  .item {
    width:100%;
    font-size: 1.5rem;
    text-align: center;
    animation: ${slideInTop} 2s forwards ease-in;
    ${media.mobile`
     display:none;
     font-size:1rem;
     width:100%;
     
    
`}
    cursor: pointer;
  }
  
  .flex{
    font-size:1.2rem;
  }
  .itemTitle {
    width: 67%;
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .itemWriter {
    width: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    ${media.mobile`
    display:none;
`}
  }
  .itemDate {
    width: 20%;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${media.mobile`
    display:none;
`}
  }
  .itemHit {
    min-width: 3rem;
    max-width: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${media.mobile`
    display:none;
`}
  }
  .mobileItem{
    
    
    display:none;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 40px;
    white-space: nowrap;
    ${media.mobile`
      display:block;
      max-width:100%;
    overflow: hidden;
    text-overflow: ellipsis;
    
    white-space: nowrap;
 `}
}
`
