import styled from "styled-components"

export const CheckBoxLabel = styled.label`
  position: relative;
  top: 0;
  right: 1%;
  width: 4rem;
  height: 2rem;
  border-radius: 50px;
  background-color: ${(props) => (props.check ?  "pink":"skyblue")};
  cursor: pointer;
  
  .pointerCursor{
    display: block;
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    margin: 5px;
    margin-left: ${(props) => (props.check ?  "2.5rem" : "3px" )};
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 0rem;
  height: 0px;
`
