import React from "react"
import { Container } from "../../style/Container_style"
import IMG from "../../../Images/defaultImg.jpg"
import { Link } from "react-router-dom"
import { PoseResultForm } from "./style/PoseResultCom_style"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const PoseResultCom = ({ data, poseItem }) => {
  const { EX_KO_Name, EX_Description, EX_Name } = poseItem.exercise
  const { Review_Count, Review_AVG } = poseItem.exerciserate

  return (
    <>
      <Container>
        <PoseResultForm>
          <div className="topButton">
            <Link to="/Pose">처음으로</Link>
            <Link to={`/Pose/${EX_Name}/`}>다시하기</Link>
          </div>
          <div className="flex">
            <div className="leftForm">
              <div className="titleFrom">
                <img
                  className="profileIMG"
                  src={require(`../../../Images/Excercise/${EX_Name}/${EX_Name}thumnail.jpg`)}
                ></img>
                <dl className="infoForm">
                  <dt>{EX_KO_Name}</dt>
                  <dd>&#9734; : {Review_AVG}</dd>
                  <dd>리뷰 : {Review_Count}</dd>
                </dl>
              </div>
              <dl className="trainingform">
                <dt className="trainingContext">횟수</dt>
                <dd className="trainingInfo">14</dd>
              </dl>
              <dl className="trainingform">
                <dt className="trainingContext">걸린시간</dt>
                <dd className="trainingInfo">5s</dd>
              </dl>
              <dl className="trainingform">
                <dt className="trainingContext">틀린횟수</dt>
                <dd className="trainingInfo">2회</dd>
              </dl>
            </div>

            <div className="rightForm">
              <ResponsiveContainer width="95%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="Pose" stroke="#8884d8" />
                  <Line type="monotone" dataKey="Set" stroke="#82ca9d" />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </PoseResultForm>
      </Container>
    </>
  )
}

export default PoseResultCom
