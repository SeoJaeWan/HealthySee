import styled from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const AlbumItemForm = styled.div`
  width: 45%;
  margin: 1rem auto;
  position: relative;
  table-layout: fixed;
  height: 100%;
  border-collapse: separate;
  border: 3px solid #676a72;
  border-spacing: 10px 20px;
  ${media.mobile`
  width: 100%;
    `}

  .titleForm {
    border-bottom: 3px solid #676a72;
    position: relative;
    display: flex;
    align-items: center;
  }
  h3 {
    margin: 1rem;
    ${media.mobile`
    font-weight:normal;
    `}
  }
  .editButton {
    position: absolute;
    right: 5px;
    font-size: 2rem;
    background-color: rgb(0, 0, 0, 0);
    ${media.mobile`
    font-size: 1.5rem;
    `}
  }

  .commentsForm {
    padding: 5px;
    border-top: 3px solid #676a72;
  }

  .galleryItem {
    height: 25rem;
    margin: 1rem;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
  }
  dl {
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    margin: 0.5rem auto;
  }
  .writeContents {
    width: 60%;
    padding-left: 0.5rem;
  }
  .writer {
    text-align: center;
    width: 20%;
  }
  .writeDate {
    text-align: center;
    width: 20%;
  }
`
