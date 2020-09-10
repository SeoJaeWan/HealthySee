import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeField } from "../../../modules/training/training"
import PoseInfoCom from "../../../component_contet/component/training/pose/PoseInfoCom"
import PoseModal from "../../../component_contet/common/Modal/PoseModal"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import CommentCom from "../../../component_contet/component/training/comment/CommentCom"
import RatingModal from "../../../component_contet/common/Modal/RatingModal"

const PoseInfo = ({ match, history }) => {
  let dispatch = useDispatch()

  const [modal, setModal] = useState(false)
  const [ratingmodal, setRatingodal] = useState(false)
  const [number, setNumber] = useState(0)
  const [time, setTime] = useState(0)
  const [grades, setGrades] = useState(0)

  const onChangeModal = () => {
    setModal(!modal)
  }
  const onChangeRatingModal = () => {
    setRatingodal(!ratingmodal)
  }

  const numberUp = () => {
    return setNumber(number + 1)
  }

  const numberDown = () => {
    if (number > 0) return setNumber(number - 1)
  }
  // 이건 셋트 횟수
  const timeUp = () => {
    return setTime(time + 1)
  }

  const timeDown = () => {
    if (time > 0) return setTime(time - 1)
  }
  // 이건 운동 횟수
  const Start = () => {
    history.push("/Pose/Squat/Result")
  }

  useEffect(() => {
    dispatch(changeField({ key: "logging", value: false }))
  }, [dispatch])

  return (
    <>
      <PoseInfoCom onChangeModal={onChangeModal} />
      <CommentCom grades={grades} onChangeRatingModal={onChangeRatingModal} />
      <PoseModal
        visible={modal}
        number={number}
        time={time}
        numberUp={numberUp}
        numberDown={numberDown}
        timeUp={timeUp}
        timeDown={timeDown}
        title="스쿼트"
        onCancel={onChangeModal}
        Start={Start}
      />
      <RatingModal
        grades={grades}
        visible={ratingmodal}
        onCancel={onChangeRatingModal}
      ></RatingModal>
    </>
  )
}

export default withRouter(PoseInfo)
