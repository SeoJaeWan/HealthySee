import styled from "styled-components";

export const Container = styled.div`
  height: 400px;
  width: 70%;
  margin-left: 260px;

  .Item {
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .Board {
  }

  .Write {
    margin-right: 70px;
  }
  .Title {
    display: flex;
    color: #676a72;
    justify-content: space-between;
    font-size: 4rem;
    margin-left: 110px;
    margin-top: 70px;
  }
  .BoardForm {
    display: flex;
    /* height: 60vh; */
    width: 90%;
    font-size: 1rem;
    border: 5px solid #676a72;
    border-left: solid white;
    max-height: 100%;
    margin-left: 5%;
    &::before {
      content: "";
      position: static;
      margin: -1%;
      margin-top: -2.3%;
      display: block;
      border-radius: 50%;
      width: 50px;
      height: 58px;
      background: #676a72;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
      transition: 0.2s;
    }
  }
`;
