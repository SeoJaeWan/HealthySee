import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  position: relative;
  margin-left: 16%;
  width: 68.5%;
  height: 100vh;
`;

export const StartB = styled.button`
  position: relative;
  font-size: 3rem;
  width: 15%;
  margin-top: 10%;
  height: 10%;
  font-family: "font";
  background-color: #676a72;
  border-color: #676a72;
  color: white;
  border-radius: 50%;
  margin-left: 24.5%;
  ${media.mobile`
`}
`;

export const Lng = styled.div`
  display: flex;
  width: 40%;
  margin-top: 5%;
  margin-left: 10.5%;
`;

export const Title = styled.p`
  position: relative;
  top: 15%;
  margin-left: 17.5%;
  font-weight: bold;
  color: #676a72;
  font-size: 4.5rem;
`;

export const Title2 = styled.p`
  position: relative;
  top: 10%;
  left: 21%;
  font-weight: bold;
  color: #676a72;
  font-size: 2rem;
`;
export const Home = styled.img`
  position: absolute;
  height: 53vh;
  top: 10%;
  right: 5%;
  ${media.mobile`
  display:none;
`}
`;

export const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 100px;
  max-height: 100px;
  padding-left: 5%;
  ${media.mobile`
  width: 50%;
  top:10%;
  left:25%;
`}
`;
