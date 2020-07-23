import styled from "styled-components";

export const MonthForm = styled.div`
  width: 95%;
  display: flex;
  position: sticky;
  margin-left: 10%;
  margin-top: 1%;
  height: 3.5rem;
  justify-content: space-between;
  font-size: 2rem;
  border: 5px solid #676a72;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left: none;
  border-bottom: none;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 1.23rem;
    right: -5.02px;
    order: 1;
    width: 3.7rem;
    height: 2.1rem;
    border-bottom: 5px solid #676a72;
    border-right: 5px solid #676a72;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-left: 5px solid #676a72;
  }
  .month {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2rem;
    margin-left: -2rem;
    width: 4rem;
    height: 4rem;
    background: #676a72;
    color: white;
    border-radius: 50%;
  }

  label {
    background-color: #676a72;
    text-align:center;
    padding-bottom:15px;
    order: 2;
    color: white;
    margin: 3px 3.4px 2px 0px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    z-index: 2;
    
    font-size: 2.5rem;
  }

`;
