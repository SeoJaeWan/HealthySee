import React from "react"
import { Container } from "../../style/Container_style"
import { Link } from "react-router-dom"
import { AlbumForm } from "./style/AlbumWrite_style"
import { Icon } from "semantic-ui-react"

const AlbumWrite = () => {
  return (
    <Container>
      <AlbumForm>
        {/* 헤더폼 */}
        <div className="titleBar">
          <button className="backButton">
            <Link to="/MyPage/Album">뒤로가기</Link>
          </button>
          <button className="addButton">완료</button>
        </div>
        {/* 첨부 파일 폼 */}
        <div className="fileForm">
          {/* 첨부 파일 버튼 */}
          <label className="inputIMG" htmlFor="file">
            <Icon link name="file image" />
          </label>
          <input className="hidden" type="file" name="file" id="file" />
          {/* 첨부 파일 이름 리스트  */}
          <dl>
            <dt>첨부 파일:</dt>
            <dd>파일명들 나올곳 </dd>
          </dl>
        </div>
        {/* 내용 넣는 폼 */}
        <div>
          <div></div>

          <textarea className="contentDiv" type="text" defaultValue="내용을 입력하세요" />
        </div>
      </AlbumForm>
    </Container>
  )
}

export default AlbumWrite
