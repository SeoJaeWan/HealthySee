import React from "react"
import { PoseItemForm } from "./style/PoseItemCom_style"

const PoseItemCom = ({ onClick, pose }) => {
  const { EX_Name, EX_KO_Name, Review_Count, Review_AVG } = pose
  return (
    <>
      <PoseItemForm onClick={() => onClick(EX_Name)}>
        {console.log(pose, EX_KO_Name)}
        <div className="titleFrom">
          <img
            className="profileIMG"
            src={require(`../../../Images/Excercise/${EX_Name}/${EX_Name}thumnail.jpg`)}
          ></img>
          <dl>
            <dt>{EX_KO_Name}</dt>
            <dd>&#9734; : {Review_AVG}</dd>
            <dd>리뷰 : {Review_Count}</dd>
          </dl>
        </div>
        <div className="content">
          <img
            className="contextIMG"
            src={require(`../../../Images/Excercise/${EX_Name}/${EX_Name}.jpg`)}
          />
        </div>
      </PoseItemForm>
    </>
  )
}

export default PoseItemCom
