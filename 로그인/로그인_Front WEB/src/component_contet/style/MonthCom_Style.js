import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const MonthForm = styled.div`
  width: 95%;
  display: flex;
  position: sticky;
  margin-left: 2rem;
  margin-top: 3rem;
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
    width: 3.43rem;
    height: 2rem;
    border-bottom: 5px solid #676a72;
    border-right: 5px solid #676a72;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-left: 5px solid #676a72;
  }
  .Month {
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

  button {
    background-color: #676a72;
    order: 2;
    color: white;
    margin: 2px;
    width: 3rem;
    height: 3rem;
    margin-right:3px;
    border-radius: 50%;
    z-index:999;
    font-size: 3rem;
  }
  .PlusButton{
    color:white;
  }
`;
