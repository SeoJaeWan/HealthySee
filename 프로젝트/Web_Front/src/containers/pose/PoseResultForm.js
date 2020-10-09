import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PoseResultCom from "../../component_contet/component/pose/PoseResultCom"
import CommentCom from "../../component_contet/component/training/comment/CommentCom"
import RatingModal from "../../component_contet/common/Modal/RatingModal"
import { changeComment, readPose, writeReview } from "../../modules/pose/pose"

const PoseResultForm = ({ match }) => {
  let dispatch = useDispatch()
  const { poseItem, comment, user } = useSelector(({ pose, user }) => ({
    poseItem: pose.poseItem,
    comment: pose.comment,

    user: user.username,
  }))

  const data = [
    { name: "1", Pose: 40, Set: 400, amt: 2400 },
    { name: "5", Pose: 40, Set: 400, amt: 2400 },
    { name: "10", Pose: 40, Set: 500, amt: 2400 },
  ]

  const { Pose } = match.params

  const [modal, setModal] = useState(false)
  let [rating, setRating] = useState(0)

  const onChangeModal = (visible) => {
    setModal(!modal)
  }

  const onIncrease = () => {
    if (rating < 5) {
      rating++
      setRating(rating)
    }
  }
  const onDecrease = () => {
    if (rating > 0) {
      rating--
      setRating(rating)
    }
  }

  const onChangeValue = (e) => {
    console.log(e.target.value)
    dispatch(changeComment({ key: "content", value: e.target.value }))
  }

  const onWriteReview = () => {
    dispatch(writeReview({ rank: comment.rank, content: comment.content, name: Pose }))
  }

  useEffect(() => {
    dispatch(readPose(Pose))
  }, [Pose, dispatch])

  return (
    <>
      {poseItem ? (
        <>
          <PoseResultCom data={data} poseItem={poseItem} />
          <CommentCom
            onChangeModal={onChangeModal}
            comments={poseItem.comments}
            ratingModal={modal}
            ratingCount={rating}
            write={comment}
            onChangeValue={onChangeValue}
            onWriteReview={onWriteReview}
            user={user}
          />
          <RatingModal
            visible={modal}
            ratingCount={rating}
            onCancel={onChangeModal}
            onComplete={onChangeModal}
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

export default PoseResultForm
