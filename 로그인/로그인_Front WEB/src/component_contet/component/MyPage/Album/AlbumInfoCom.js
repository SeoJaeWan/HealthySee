import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AlbumInfoForm } from "../../../style/AlbumInfoCom_Style.js";

class AlbumInfoCom extends Component {
  render() {
    return (
      <AlbumInfoForm>
        <button className="AlbumInfo">이미지 나올곳</button>
        <button className="AlbumInfo">이미지 나올곳</button>
        <button className="AlbumInfo">이미지 나올곳</button>
        <button className="AlbumInfo">이미지 나올곳</button>       
        <button className="AlbumInfo">이미지 나올곳</button>
        <button className="AlbumInfo">이미지 나올곳</button>
        <button className="AlbumInfo">이미지 나올곳</button>
      </AlbumInfoForm>
    );
  }
}

export default AlbumInfoCom;
