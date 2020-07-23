import React from "react"
import { Container } from "../../style/Container_style"
import { Link } from "react-router-dom"
import { AlbumForm } from "./style/AlbumList_style"
import AlbumItemCom from "./AlbumItemCom"
import Selectyear from "../../common/Selectyear"
import { Icon } from "semantic-ui-react"

const AlbumList = () => {
  return (
    <Container>
      <AlbumForm>
        {/* 타이틀 바는 픽스드로 고정  */}
        <div className="titleBar">
          <h2 className="title">앨범</h2>
          <div className="flexgrow">
            <button >
              <Link className="buttonLink" to={`/Album/1/Write`}>
                <Icon link name="write"></Icon>
              </Link>
            </button>
            <button >
              <Link className="buttonLink" to={`/Album/1/Edit`}>
                <Icon link name="edit"></Icon>
              </Link>
            </button>
            {/* 셀렉트로 년도 선택   */}
            <Selectyear />
          </div>
        </div>
        {/* 앨범 아이템  */}
        <AlbumItemCom />
      </AlbumForm>
    </Container>
  )
}

export default AlbumList
