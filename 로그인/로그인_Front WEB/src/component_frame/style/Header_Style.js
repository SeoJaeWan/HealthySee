import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-bottom: 10px solid #676a72;
`;

export const Element = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80px;
  font-size: 15pt;
  display: flex;
  flex-flow: row wrap;
`;

export const Shortcut = styled.div`
  order: 1;
  width: 100%;
  height: 30px;
  margin-top: 10px;
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
`;

export const Title = styled.div`
  position: absolute;
  right: 40%;
`;

export const Login = styled.div`
  position: absolute;
  top: 3.5%;
  right: 3%;
`;
