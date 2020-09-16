import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeField } from "../../modules/training/training"
import PoseInfoCom from "../../component_contet/component/pose/PoseInfoCom"
import PoseModal from "../../component_contet/common/Modal/PoseModal"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import CommentCom from "../../component_contet/component/training/comment/CommentCom"
import RatingModal from "../../component_contet/common/Modal/RatingModal"
import { readPose } from "../../modules/pose/pose"

const PoseInfoForm = ({ match, history }) => {
  let dispatch = useDispatch()
  const { poseItem } = useSelector(({ pose }) => ({
    poseItem: pose.poseItem,
  }))

  const { Pose } = match.params
  const [modal, setModal] = useState({
    poseModal: false,
    ratingModal: false,
  })

  const { poseModal, ratingModal } = modal

  const [count, setCount] = useState({
    poseCount: 0,
    ratingCount: 0,
  })

  const { poseCount, ratingCount } = count

  const onChangeModal = (setvisible) => {
    if (setvisible.poseModal === undefined) setModal({ ratingModal: !ratingModal })

    if (setvisible.ratingModal === undefined) setModal({ poseModal: !poseModal })
  }

  const onCancel = () => {
    setModal({ poseModal: false, ratingModal: false })
  }

 const onComplete = (count) => {
    setModal({ poseModal: false, ratingModal: false })
    return setCount({ poseCount: 0, ratingCount: count })
  }

  const onIncrease = (count) => {
    if (count === poseCount) {
      setCount({ poseCount: count + 1, ratingCount: 0 })
      count = poseCount
    }

    if (ratingCount < 5) {
      if (count === ratingCount) {
        setCount({ poseCount: 0, ratingCount: count + 1 })
        count = ratingCount
      }
    }
  }

  const onDecrease = (count) => {
    if (count > 0) {
      if (count === poseCount) {
        setCount({ poseCount: count - 1, ratingCount: 0 })
        count = poseCount
      }
      if (count === ratingCount) {
        setCount({ poseCount: 0, ratingCount: count - 1 })
        count = ratingCount
      }
    }
  }

  const onStartButton = () => {
    dispatch(changeField({ key: "routin", value: [Pose, count] }))
    history.push(`/Training/${Pose}`)
  }

  useEffect(() => {
    dispatch(readPose(Pose))
  }, [Pose, dispatch])

  return (
    <>
      {poseItem ? (
        <>
          <PoseInfoCom onChangeModal={onChangeModal} poseItem={poseItem} />
          <CommentCom onChangeRatingModal={onChangeModal} ratingCount={ratingCount} />
          <PoseModal
            visible={poseModal}
            poseCount={poseCount}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            title="스쿼트"
            onCancel={onCancel}
            onStartButton={onStartButton}
          />
          <RatingModal
            visible={ratingModal}
            ratingCount={ratingCount}
            onCancel={onCancel}
            onComplete={onComplete}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        </>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default withRouter(PoseInfoForm)
