import styled from "styled-components"

export const AlbumItemForm = styled.div`
  width: 45%;
  margin: 2rem auto;
  table-layout: fixed;
  height: 100%;
  border-collapse: separate;
  border: 3px solid #676a72;
  border-spacing: 10px 20px;

  .titleForm {
    border: 3px solid #676a72;
    display: flex;
  }

  .profileIMGForm {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }

  .profileIMG {
    width: 60px;
    height: 60px;
  }

  .contentForm {
    border: 3px solid #676a72;
    margin-top: 20px;
    padding: 20px;
  }

  .albumInfo {
    border: 3px solid #676a72;
    width: 11vw;
    margin: 2% 2% 2% 2%;
    height: 16vw;
    border: 2px solid #676a72;
  }

  .commentsForm {
    padding: 5px;
    border: 3px solid #676a72;
  }
`
