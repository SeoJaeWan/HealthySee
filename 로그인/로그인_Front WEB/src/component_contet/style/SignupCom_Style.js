import styled from "styled-components";


export const Form = styled.form`
    position: relative;
    left:10%;
    top: 5%;
`

export const CheckBoxLabel = styled.label`
  width: 42px;
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

export  const CheckBox = styled.input`
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
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const Title = styled.div`
  position: absolute;
  height: 10vh;
  width:30vh;
  left: 3%;
  top:10%;
  font-size:50pt;
  color: #676A72;
`

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
  width:77%;
  top:18%;
  color: #676a72;
  font-size:20pt;
  border: 5px solid #676A72;
  border-left: solid white;
  &::before {
    content: "";
    position: static;
    margin: -1%;
    margin-top:-2.3%;
    display: block;
    border-radius: 50%;
    width: 50px;
    height: 58px;
    background: #676a72;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`