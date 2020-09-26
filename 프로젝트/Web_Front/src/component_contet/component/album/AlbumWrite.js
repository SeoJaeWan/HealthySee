import React from "react"
import { Container } from "../../style/Container_style"
import { Link } from "react-router-dom"
import { AlbumWriteForm } from "./style/AlbumWrite_style"
import ImageGallery from "react-image-gallery"
import { GalleryWrite } from "./style/AlbumWriteGallery_style"

const AlbumWrite = ({ match, onChange, onClick, field }) => {
  const { content, scope, img } = field
  return (
    <>
      <Container>
        {console.log(img)}
        <AlbumWriteForm>
          {/* 헤더폼 */}
          <div className="titleBar">
            <button className="backButton">
              <Link to={`/Album/${match.params.name}`}>뒤로가기</Link>
            </button>
            <button className="addButton" onClick={onClick}>
              완료
            </button>
            {/* 첨부 파일 버튼 */}
            <div className="fileButton">
              <label className="inputImg" htmlFor="file">
                첨부 하기 &nbsp;
              </label>
              <label className="fileInput" htmlFor="file">
                &#8626;
              </label>
              <input
                className="hidden"
                id="file"
                type="file"
                name="file"
                multiple
                onChange={onChange}
              />
            </div>
          </div>
          {/* 이거는 편집일때 나오게 하는거 */}
          <dl className="editForm">
            <dt>파일명 :</dt>
            <dd>파일명 나오게</dd>
            <button type="submit" className="deleteButton">
              X
            </button>
          </dl>
          <div className="context">
            <div className="imageView">
              <GalleryWrite>
                <ImageGallery
                  thumbnailPosition={"bottom"}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  items={img}
                />
              </GalleryWrite>
            </div>

            {/* 내용 넣는 폼 */}
            <textarea className="contentDiv" type="text" value={content} onChange={onChange} />
          </div>
        </AlbumWriteForm>
      </Container>
    </>
  )
}

export default AlbumWrite
