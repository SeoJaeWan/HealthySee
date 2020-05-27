import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 10px solid #676a72;
`;

export const Menu = styled.button`
  position: absolute;
  font-size: 20pt;
  width: 5%;
  height: 5%;
  font-family: "font";
  background-color: #676a72;
  color: white;
  border-radius: 10%;
  left: 1%;
  ${media.mobile`
`}
`;

export const Title = styled.img`
  position:relative;
  left:30%;
  width: auto; height: auto;
  max-width: 500px;
  max-height: 500px;
  ${media.mobile`
  width: 50%;
  top:10%;
  left:25%;
`}
`;

export const Login = styled.div`
  position: absolute;
  font-size: 20pt;
  top: 3.5%;
  right: 3%;
  ${media.mobile`
  margin-top: 0.5rem;
  font-size:5pt;

`}
`;
