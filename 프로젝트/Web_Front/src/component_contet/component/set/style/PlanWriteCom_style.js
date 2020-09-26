import styled, { keyframes } from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const PlanWriteForm = styled.div`
  width: 98%;
  height: 35rem;
  margin: 1rem;
  border-radius: 20px;
  ${media.mobile`
  min-width: 15rem;
  height: 20rem;
`}

  .titleFrom {
    width: 100%;
    position: relative;
    height: 5rem;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    ${media.mobile`
  height: 5rem;
`}
  }
  h1 {
    margin: 0 1rem;
    font-size: 2.5rem;
  }
  h2 {
    margin: 0;
  }
  .titleInput {
    width: 50%;
    height: 3.5rem;
    margin: 0 1rem 0 0;
    font-size: 2rem;
  }

  .writeButton {
    position: absolute;
    font-size: 1.8rem;
    top: 0px;
    right: 10px;
  }

  .addButton {
    position: absolute;
    font-size: 1.8rem;
    top: 40px;
    right: 10px;
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

  .explainSetForm {
    font-size: 2rem;
  }
  .setTitle {
    margin: 2rem 0 0 3rem;
  }
  .textForm {
    display: flex;

    width: 100%;
    height: 400px;

    font-size: 1rem;

    border: 5px solid #676a72;
    border-left: solid white;

    margin: 20px 0 30px 0;

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
  .textArea {
    margin-left: 2%;
    padding: 8px;

    color: #676a72;
    font: inherit;
    font-size: 1.5rem;
    width: 100%;
    border: none;
    resize: none;
    overflow: auto;
    height: auto;
    box-shadow: 0px 4px 10px -8px black;
  }
`
