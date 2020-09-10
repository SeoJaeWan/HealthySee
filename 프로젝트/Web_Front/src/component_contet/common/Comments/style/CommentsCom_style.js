import styled from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

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
    margin: 0;
  }

  .commentInput {
    width: 75%;
    height: 80%;

    color: #676a72;
    font: inherit;
    font-size: 1.5rem;

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

  .separateREF {
    display: flex;
    align-items: center;

    padding-left: 2%;
    padding-right: 2%;

    font: solid;
    width: 2rem;
    font-size: 2rem;
    text-align: center;
    ${media.mobile`
    font-size:1.5rem  `}
  }

  .reply {
    display: flex;

    font-size: 2rem;

    border-bottom: 5px solid #676a72;
    ${media.board`
  font-size: 1.5rem;
  `}
  }

  .content {
    display: flex;

    width: 77.3%;
    border-right: 5px solid #676a72;

    margin-left: 1%;
    padding: 2% 0 2% 2%;

    ${media.board`
    width:80%  `}
  }

  .REFContent {
    width: 90%;
    ${media.board`
 `}
    ${media.mobile`
 `}
  }

  .editButton {
    padding-left: 2.2%;
  }

  table {
    width: 20%;
    height: 100%;
    font-size: 1.5rem;

    border-collapse: collapse;
    text-align: center;
    ${media.board`
  font-size: 1rem;
  `}
    ${media.mobile`
      width: 40%  `}
  }

  .separationline {
    border-right: 3px solid #676a72;
  }

  th {
    height: 2.5rem;
    width: 50%;
    font-weight: normal;
  }

  td {
    border-bottom: 3px solid #676a72;

    height: 2.5rem;
    font-size: 1.5rem;
  }

  .reportButton {
    display: block;

    font-size: 1.5rem;

    width: 100%;
    height: 100%;
    ${media.board`
  font-size: 1rem;
  `}
  }

  .blind {
    display: flex;
    align-items: center;

    padding-left: 3%;

    width: 97%;
    height: 100px;
    border-bottom: 5px solid #676a72;
  }
`
