import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  border-bottom: 10px solid #676a72;

  .menu {
    margin-top:13px;
    margin-left:25px;
    font-size: 2.5rem;
    font-family: "font";
    width:5rem;
    height: 3rem;
    background-color: #676a72;
    color: white;
    border-radius: 10%;
    ${media.mobile`
  `}
  }
  .Title {
    font-size: 4rem;
    ${media.mobile``}
  }
  .Login {
    padding-right:20px;
    padding-top:15px;
    font-size: 2.5rem;
    ${media.mobile`
  margin-top: 0.5rem;
  font-size:5pt;

`}
  }
`;
