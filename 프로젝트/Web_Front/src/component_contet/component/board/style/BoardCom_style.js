import styled, { keyframes } from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

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

export const BoardForm = styled.div`
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

  .boardNav {
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;

    color: #676a72;
    margin-top: 70px;
    margin-left: 9%;
    ${media.mobile`
    margin-top: 20px;
    width:96%;
    font-size:1rem;

`}

  .title{

    ${media.mobile`
    font-size:1.5rem;
    order: 0;
  `}
  }

  .searchbox {
    width:50%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-bottom: 0.5rem;
    
    ${media.mobile`
    font-size:1.5rem;
    margin-left:1rem;
    width:100%;
    order: 3;
  `}
  }

  select {
    width: 5rem;
    padding: 0.6em 0.5em;
    border: 1px solid #999;
    font-size: 1rem;
    font-family: inherit;
    border-radius: 0px;
    color: #676a72;
  }

  .searchInput{
    width: 70%;
    font: inherit;
    font-size: 1.5rem; 
    color: #676a72;
    height:2.2rem;
  }

  .searchButton{
    border: 2px solid #676a72;
    min-width:5rem;
    height:100%;
    font-size:2rem;
  }

  .infinitescroll {
    margin: 0;
    width: 1rem;
    
    overflow:hidden;
  }

  option{
    font-size:1.3rem;
  }

  }
  .writeButton{
    font-size:2rem;
    ${media.mobile`
    font-size:1.5rem;
    padding: 1rem 0;

`}
  }
  div{
    overflow:hidden;
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
    overflow:visible;
    ${media.mobile`
    width: 100%;
    `}
    &::before {
      content: "";

    
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
      margin-top: -17px;
      width: 30px;
      max-height: 30px;
  `}
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
  }
`}
  }
  .endBoard{
    text-align:center;
    font-size: 1.5rem;   
    ${media.mobile`
  font-size:1rem;
  `}
  }
`
