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
  top:2%;
  font-family: "font";
  background-color: #676a72;
  color: white;
  border-radius: 10%;
  left: 1%;
  ${media.mobile`
`}
`;

export const Title = styled.div`
  position:relative;
  left:40%;
  width:1%;
  font-size: 4rem;
  ${media.mobile`
  width: 10%;
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
