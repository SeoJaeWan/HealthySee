import styled, { keyframes } from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const InfCom = styled.div`
  width: 100%;
  margin-top: 2rem;

  .flex {
    display: flex;
    justify-content: space-between;
    ${media.tablet`
     flex-wrap:wrap;
    justify-content: center;
    `}
  }
  .leftDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-left: 3%;
    height: 80%;
    width: 25%;
    min-width: 15rem;
  }
  .Title {
    font-size: 2rem;
  }

  .ImgDiv {
    border: 3px solid #676a72;
    height: 32vw;
    width: 18vw;
    min-height: 22.3rem;
    min-width: 14rem;
    max-width: 15rem;
    max-height: 22.3rem;
  }
  .PublicDiv {
    font-size: 2rem;
  }
  .rightDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 3%;
    height: 80%;
    width: 65%;
    min-width: 20rem;
    ${media.tablet`
     width:100%;
    `}
  }
  .Contents {
    display: flex;
    border: 3px solid #676a72;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    height: 3rem;
    align-items: center;
  }
  .rowrserver {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2rem;
  }
  .edit {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2rem;
    margin: 0 2rem 2rem 0;
  }
  .FlexGrow {
    flex-grow: 1;
    min-width: 10rem;
    margin-left: 1.5rem;
  }
  .TowContetns {
    flex-wrap: wrap;
    display: flex;
    font-size: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    min-width: 20rem;
    width: 90%;
    ${media.tablet`
     font-size:1.5rem;
    `}
  }
  .name {
    border: 3px solid #676a72;
    font-size: 2rem;
    width: 90%;
  }
  .ButtonDiv {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    width: 90%;
  }
  .Buttons {
    font-size: 2rem;
    background-color: #676a72;
    color : white;
    border-radius: 1rem;
    ${media.tablet`
     font-size:1.5rem;
    `}
  }
  .ButtonLink{
    color : white;
  }
`;
