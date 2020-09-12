import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../modules/training/training";
import PoseInfoCom from "../../component_contet/component/pose/PoseInfoCom";
import PoseModal from "../../component_contet/common/Modal/PoseModal";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import CommentCom from "../../component_contet/component/training/comment/CommentCom";
import RatingModal from "../../component_contet/common/Modal/RatingModal";
import { readPose } from "../../modules/pose/pose";

const PoseInfo = ({ match, history }) => {
  let dispatch = useDispatch();
  const { poseItem } = useSelector(({ pose }) => ({
    poseItem: pose.poseItem,
  }));

  const { Pose } = match.params;
  const [modal, setModal] = useState({
    poseModal: false,
    ratingModal: false,
  });
  const { poseModal, ratingModal } = modal;

  const [count, setCount] = useState(0);

  const onChangeModal = () => {
    setModal({ poseModal: !poseModal });
  };

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    if (count > 0) setCount(count - 1);
  };

  const onStartButton = () => {
    dispatch(changeField({ key: "routin", value: [Pose, count] }));
    history.push(`/Training/${Pose}`);
  };

  useEffect(() => {
    dispatch(readPose(Pose));
  }, [Pose, dispatch]);

  return (
    <>
      {poseItem ? (
        <>
          <PoseInfoCom onChangeModal={onChangeModal} poseItem={poseItem} />
          <CommentCom />
          <PoseModal
            visible={poseModal}
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            title="스쿼트"
            onCancel={onChangeModal}
            onStartButton={onStartButton}
          />
          <RatingModal
            // grades={grades}
            visible={ratingModal}
            // onCancel={onChangeRatingModal}
          ></RatingModal>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default withRouter(PoseInfo);
