import React from "react";
import { Container } from "../../style/Container_style";
import { Link } from "react-router-dom";
import { AlbumForm } from "./style/AlbumWrite_style";

const AlbumWrite = () => {
  return (
    <Container>
      <AlbumForm>
        <div className="titleBar">
          <button className="backButton">
            <Link to="/MyPage/Album">뒤로가기</Link>
          </button>
          <button className="addButton">완료</button>
        </div>
        <div className="titleForm">
          <div className="titleDiv">
            <div className="title">제목 :</div>
            <input className="titleInput" type="text" />
          </div>
        </div>
        <div className="titleBar">
          <input className="hidden" type="file" name="file" id="file" />
        </div>
        <div className="flex">
          <div className="imgDiv">
            <label className="inputIMG" htmlFor="file">
              이미지
            </label>
          </div>

          <textarea
            className="contentDiv"
            type="text"
            defaultValue="내용을 입력하세요"
          />
        </div>
      </AlbumForm>
    </Container>
  );
};

export default AlbumWrite;
