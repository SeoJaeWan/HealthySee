import React, { Component } from "react"
import { HomeForm, Img, Home, ScrollDiv} from "../style/HomeCom_style.js"
import { Link } from "react-router-dom"
import ReactHelmet from "../../containers/common/ReactHelmet.js"

const HomeCom = () =>  {
    return (
      <>
      <ReactHelmet title="Health &amp; See"/>
        <HomeForm>
          <div className="leftCon">
            <h1 className="title">Health&amp;See</h1>
            <h2 className="title2">"나만의 작은 트레이너"</h2>
            <button type="button" className="startButton">
              <Link to="/Training/squat">시작하기</Link>
            </button>
            <ul className="lng">
              <li>
                <Img src={require("../../Images/Main/react-logo.png")} alt="" />
              </li>
              <li>
                <Img src={require("../../Images/Main/Ml5.png")} alt="" />
              </li>
              <li>
                <Img src={require("../../Images/Main/nodejs.png")} alt="" />
              </li>
              <li>
                <Img src={require("../../Images/Main/p5.png")} alt="" />
              </li>
            </ul>
          </div>
          <Home out="visible" src={require("../../Images/Login/H&S.png")} alt="" />
        </HomeForm>
      </>
    )
  
}

export default HomeCom
