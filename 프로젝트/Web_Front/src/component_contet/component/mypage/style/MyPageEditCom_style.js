import styled from "styled-components";

import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle";
export const InfCom = styled.div`
  width: 100%;
  margin-top: 2rem;

  .editButton {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2rem;
    margin: 0 2rem 2rem 0;
    ${media.mobile`
    margin: 0 0 2rem 0;
    `}
  }

  .flex {
    display: flex;
    justify-content: space-around;

    ${media.tablet`
     flex-wrap:wrap;
    justify-content: center;
    `}
  }

  h1 {
    font-weight: normal;
    font-size: 2rem;
  }

  .toggleDiv {
    display: flex;
    justify-content: space-around;

    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 3rem;
    align-items: center;
    ${media.mobile`
    font-size:1.5rem;
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

  .imgBox {
    height: 250px;
    width: 250px;
    object-fit: none;

    border: 3px solid #676a72;
  }

  .imgDiv {
    margin-left: 50%;
    margin-top: 50%;

    transform: translate(-50%, -50%);
  }

  .rightDiv {
    display: flex;
    flex-wrap: wrap;

    margin: 0;
    padding: 0;
    height: 80%;
    width: 50%;
    ${media.tablet`
     width:100%;
    `}
  }

  ul {
    font-size: 2rem;
  }

  li {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    width: 45%;
  }

  .contents {
    display: flex;
    border: 3px solid #676a72;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #676a72;
    font: inherit;
    height: 3rem;
    align-items: center;
    ${media.mobile`
    font-size:1rem;
    `}
  }

  .inputIMG {
    display: inline-block;
    padding: 0.5em 0.75em;
    color: #999;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
  }

  .hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
