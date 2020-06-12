import styled from "styled-components";
import media from "../../../ReactiveStyle/ReactiveStyle";

export const ContentComForm = styled.div`
  width: 100%;
  font-size: 2rem;
  margin-top: 50px;
  margin-left: 30px;
  border: 5px solid #676a72;
  border-left: solid white;
  &::before {
    content: "";
    position: static;
    margin: -1%;
    margin-top: -2.3%;
    display: block;
    border-radius: 50%;
    width: 50px;
    height: 58px;
    background: #676a72;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
  label {
    font-size: 2rem;
    margin-left: 3%;
    margin-top: 2%;
    margin-bottom: 2%;
    padding-bottom: 2%;
  }
  label.LabelReply {
    font-size: 2rem;
    margin-left: 3%;
    margin-top: 3%;
    margin-bottom: 2%;
    padding-bottom: 2%;
    border-bottom: white;
  }
  button.write {
    background-color: #676a72;
    color: white;
    font-size: 3rem;
    height: 85%;
    width: 10%;
    margin-left: 1.9%;
  }
  button.writeReply {
    background-color: #676a72;
    color: white;
    font-size: 3rem;
    margin-top: 1%;
    height: 75%;
    width: 10%;
    margin-left: 1.9%;
  }
  input {
    width: 75%;
    margin-left: 4%;
    margin-bottom: 1%;
  }
  input.InputReply {
    width: 75%;
    margin-top: 1%;
    margin-left: 4%;
    margin-bottom: 1%;
  }
  .Comment {
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 5px solid #676a72;
  }
  .Reply {
    font-size: 2rem;
    display: flex;
    border-bottom: 5px solid #676a72;
  }
  .Content {
    width: 77.3%;
    margin-left: 1%;
    border-right: 5px solid #676a72;
    padding: 2% 0 2% 2%;
  }
  .ContentReply {
    width: 70%;
    margin-top: 2px;
    border-right: 5px solid #676a72;
  }
  .ReplyContent {
    width: 20%;
    font-size: 1.5rem;
    text-align: center;
  }
  .CommentWriter {
    padding: 5% 1% 1% 5%;
    line-height: 140%;
    width: 50%;
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
    align-items: center;
  }
`;
