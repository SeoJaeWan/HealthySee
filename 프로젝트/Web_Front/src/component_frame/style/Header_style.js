import styled from "styled-components"
import { media } from "../../lib/ReactiveStyle/ReactiveStyle"

export const Sticky = styled.div`
  z-index: 15;
  position: sticky;
  width: 100%;
  height: 100px;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  border-bottom: 10px solid #676a72;

  .user {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 2.5rem;
    &:hover {
      color: #858994;
      cursor: pointer;
    }

    ${media.desktop`
      font-size:1.5rem;
    
    `}
  }

  .logout {
    padding-top: 10px;
    font-size: 1rem;
    &:hover {
      color: #858994;
      cursor: pointer;
    }
    ${media.mobile`
      font-size:0.8rem;
    
    `}
  }

  .title {
    text-align: center;
    margin: auto;
    padding-left: 12%;
    font-size: 4rem;
    &:hover {
      color: #858994;
    }
    ${media.mobile`
    font-size:2.5rem;
    margin-right:15%;
    `}
    ${media.desktop`
    font-size:2.5rem;
    padding-left: 2%;
    `}
  }

  .login {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20%;
    padding-top: 15px;

    font-size: 1.5rem;

    ${media.desktop`
    display:flex;
    flex-direction:column;
    `}
    ${media.mobile`
    display:none;
    `}
  }
  .menuButton {
    font-size: 3rem;
    ${media.mobile`
    font-size:1.5rem;
    `}
  }
`

export const MenuForm = styled.div`
  position: fixed;
  z-index: 3;
  width: 250px;
  overflow: hidden;
  transition: all 1s;
  background-color: #aeb0b7;
  height: ${(props) => (props.isView ? "0px" : "100%")};
  top: 0;
  ${media.mobile`
  width: 160px;
  `}
`

export const MenuOutside = styled.div`
  position: absolute;
  top: 0rem;
  width: 100%;
  z-index: 1;
  height: 588.2vh;
  background-color: rgba(104, 107, 114, 0.2);
  display: ${(props) => (props.isView ? "none" : "block")};
`

export const MenuButton = styled.button`
  font-size: 3rem;
  margin-left: 60px;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.5s;
  position: ${(props) => (props.scrollY >= 100 ? "fixed" : "none")};
  z-index: 11;
  cursor: pointer;
  top: ${(props) => (props.scrollY >= 100 ? "30px" : "0px")};

  ${media.mobile`
  font-size: 1.5rem;
  margin-left: 15px;
  `}
`
