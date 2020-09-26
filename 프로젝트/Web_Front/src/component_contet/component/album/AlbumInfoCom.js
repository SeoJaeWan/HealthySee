import React from "react"
import { Link } from "react-router-dom"
import { AlbumInfoForm } from "./style/AlbumInfoCom_style"
import { Container } from "../../style/Container_style"
import ImageGallery from "react-image-gallery"
import { GalleryWrite } from "./style/AlbumWriteGallery_style"

const AlbumInfoCom = ({ match, onChange, onClick, field }) => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1024/1024/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1024/1024/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1024/1024/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1024/1024/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1024/1024/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ]
  return (
    <Container>
      <AlbumInfoForm>
        {/* 헤더폼 */}
        <div className="titleBar">
          <button className="backButton">
            <Link to={`/Album/${match.params}`}>뒤로가기</Link>
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
            <pre> </pre>
          </div>
        </div>
      </AlbumInfoForm>
    </Container>
  )
}

export default AlbumInfoCom
