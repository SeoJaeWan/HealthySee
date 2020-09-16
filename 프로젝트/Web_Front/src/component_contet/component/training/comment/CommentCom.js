import React, { useState } from "react";
import { CommentForm, CommentsItemForm } from "./style/CommentCom_style";
import { Container } from "../../../style/Container_style";
import { Icon } from "semantic-ui-react";
import CommentItemCom from "./CommentItemCom";

<<<<<<< HEAD
const CommentCom = ({
  grades,
  ratingModal,
  onChangeRatingModal,
  onChangeValue,
  onWriteReview,
  comments,
  write,
  user,
}) => {
=======
const CommentCom = ({ grades, onChangeRatingModal, ratingCount }) => {
>>>>>>> 1dab7c6cd4447beb9bc9f9a934ef2dd4d1d1d422
  const [modal] = useState({
    poseModal: undefined,
    ratingModal: false,
  });
  return (
    <>
      <Container>
        {console.log(comments)}
        <CommentForm>
          <input
            className="textInput"
            type="text"
            value={write.content}
            onChange={onChangeValue}
          />
          <button className="writeButton" type="submit" onClick={onWriteReview}>
            작성
          </button>
          <div className="ratingButtonForm">
            <button
              type="button"
              onClick={() => onChangeRatingModal(ratingModal)}
            >
              <Icon size="big" link name="star"></Icon>
            </button>
            <h2>{ratingCount}</h2>
          </div>
        </CommentForm>
        <CommentsItemForm>
          {comments.map((comment, index) => {
            return <CommentItemCom comment={comment} user={user} key={index} />;
          })}
        </CommentsItemForm>
      </Container>
    </>
  );
};

export default CommentCom;
