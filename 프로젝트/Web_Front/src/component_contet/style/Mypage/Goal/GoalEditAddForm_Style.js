import styled from "styled-components";
import { media } from "../../../../ReactiveStyle/ReactiveStyle";

export const GoalEditAddForm = styled.div`
  font-size: 2rem;
  display: flex;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;
  .marginbox{
    width:1rem;
    margin-right:6%;
  }
  .InfoForm {
    display: flex;
    align-items: center;
    height: 5rem;
    margin: 1rem 0 1rem 0;
  }
  .TitleInfo {
    font-size: 1.5rem;
    max-width: 40rem;
    flex-grow: 1;
  }
  .CategoryForm {
    width: 100%;
    display: flex;
  }
  .Category {
    flex-grow: 1;
  }

  .MinUnit {
    font-size: 1.5rem;
    max-width: 40rem;
    flex-grow: 1;
  }
  .MaxUnit {
    font-size: 1.5rem;
    max-width: 40rem;
    flex-grow: 1;
  }
  input {
    height: 3rem;
    width: 50%;
    font: inherit;
    color: #676a72;
  }
  .AddButton {
    background-color: #676a72;
    color: white;
    border-radius: 50%;
    font-size: 2rem;
    margin-right:5%;
  }
`;
