import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  left: 10%;
  top: 5%;
`;
export const Frame = styled.div`
  position: relative;
  font-size: 2.5rem;
  margin-top: 2.5%;
  word-spacing: 8.6rem;
`;

export const Comflit = styled.button`
  background-color: #676a72;
  position: relative;
  font-size: 2rem;
  top: 10vh;
  left: 19.5%;
  color: white;
  font-family: "font";
  height: 4vh;
  width: 10%;
`;

export const OnOff = styled.div`
  position: absolute;
  top: -5%;
  left: 15.3%;
  font-size: 2.5rem;
  word-spacing: 8.6rem;
`;

export const NickButton = styled.button`
  background-color: #676a72;
  position: relative;
  font-size: 2rem;
  left: 10%;
  color: white;
  font-family: "font";
  height: 4vh;
  width: 10%;
`;
export const Input = styled.input`
  position: relative;
  width: 25%;
  left: 5%;
  box-shadow: 0px 3px 0px 0px #676a72;
  border: 0px;
`;

export const InputWeight = styled.input`
  box-shadow: 0px 3px 0px 0px #676a72;
  border: 0px;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 20%;
  left: 22%;
  width: 62px;
  height: 26px;
  border-radius: 15px;
  background: skyblue;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  position: relative;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: pink;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 40px;
      transition: 0.2s;
    }
  }
`;

export const Title = styled.div`
  position: absolute;
  height: 10vh;
  width: 30vh;
  left: 3%;
  top: 10%;
  font-size: 50pt;
  color: #676a72;
`;

export const Select = styled.select`
  width: 250px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 90%;
  left: 15%;
`;

export const Sign = styled.div`
  position: absolute;
  height: 60vh;
  width: 77%;
  top: 18%;
  color: #676a72;
  font-size: 20pt;
  border: 5px solid #676a72;
  border-left: solid white;
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
`;
