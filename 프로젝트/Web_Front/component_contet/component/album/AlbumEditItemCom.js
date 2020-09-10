import React from "react"
import { AlbumEditItemForm } from "./style/AlbumEditItemCom_style"
import ImageGallery from "react-image-gallery"
import { Icon } from "semantic-ui-react"
import { GalleryItem } from "./style/AlbumItemGallery_style"
import defaultImg from "../../../Images/defaultImg.jpg"

const AlbumEditItemCom = () => {
  const images = [
    {
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ]

  return (
    <AlbumEditItemForm>
      <div className="titleForm">
        {/* 프사 나올곳 */}
        <div className="profileIMGForm">
          <img className="profileIMG" src={defaultImg} alt="" />
        </div>
        {/* 글 작성자 */}
        <h3>이름</h3>
        <h4>작성일자</h4>
        {/* 편집버튼  */}
        <button>
          <Icon name="ellipsis horizontal"></Icon>
        </button>
      </div>
      <div className="contentForm">
        {/* 본문 내용 */}
        <pre>작성 내용 </pre>
        {/* 이미지 미리보기 뷰 */}
      </div>
      <GalleryItem>
        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
      </GalleryItem>
      <div className="commentsForm">
        {/* 댓글 ( 추천수 가장 많은거 ) */}
        <p colSpan="2">댓글</p>
      </div>
    </AlbumEditItemForm>
  )
}

export default AlbumEditItemCom
