import React from "react";
import { Container } from "../../style/Container_style";
import { Link } from "react-router-dom";
import { AlbumWriteForm } from "./style/AlbumWrite_style";
import ImageGallery from "react-image-gallery";
import { GalleryWrite } from "./style/AlbumWriteGallery_style";

const AlbumWrite = ({ match, images, onChange }) => {
  return (
    <>
      <Container>
        <AlbumWriteForm>
          {/* 헤더폼 */}
          <div className="titleBar">
            <button className="backButton">
              <Link to={`/Album/${match}`}>뒤로가기</Link>
            </button>
            <button className="addButton">완료</button>
          </div>
          {/* 첨부 파일 폼 */}
          <div className="fileForm">
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

            {/* 첨부 파일 이름 리스트  */}
            <dl>
              <dt>첨부 파일</dt>
              <div className="filenameform">
                <dd>파일명들 나올곳 </dd>
              </div>
            </dl>
          </div>

          <div className="context">
            {/* <div className="imageView">
              <GalleryWrite>
                <ImageGallery
                  thumbnailPosition={"bottom"}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  items={images}
                />
              </GalleryWrite>
            </div> */}

            {/* 내용 넣는 폼 */}
            <textarea
              className="contentDiv"
              type="text"
              defaultValue="내용을 입력하세요"
              onChange={onChange}
            />
          </div>
        </AlbumWriteForm>
      </Container>
    </>
  );
};

export default AlbumWrite;
