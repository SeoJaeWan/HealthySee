import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MonthForm } from "../../../style/MonthCom_Style.js";
import AlbumInfo from "./AlbumInfoCom";

class MonthCom extends Component {
  render() {
    return (
      <>
        <MonthForm>
          <label className="Month">1월</label>
          <button>+</button>
        </MonthForm>
        <AlbumInfo />
      </>
    );
  }
}

export default MonthCom;
