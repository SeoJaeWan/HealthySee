import styled from "styled-components";
import { media } from "../../../../ReactiveStyle/ReactiveStyle";

export const ReadComForm = styled.div`
  .topButton {
    width: 98%;
    display: flex;
    justify-content: space-between;
    margin-left: 7%;
    margin-top: 3%;
    ${media.mobile`
margin-top: 10%;  `}
  }
  .exitButton {
    background-color: white;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    border: 0px white;
    color: #676a72;
    font-size: 3rem;

    ${media.mobile`
  font-size: 1.5rem;
  `}
  }
  .titleForm {
    display: flex;
    width: 100%;
    font-size: 2rem;
    margin-top: 20px;
    margin-left: 2%;
    ${media.mobile`
  font-size: 1.5rem;
  `}
    border: 5px solid #676a72;
    border-left: solid white;
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
      margin-top: -20px;
      width: 30px;
      height: 40px;
  `}
    }
  }
  .title {
    min-width: 5rem;
    padding: 14px 8px 14px 14px;
    ${media.mobile`
    min-width: 4rem;
  `}
  }
  .titleContent {
    margin: 0;
    padding: 14px 3px 14px 2px;
    width: 63vw;
  }
  .titleButton {
    padding-top: 1%;
    margin-right: 2%;
  }

  .contentForm {
    width: 100%;
    font-size: 3rem;
    margin-top: 50px;
    margin-left: 2%;
    ${media.mobile`
  font-size: 1rem;
  `}
    border: 5px solid #676a72;
    border-left: solid white;
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
      margin-top: -20px;
      width: 30px;
      height: 40px;
  `}
    }
  }
  .flex {
    margin: 0.5rem 0;
    display: flex;
  }
  .fileForm {
    overflow: hidden;
    display: flex;
    margin: 0;
    font-size: 2rem;
    width: 100%;
  }
  pre {
    white-space: pre-wrap;
    word-break: break-all;

    min-height: 15rem;
    margin: 1rem 0rem 0rem 1rem;
    font-size: 2rem;

    ${media.mobile`
    margin-left: 3%;
  `}
  }

  .fileForm {
    display: flex;
    flex-direction: row-reverse;
  }

  .fileText {
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  .file {
    font-size: 2rem;
    border: 3px solid #676a72;
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 1px 0;
    cursor: pointer;
  }
  .filebutton {
    font-family: none;
  }
`;
export const FilewViewInfo = styled.div`
  position: absolute;
  width:250px;
  
  right: 2.2%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 1s;
  height: ${(props) => (props.isView ? "0px" : "150px")};
  transform: translateX(-100%);
  ${media.board` 
  right: 6%;
`}
  ${media.desktop`
  right: -220px;
  `}
  ${media.mobile`
  
  width:150px;
  right: -120px;
  `}
`;
