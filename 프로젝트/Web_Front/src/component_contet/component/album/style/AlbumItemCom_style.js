import styled from "styled-components"

export const AlbumItemForm = styled.table`
  width: 80%;
  margin: 0 auto;
  table-layout: fixed;
  height: 100%;
  border-collapse: separate;
  border: 3px solid #676a72;
  border-spacing: 10px 20px;

  thead {
    height: auto;
    height: 100px;
  }
  td {
    border: 3px solid #676a72;
  }
  th {
    border: 3px solid #676a72;
    width: 10rem;
    height: 100px;
    white-space: nowrap;
  }
  div {
    border: 3px solid #676a72;
    text-align:center;
    height: 5rem;
  }
  .albumInfo {
    width: 11vw;
    margin: 2% 2% 2% 2%;
    height: 16vw;
    border: 2px solid #676a72;
  }
`
