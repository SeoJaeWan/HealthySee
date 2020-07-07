import React from "react";
import { Container } from "../../../style/Container";
import { Link } from "react-router-dom";
import { AlbumForm } from "../../../style/Album/AlbumWrite_Style";

const AlbumWrite = () =>  {
    return (
      <Container>
        <AlbumForm>
          <div className="TitleBar">
            <button className="backbutton"><Link to="/Mypage/Album">뒤로가기</Link></button>
            <button className="addbutton">완료</button>
          </div>
          <div className="Titleform">
            <div className="Titlediv">
              <div className="Title">제목 :</div>
              <input className="Titleinput" type="text" />
            </div>
          </div>
          <div className="TitleBar">
            <input className="hidden" type="file" name="file" id="file" />
          </div>
          <div className="flex">
            <div className="Imgdiv">
              <label className="InputIMG" htmlFor="file">
                이미지
              </label>
            </div>

            <textarea
              className="Contentdiv"
              type="text"
              defaultValue="내용을 입력하세요"
            />
          </div>
        </AlbumForm>
      </Container>
    );
  
}

export default AlbumWrite;
