import styled from "styled-components";
import { media } from "../../../ReactiveStyle/ReactiveStyle";

export const ContentComForm = styled.div`
  width: 100%;
  font-size: 2rem;
  margin-top: 50px;
  margin-left: 2%;
  border: 5px solid #676a72;
  border-left: solid white;
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
      width: 30px;
      height: 40px;
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
  label.LabelReply {
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
  button.write {
    background-color: #676a72;
    color: white;
    font-size: 3rem;
    height: 85%;
    width: 10%;
    margin-top: -1%;
    margin-left: 1%;
    ${media.board`
  font-size: 1.5rem;
  `}
    ${media.mobile`
    width:16%;
    height:65%;
  `}
  }
  button.writeReply {
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
  input {
    width: 75%;
    height: 80%;
    color: #676a72;
    font: inherit;
    font-size: 2rem;
    margin-left: 4%;
    margin-bottom: 1%;
    ${media.mobile`
    height: 60%;
  width: 60%;
  `}
  }
  .InputReply {
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
  .InputReplyChagne {
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
  .Comment {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 5px solid #676a72;
  }
  .CommentChange {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 5px solid #676a72;
  }
  .Reply {
    font-size: 2rem;
    display: flex;
    border-bottom: 5px solid #676a72;
    ${media.board`
  font-size: 1.5rem;
  `}
  }
  .Content {
    width: 77.3%;
    margin-left: 1%;
    border-right: 5px solid #676a72;
    padding: 2% 0 2% 2%;
    ${media.board`
width:80%  `}
  }

  .ReplyContent {
    width: 20%;
    font-size: 1.5rem;
    text-align: center;
    ${media.board`
  font-size: 1rem;
  `}
    ${media.mobile`
width: 40%  `}
  }
  .CommentWriter {
    padding: 5% 1% 1% 5%;
    line-height: 140%;
    width: 70%;
  }
  .flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .DeleteButton {
    display: flex;
    border-top: 5px solid #676a72;
    justify-content: center;
  }
  .Blind {
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
`;
