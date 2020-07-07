import React from "react";
import { Link } from "react-router-dom";
import { MonthForm } from "../../../style/Album/MonthCom_Style.js";
import AlbumInfo from "./AlbumInfoCom";

const MonthCom = () =>  {
    return (
      <>
        <MonthForm>
          <label className="Month">1월</label>
          <button ><Link className="PlusButton" to={`/Mypage/Album/write`}>+</Link></button>
        </MonthForm>
        <AlbumInfo />
      </>
    );
  
}

export default MonthCom;
