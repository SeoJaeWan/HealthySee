import styled, { keyframes } from "styled-components"

export const PlanAddForm = styled.div`
  margin-top: 2rem;
  width: 100%;

  .titleForm {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .completeButton {
    font-size: 3rem;
  }

  .contentsForm {
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
  }
  .leftForm {
    margin: 0 1rem;
    width: 50%;
  }
  .searchForm {
    display: flex;
    justify-content: center;
  }

  .inputForm {
    width: 65%;
    height: 3rem;
  }

  .searchButton {
    font-size: 2rem;
    color: white;
    background-color: #676a72;
    margin: 0 1rem;
  }

  .itemForm {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: hidden;
    height: 48rem;
    border: 3px solid #676a72;
    overflow-y: scroll;
  }

  .selectItemForm {
    width: 50%;
    border: 3px #676a72 solid;
  }

  .rightForm {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .columnForm {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .rextTimeForm {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #676a72;

    margin: 0.5rem 0;
    height: 3rem;
    border: 3px solid #676a72;
  }
  h2 {
    margin: 0;
    color: white;
  }

  .resttimeInput {
    font-size: 2rem;
    text-align: center;
    margin: 0 0.5rem 0 1rem;
    width: 5rem;
    height: 90%;
  }
`

export const BackgroundForm = styled.div`
  background-color: ${(props) =>
    props.backcolor ? "rgba( 103, 106, 114, 0.3 )" : "rgba( 103, 106, 114, 0.1 )"};
  padding: 4px;
  width: 90%;
  overflow: hidden;
  overflow-y: scroll;
  height: 47.5rem;
`

export const ItemsForm = styled.div`
  user-select: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  padding: 16px;
  margin: 0 0 8px 0;
  height: 4rem;
  background-color: ${(props) => (props.backcolor ? "#5a5d63" : "#676a72")};

  h2 {
    margin: 0;
    width: 5rem;
    text-align: center;
    color: white;
  }
  dl {
    display: flex;
    align-items: center;
  }
  dt {
    color: white;
  }
  dd {
    margin-left: 12px;
    color: white;
  }
  input {
    text-align: center;
    width: 3rem;
  }
`
