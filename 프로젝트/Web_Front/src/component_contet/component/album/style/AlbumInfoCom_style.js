import styled from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const AlbumInfoForm = styled.div`
  width: 100%;
  margin-top: 2rem;
  font-size: 2rem;
  .titleBar {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0 2rem 0;
    ${media.mobile`
    margin: 0rem 0 2rem 0;
    `}
  }

  .backButton {
    font-size: 2rem;
    margin-left: 4rem;
    ${media.mobile`
    margin-left: 1rem;
    `}
  }

  .addButton {
    margin-right: 3rem;
    font-size: 2rem;
    ${media.mobile`
    margin-right: 1rem;
    `}
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
    ${media.mobile`
    top: 45px;
    right: 10px;
    `}
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
  .editForm {
    border: 3px solid #676a72;
    display: flex;
    align-items: center;
    margin: 1rem 0 0 2rem;
    padding: 1rem;
    font-size: 1.5rem;
  }
  dd {
    padding-left: 1rem;
  }
  .deleteButton {
    font-size: 1.5rem;
    border-radius: 50%;
    color: white;
    background-color: #676a72;
    text-align: center;
    margin-left: 1rem;
  }
  .context {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .imageView {
    display: flex;
    align-items: center;
    height: 600px;
    width: 50%;
    ${media.mobile`
    width: 100%;
    height: 300px;
    `}
  }

  .contentDiv {
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
    ${media.mobile`
    width: 100%;
    height: 300px;
    margin: 1rem 0 2% 0;
    `}
  }
`
