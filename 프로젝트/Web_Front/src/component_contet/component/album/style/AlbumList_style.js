import styled from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const AlbumForm = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  margin-left: 1rem;

  .titleBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .title {
    font-size: 3rem;
    margin-left: 2rem;
    ${media.mobile`
    font-size: 2rem;
    margin-left: 0rem;
    `}
  }
  .addButton {
    margin-right: 3rem;
    font-size: 2rem;
  }
  .flexgrow {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  input {
    font-size: 1.5rem;
    font: inherit;
    color: #676a72;
    width: 63%;
    border: none;
  }
  .flex {
    margin-right: 1.5rem;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    margin-top: 2rem;
    display: flex;
  }
  .sibal {
    width: 100px;
  }
`
export const Flex = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
`

export const ABC = styled.div`
  .menu-item {
    padding: 0 40px;
    margin: 5px 10px;
    user-select: none;
    cursor: pointer;
    border: none;
  }
  .menu-item-wrapper.active {
    border: 1px blue solid;
  }
  .menu-item.active {
    border: 1px green solid;
  }

  .scroll-menu-arrow {
    padding: 20px;
    cursor: pointer;
  }
`
