import styled from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const AlbumWriteForm = styled.div`
  width: 100%;
  margin-top: 2rem;
  font-size: 2rem;
  .titleBar {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0 4rem 0;
  }

  .backButton {
    font-size: 2rem;
    margin-left: 4rem;
  }

  .addButton {
    margin-right: 3rem;
    font-size: 2rem;
  }

  .flex {
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-around;
  }

  .inputImg {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .fileButton {
    position: absolute;
    top: 60px;
    right: 10px;
  }
  .fileInput {
    font-family: none;
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .context {
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;
  }

  .imageView {
    display: flex;
    align-items: center;
    height: 600px;
    width: 50%;
  }

  textarea {
    margin: 1.8rem 0 0 2%;
    width: 40%;
    max-height: 500px;
    height: auto;
    font: inherit;
    border: none;
    resize: none;
    font-size: 20px;
    overflow: auto;
    padding: 8px;
    box-shadow: 0px 4px 10px -3px black;
  }
`
