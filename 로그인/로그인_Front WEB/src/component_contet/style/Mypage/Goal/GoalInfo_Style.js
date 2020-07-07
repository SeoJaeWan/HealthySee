import styled from "styled-components";
import { media } from "../../../../ReactiveStyle/ReactiveStyle";

export const GoalInFoForm = styled.div`
  font-size: 2rem;
  display: flex;
  margin-bottom: 1rem;
  margin-top: 1rem;
  .TitleInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    width: 30%;
  }
  .UnitInfo {
    width: 70%;
  }
  .Unitform {
    width: 100%;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .MinUnit {
  }
  .MaxUnit {
    padding-right: 4%;
  }
  progress {
    width: 95%;
    display: block;

    padding: 4px;
    border: 0 none;
    background: #676a72;
    border-radius: 14px;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
      0px 1px 0px rgba(255, 255, 255, 0.2);
  }
  progress::-webkit-progress-bar {
    background: transparent;
  }
  progress::-webkit-progress-value {
    border-radius: 12px;
    background: #fff;
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.4),
      0 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
