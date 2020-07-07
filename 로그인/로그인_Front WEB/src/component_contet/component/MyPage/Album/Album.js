import React from "react";
import { Container } from "../../../style/Container";
import { Link } from "react-router-dom";
import { AlbumForm } from "../../../style/Album/Album_Style";

import MonthCom from "./MonthCom";

const Album = () =>{
    return (
      <Container>
        <AlbumForm>
          <div className="TitleBar">
            <div className="Title">앨범</div>
            <div className="flexgrow">
              <button className="addbutton">
                <Link to={`/Mypage/Album/write`}>편집하기</Link>
              </button>
              <div className="flex">
                <input
                  type="number"
                  min="1900"
                  max="2099"
                  step="1"
                  defaultValue={2016}
                />
                년
              </div>
            </div>
          </div>
          <MonthCom />
        </AlbumForm>
      </Container>
    );
  
}

export default Album;
