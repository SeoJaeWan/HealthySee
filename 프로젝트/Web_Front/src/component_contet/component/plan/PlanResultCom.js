import React from "react"
import { Container } from "../../style/Container_style"
import { PlanResultForm } from "./style/PlanResultCom_style"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { Link } from "react-router-dom"

const PlanResultCom = ({ onClick, planDetail, match }) => {
  const data = [
    { name: "1", Pose: 40, Set: 400, amt: 2400 },
    { name: "5", Pose: 40, Set: 400, amt: 2400 },
    { name: "10", Pose: 40, Set: 500, amt: 2400 },
  ]

  return (
    <>
      <Container>
        <PlanResultForm>
          <div className="titleFrom">
            <Link to={`/Plan`}>처음으로</Link>
            <Link to={`/Plan/${match.params.PlanName}/Info`}>다시하기</Link>
          </div>
          <div className="flex">
            {/* 처음값은 가장 처음 했던 운동을 기준으로 보여주고 
              그다음엔 세트에 있는거 누르면 보이게 */}
            <div className="InfoForm">
              <h1>운동명</h1>
              <dl>
                <dt>횟수</dt>
                <dd>정보</dd>
              </dl>
              <dl>
                <dt>걸린시간</dt>
                <dd>정보</dd>
              </dl>
              <dl>
                <dt>틀린횟수</dt>
                <dd>정보</dd>
              </dl>
              <ResponsiveContainer width="95%" height="60%">
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
            <div className="trainingForm">
              <h1 className="planName">세트명</h1>
              <div className="planExercise">
                {/* 여기있는 운동명을 누르면 그에 맞는 정보가 보이게 */}
                <dl className="remainingExercise">
                  <dt className="trainingName">운동명</dt>
                  <dd className="trainingCount"> 횟수</dd>
                </dl>
              </div>
            </div>
          </div>
        </PlanResultForm>
      </Container>
    </>
  )
}

export default PlanResultCom
