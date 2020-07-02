import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const AlbumForm = styled.div`
  width: 100%;
  margin-top: 2rem;
  font-size: 2rem;
  .TitleBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .Title {
    font-size: 3rem;
    margin-left: 2rem;
  }
  .addbutton {
    margin-right: 3rem;
    font-size: 2rem;
  }
  .flexgrow {
    display: flex;
    flex-direction: column;
    text-align:center;
  }
  input{
    font-size:1.5rem;
    font:inherit;
    color:#676a72;
    width:63%;
    border:none;
  }
  .flex{
    margin-right: 1.5rem;
    align-items:center;
    justify-content:space-around;
    text-align:center;
    margin-top: 2rem;
    display:flex;
  }
`;
