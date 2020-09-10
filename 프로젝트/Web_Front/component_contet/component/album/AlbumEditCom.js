import React from "react"
import { Container } from "../../style/Container_style"
import { Link } from "react-router-dom"
import { AlbumEditForm } from "./style/AlbumEdit_style"
import MonthCom from "./MonthCom"
import Selectyear from "../../common/Selectyear"
import AlbumEditItemCom from "./AlbumEditItemCom"

const AlbumEditCom = () => {
  return (
    <Container>
      <AlbumEditForm>
        <div className="titleBar">
          <div className="title">앨범</div>
          <div className="flexgrow">
            <button className="addButton">
              <Link to={`/Album/1/`}>완료</Link>
            </button>
            <Selectyear />
          </div>
        </div>
      </AlbumEditForm>
      <MonthCom />
      <AlbumEditItemCom />
    </Container>
  )
}

export default AlbumEditCom
