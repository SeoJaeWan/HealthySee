import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  position: fixed;
  display: flex;
  background-color: white;
  justify-content: space-between;
  z-index: 9999;
  width: 100%;
  border-bottom: 10px solid #676a72;
  .user {
    &:hover {
      color: #858994;
      cursor: pointer;
    }
  }
  .logout {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 1rem;
    &:hover {
      color: #858994;
      cursor: pointer;
    }
  }
  .Title {
    display: flex;
    justify-content: center;
    height:100%;
    align-items: center;
    margin-left: 5rem;
    margin-top: 0.65rem;
    margin-bottom: 0.65rem;
    font-size: 4rem;
    &:hover {
      color: #858994;
    }
    ${media.mobile`
    font-size:2.5rem;
    padding-top: 3%;
  align-items: center;
    justify-content: center;
    `}
  }
  .block {
    display: flex;
    ${media.mobile`
    text-align:center;
    display:block;
    `}
  }
  .Login {
    display: flex;
    width: 14rem;
    padding-top: 15px;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    ${media.mobile`
     font-size:1rem;
    margin-right: 2%;
    align-items: center;
    justify-content: center;

`}
  }
`;
export const Sticky = styled.div`
  position: sticky;
  z-index: 9999;
  width: 100%;
  height: 100px;
`;
