import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { changeField } from "../../modules/training/training"
import RatingModal from "../../component_contet/common/Modal/RatingModal"
import SetInfoCom from "../../component_contet/component/set/PlanInfoCom"
import CommentCom from "../../component_contet/component/training/comment/CommentCom"
import { changeComment, readPose, writeReview } from "../../modules/pose/pose"
import PlanInfoCom from "../../component_contet/component/set/PlanInfoCom"

const SetInfoForm = ({ history, match }) => {
  const onClick = (setName) => {
    history.push(`/Set/${setName}`)
  }

  return (
    <>
      <PlanInfoCom onClick={onClick} />
      {/*댓글 코멘트는 포즈에 있는 커맨트를 그대로 이용할 생각
      <CommentCom />
      <RatingModal
        visible={ratingModal}
        ratingCount={ratingCount}
        onCancel={onCancel}
        onComplete={onComplete}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      /> */}
    </>
  )
}

export default withRouter(SetInfoForm)
