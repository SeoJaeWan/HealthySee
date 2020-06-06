import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  height: 100%;
  width: 50%;
  margin-left: 260px;

  .Main {
    margin-left: 35%;
    margin-top: 100px;
  }
  .Title {
    display: flex;
    font-weight: bold;
    color: #676a72;
    font-size: 4.5rem;
    margin-top: 40px;
  }
  .Con {
    display: flex;
  }
  .leftCon {
    display: flex;
    flex-direction: column;
  }
  .rightCon {
    display: flex;
    flex-direction: column;
  }
  .Title2 {
    margin-top: 50px;
    margin-left: 50px;
    font-weight: bold;
    color: #676a72;
    font-size: 2rem;
  }

  .StartB {
    font-size: 3rem;
    width: 200px;
    height: 100px;
    font-family: "font";
    background-color: #676a72;
    border-color: #676a72;
    color: white;
    border-radius: 50%;
    margin-top: 50px;
    margin-left: 95px;
    ${media.mobile`
`}
  }
  .Lng {
    display: flex;
    width: 40%;
    margin-top: 50px;
    margin-left: -90px;
  }
`;

export const Home = styled.img`
  margin-left: 55px;
  ${media.mobile`
  display:none;
`}
  ${media.half`
  display:none;
  `}
`;

export const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 100px;
  max-height: 100px;
  padding-left: 25px;
  ${media.mobile`
  width: 50%;
  top:10%;
  left:25%;
`}
`;
