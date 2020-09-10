import styled, { keyframes } from "styled-components"
import { media } from "../../lib/ReactiveStyle/ReactiveStyle"

export const MenuInfo = styled.menu`
  font-size: 2rem;
  list-style-type: none;
  z-index: 15;
  margin: 120px 0 0 0;
  background-color: rgba(255, 255, 255, 0);
  text-align: center;
  padding: 0;

  ${media.mobile`
    margin: ${(props) => (props.scrollY >= 100 ? "80px 0 0 0" : "120px 0 0 0")};
  `}

  .userBox {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }
  dl {
    display: flex;
    align-items: center;
    justify-content: space-around;

    border: 2px solid #676a72;

    width: 80%;
    margin: 0px 10px;
    padding: 10px;
  }
  dt {
    font-size: 1.5rem;
    width: 30%;
    ${media.mobile`
    font-size: 1rem;
    `}
  }
  .userButton {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .userForm {
    padding: 0;
    margin: 0;
    width: 60%;
  }
  .logoutButton {
    position: relative;
    font-size: 1.5rem;
    width: 40%;
    margin: 0;
    ${media.mobile`
    font-size: 1rem;
    width: 45%;
    `}
  }
  .linkbutton {
    color: #676a72;
    background-color: rgba(255, 255, 255, 0);
  }

  button {
    background-color: rgba(255, 255, 255, 0);
    font-size: 2.5rem;
    margin: 1rem 0;
    ${media.mobile`
    font-size: 1.5rem;
  `}
  }

  input {
    width: 60%;
    height: 2rem;
    ${media.mobile`
    width: 70%;
    `}
  }

  .saerchList {
    margin: 1rem 0;
    padding-left: 0.8rem;
    ${media.mobile`
    font-size: 0.8rem;
    margin: 1rem 0.2rem;
    padding-left: 0;
  `}
  }

  .searchButton {
    margin: 0;
    background-color: #676a72;
    color: white;
    border: none;
    margin: 0 0.5rem;
    font-size: 2rem;
    ${media.mobile`
    width:2.5rem;
    font-size: 0.8rem;
    margin: 0 0.2rem;
  `}
  }
  form {
    display: flex;
    justify-content: center;
  }
`

const slideInTop = keyframes`
  
  0% {   
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const UserButton = styled.div`
  display: ${(props) => (props.scrollY >= 100 ? "block" : "none")};
  animation: ${slideInTop} 0.5s;
  ${media.mobile`
     display:block;
  `}
`
