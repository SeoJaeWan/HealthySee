import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  position: relative;
  width:90%;
  height: 100vh;
`;

export const StartB = styled.button`
  position: relative;
  font-size: 3rem;
  width: 15%;
  top: 41%;
  height: 10%;
  font-family: "font";
  background-color: #676a72;
  border-color: #676a72;
  color: white;
  border-radius: 50%;
  left: 16%;
  ${media.mobile`
`}
`;

export const Lng = styled.div`
  position: absolute;
  left: 21.3%;
  top: 60%;
  width: 35%;
`;
export const Title = styled.p`
    position: absolute;
    top: 5%;
    left: 26%;
    font-weight:bold;
    color: #676a72;
    font-size: 4.5rem;
`
export const Start = styled.button`

`

export const Title2 = styled.p`
    position: absolute;
    top: 24%;
    left: 29%;
    font-weight:bold;
    color: #676a72;
    font-size: 2rem;
`
export const Home = styled.img`
  position: absolute;
  height: 53vh;
  top: 10%;
  right: 10%;
  ${media.mobile`
  display:none;
`}
`;

export const Img = styled.img`
  float: left;
  width: auto; height: auto;
  max-width: 100px;
  max-height: 100px;
  padding-left:5%;
  ${media.mobile`
  width: 50%;
  top:10%;
  left:25%;
`}
`