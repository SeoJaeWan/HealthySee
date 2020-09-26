import React from "react"
import { AlbumItemForm, AlbumEdit } from "./style/AlbumItemCom_style"
import ImageGallery from "react-image-gallery"
import { Icon } from "semantic-ui-react"
import defaultImg from "../../../Images/defaultImg.jpg"

const AlbumItemCom = ({ albumItem, img, index, onClickEdit, onReadAlbum }) => {
  return (
    <>
      <AlbumItemForm>
        <div className="titleForm">
          {/* 시간  */}
          <h3>작성일 : {new Date(albumItem.AL_Creation_Date).toLocaleDateString()}</h3>
          {/* 댓글 수 */}
          <h3>댓글수 : </h3>
          {/* 편집버튼  */}
          <button type="submit" className="editButton" onClick={onClickEdit}>
            편집
          </button>
        </div>
        <div className="galleryItem">
          <img onClick={onReadAlbum} src={img[index]}></img>
        </div>
        <div className="commentsForm">
          {/* 댓글 ( 가장 처음 댓글 ) */}
          <dl>
            <dd className="writeContents">작성내용</dd>
            <dt className="writer">작성자</dt>
            <dd className="writeDate">작성일</dd>
          </dl>
        </div>
      </AlbumItemForm>
    </>
  )
}

export default AlbumItemCom
