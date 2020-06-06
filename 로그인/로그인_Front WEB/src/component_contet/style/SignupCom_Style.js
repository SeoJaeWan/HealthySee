import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 1400px;
  margin-left: 260px;
  .Sign {
    margin-top: 5%;
    margin-left: 5%;
  }
  .Title {
    margin-left: 120px;
    font-size: 4rem;
    color: #676a72;
  }
  .SignForm {
    display: flex;
    height: 60vh;
    width: 90%;
    font-size: 50pt;
    border: 5px solid #676a72;
    border-left: solid white;
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

export const Form = styled.form`
  margin-top: 45px;
  margin-left: 85px;
`;
export const Frame = styled.div`
  display: flex;
  font-size: 2.5rem;
  margin-top: 7%;
  word-spacing: 4rem;
`;

export const Complete = styled.button`
  background-color: #676a72;
  font-size: 3rem;
  margin-top: 50px;
  margin-left: 200px;
  color: white;
  font-family: "font";
`;

export const OnOff = styled.div`
  top: -5%;
  left: 15.3%;
  font-size: 2.5rem;
  word-spacing: 8.6rem;
`;

export const NickButton = styled.button`
  background-color: #676a72;
  font-size: 2rem;
  left: 10%;
  color: white;
  font-family: "font";
  height: 4vh;
  width: 10%;
`;
export const Input = styled.input`
  width: 250px;
  margin-left: 110px;
  box-shadow: 0px 3px 0px 0px #676a72;
  border: 0px;
`;

export const InputWeight = styled.input`
  box-shadow: 0px 3px 0px 0px #676a72;
  border: 0px;
`;

export const CheckBoxLabel = styled.label`
  top: 20%;
  left: 22%;
  margin-top: 10px;
  margin-left: -200px;
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

export const CheckBox1 = styled.input`
  opacity: 0;
  z-index: 1;
  margin-left: 25px;
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

export const CheckBox2 = styled.input`
  opacity: 0;
  z-index: 1;
  margin-left: -15px;
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
