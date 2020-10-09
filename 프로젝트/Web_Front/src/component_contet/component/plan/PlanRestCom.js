import React from "react"
import { Container } from "../../style/Container_style"
import { PlanRestForm } from "./style/PlanRestCom_style"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const PlanRestCom = ({ onClick, planDetail }) => {
  const data = [
    { name: "1", Pose: 40, Set: 400, amt: 2400 },
    { name: "5", Pose: 40, Set: 400, amt: 2400 },
    { name: "10", Pose: 40, Set: 500, amt: 2400 },
  ]

  return (
    <>
      <Container>
        <PlanRestForm>
          <div className="titleFrom">
            <h1>세트 이름</h1>
            {/* 휴식시간은 시간이 지나면서 - 되게하려고함 */}
            <h2>휴식 시간 : 50s</h2>
          </div>
          <div className="flex">
            <div className="InfoForm">
              <h1>끝낸 운동명</h1>
              <dl>
                <dt>운동정보</dt>
                <dd>정보</dd>
              </dl>
              <dl>
                <dt>운동정보</dt>
                <dd>정보</dd>
              </dl>
              <dl>
                <dt>운동정보</dt>
                <dd>정보</dd>
              </dl>
              <dl>
                <dt>운동정보</dt>
                <dd>정보</dd>
              </dl>
              <ResponsiveContainer width="95%" height="50%">
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
              <div className="nextTraining">
                <h1>다음 운동 : 운동 명</h1>
                <video className="videoView" controls>
                  <source
                    src={require(`../../../Images/Excercise/squat/squat.mp4`)}
                    type="video/mp4"
                  />
                </video>
              </div>
              <h1> 남은 운동</h1>
              <div className="remainingExerciseForm">
                <dl className="remainingExercise">
                  <dt className="trainingName">운동명</dt>
                  <dd className="trainingCount"> 횟수</dd>
                </dl>
                <dl className="remainingExercise">
                  <dt className="trainingName">운동명</dt>
                  <dd className="trainingCount"> 횟수</dd>
                </dl>
                <dl className="remainingExercise">
                  <dt className="trainingName">운동명</dt>
                  <dd className="trainingCount"> 횟수</dd>
                </dl>
                <dl className="remainingExercise">
                  <dt className="trainingName">운동명</dt>
                  <dd className="trainingCount"> 횟수</dd>
                </dl>
                <dl className="remainingExercise">
                  <dt className="trainingName">운동명</dt>
                  <dd className="trainingCount"> 횟수</dd>
                </dl>
              </div>
            </div>
          </div>
        </PlanRestForm>
      </Container>
    </>
  )
}

export default PlanRestCom
