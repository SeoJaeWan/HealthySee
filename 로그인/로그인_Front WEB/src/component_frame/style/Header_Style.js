import styled from "styled-components"
import { media } from "../../ReactiveStyle/ReactiveStyle"

export const Sticky = styled.div`
  position: sticky;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100px;
  display: flex;
  background-color: white;
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
  .leftdiv {
    width: 50%;
  }
  .title {
    text-align: center;
    margin: auto;
    font-size: 4rem;
    &:hover {
      color: #858994;
    }
    ${media.mobile`
    font-size:2.5rem;
    padding-top: 3%;
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
    font-size:1rem;
    display:none;
    margin-right: 2%;
    align-items: center;
    justify-content: center;

    text-align:center;
    flex-wrap:wrap;
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
  position: absolute;
  top: 15rem;
  width: 250px;
  overflow: hidden;
  transition: all 1s;
  height: ${(props) => (props.isView ? "0px" : "500px")};
`
