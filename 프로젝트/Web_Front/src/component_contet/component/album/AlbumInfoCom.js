import React from "react"
import { Link } from "react-router-dom"
import { AlbumInfoForm } from "./style/AlbumInfoCom_style"
import { Container } from "../../style/Container_style"
import ImageGallery from "react-image-gallery"
import { GalleryWrite } from "./style/AlbumWriteGallery_style"

const AlbumInfoCom = ({ match, imgs, albumDetail }) => {
  const images = imgs.map((img) => ({
    original: img,
    thumbnail: img,
  }))

  return (
    <Container>
      <AlbumInfoForm>
        {/* 헤더폼 */}
        <div className="titleBar">
          <button type="submit" className="backButton">
            <Link to={`/Album/${match.params.name}`}>뒤로가기</Link>
          </button>
          <button type="submit" className="backButton">
            <Link to={`/Album/${match.params.name}/Edit/${match.params.code}`}>편집</Link>
          </button>
          {/* 첨부 파일 버튼 */}
        </div>
        <div className="context">
          <div className="imageView">
            <GalleryWrite>
              <ImageGallery
                thumbnailPosition={"bottom"}
                showPlayButton={false}
                showFullscreenButton={false}
                items={images}
              />
            </GalleryWrite>
          </div>

          {/* 내용 넣는 폼 */}
          <div className="contentDiv">
            <pre>{albumDetail.AL_Content}</pre>
          </div>
        </div>
      </AlbumInfoForm>
    </Container>
  )
}

export default AlbumInfoCom
