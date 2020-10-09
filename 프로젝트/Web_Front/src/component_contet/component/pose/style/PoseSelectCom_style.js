import styled, { keyframes } from "styled-components"

export const PoseSelectForm = styled.div`
  margin-top: 4rem;
  width: 100%;

  .TitleForm {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .ItemForm {
    display: flex;
    flex-wrap: wrap;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
  }
  .searchInput {
    height: 3rem;
    width: 80%;
  }
  .searchButton {
    font-size: 2rem;
    height: 3rem;
    background-color: #676a71;
    color: white;
  }
`
