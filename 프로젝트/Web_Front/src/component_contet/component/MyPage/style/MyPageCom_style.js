import styled from "styled-components";
import { media } from "../../../../ReactiveStyle/ReactiveStyle";

export const InfCom = styled.div`
  width: 100%;
  margin-top: 2rem;

  .rowReverse {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2rem;
  }

  .editButton {
    display: flex;
    flex-direction: row-reverse;

    font-size: 2rem;
    margin: 0 2rem 2rem 0;
  }

  .flex {
    display: flex;
    justify-content: space-around;

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

  h1 {
    font-weight: normal;
  }

  .title {
    font-size: 2rem;
  }

  .imgDiv {
    border: 3px solid #676a72;
    height: 32vw;
    width: 18vw;
    min-height: 22.3rem;
    min-width: 14rem;
    max-width: 15rem;
    max-height: 22.3rem;
  }

  .publicDiv {
    font-size: 2rem;
  }

  .rightDiv {
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;

    height: 80%;
    width: 50%;
    ${media.tablet`
     width:100%;
    `}
  }

  dl {
    margin: 0;
    font-size: 1.5rem;
    width: 50%;

    min-width: 10rem;
  }

  .contents {
    display: flex;
    align-items: center;

    border: 3px solid #676a72;
    margin: 0.5rem;
    height: 3rem;
  }

  .contentsTitle {
    flex-grow: 1;
    margin-left: 1.5rem;
  }

  .name {
    border: 3px solid #676a72;
    font-size: 2rem;
    width: 90%;
  }

  .buttonDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-top: 2rem;
    width: 100%;
  }

  .buttons {
    font-size: 2rem;
    background-color: #676a72;
    padding: 10px 15px;
    color: white;
    border-radius: 0.5rem;
    ${media.tablet`
     font-size:1.5rem;
    `}
  }

  .buttonLink {
    color: white;
  }
`;
