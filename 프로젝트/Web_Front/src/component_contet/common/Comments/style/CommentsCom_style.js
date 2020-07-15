import styled from "styled-components"
import { media } from "../../../../ReactiveStyle/ReactiveStyle"

export const ContentComForm = styled.div`
  width: 100%;
  font-size: 2rem;
  margin-top: 50px;
  margin-left: 2%;
  border: 5px solid #676a72;
  border-left: solid white;
  &::before {
    content: "";
    margin: -10px;
    margin-top: -27px;
    border-radius: 50%;
    display: block;
    width: 50px;
    height: 50px;
    background: #676a72;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    ${media.mobile`    
      margin-top: -27px;
      min-width: 30px;
      min-height: 30px;
  `}
  }

  .comment {
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    border-bottom: 5px solid #676a72;
  }

  h5 {
    font-weight: normal;
    width: 4rem;
  }

  .commentInput {
    width: 75%;
    height: 80%;
    color: #676a72;
    font-size: 1.5rem;
    font: inherit;
    ${media.mobile`
    height: 60%;
  width: 60%;
  font-size:1rem;
  `}
  }

  .writeButton {
    background-color: #676a72;
    color: white;
    font-size: 3rem;
    height: 85%;
    width: 10%;
    ${media.board`
  font-size: 1.5rem;
  `}
    ${media.mobile`
    width:16%;
    height:65%;
  `}
  }

  label {
    font-size: 2rem;
    margin-left: 3%;
    margin-top: 2%;
    margin-bottom: 2%;
    padding-bottom: 2%;
    text-align: center;
    ${media.board`
  font-size: 1.5rem;
  `}
  }
  .labelReply {
    font-size: 2rem;
    margin-left: 3%;
    margin-top: 3%;
    margin-bottom: 2%;
    padding-bottom: 2%;
    border-bottom: white;
    ${media.board`
  font-size: 1.5rem;
  `}
  }

  .writeReply {
    background-color: #676a72;
    color: white;
    font-size: 3rem;
    height: 75%;
    width: 10%;
    margin-left: 1.9%;
    ${media.board`
  font-size: 1.5rem;
  `}
    ${media.mobile`
    width:16%;
    height:65%;
  `}
  }
  .separateREF {
    padding-left: 2%;
    font: solid;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-align: center;
    ${media.mobile`
    font-size:1.5rem  `}
  }
  pre {
    margin: 0;
  }
  .inputReply {
    width: 75%;
    height: 80%;
    margin-top: 1%;
    margin-left: 4%;
    margin-bottom: 1%;
    ${media.mobile`
    height: 60%;
  width: 60%;
  `}
  }
  .inputReplyChagne {
    border-right: 5px solid #676a72;
    width: 75%;
    height: 80%;
    font-size: 2rem;
    margin-top: 1%;
    margin-left: 4%;
    margin-bottom: 1%;
    margin-right: 5%;
    ${media.mobile`
    height: 60%;
  width: 60%;
  `}
  }

  .commentChange {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 5px solid #676a72;
  }
  .reply {
    font-size: 2rem;
    display: flex;
    border-bottom: 5px solid #676a72;
    ${media.board`
  font-size: 1.5rem;
  `}
  }
  .content {
    width: 77.3%;
    margin-left: 1%;
    border-right: 5px solid #676a72;
    padding: 2% 0 2% 2%;
    ${media.board`
width:80%  `}
  }
  .REFContent {
    width: 72.3%;
    border-right: 5px solid #676a72;
    padding: 2% 0 2% 2%;
    ${media.board`
width:76%  `}
    ${media.mobile`
width:70%  `}
  }

  table {
    width: 20%;
    font-size: 1.5rem;
    text-align: center;
    height: 100%;
    border: 5px solid #676a72;
    ${media.board`
  font-size: 1rem;
  `}
    ${media.mobile`
      width: 40%  `}
  }

  th{
    
    height:3rem;
    font-weight:normal;
  }
  .reportButton{
    font-size:1.5rem;
  }

  .commentWriter {
    padding: 5% 1% 1% 5%;
    line-height: 140%;
    width: 70%;
  }
  .flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .deleteButton {
    display: flex;
    border-top: 5px solid #676a72;
    justify-content: center;
  }
  .blind {
    padding-left: 3%;
    width: 97%;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 5px solid #676a72;
  }
  .bottomHR {
    margin: 0 0 0 0;

    border: none;
    border-style: solid;
    border-width: 3px;
    border-color: #676a72;
  }
`
