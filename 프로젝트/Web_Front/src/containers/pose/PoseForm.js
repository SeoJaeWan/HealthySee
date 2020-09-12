import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import PoseSelectCom from "../../component_contet/component/pose/PoseSelectCom";
import { listPose, readPose } from "../../modules/pose/pose";

const PoseForm = ({ history }) => {
  const dispatch = useDispatch();
  const { poseList, poseItem } = useSelector(({ pose }) => ({
    poseList: pose.poseList,
    poseItem: pose.poseItem,
  }));

  useEffect(() => {
    dispatch(listPose());
  }, [dispatch]);

  const onClick = (poseName) => {
    history.push(`/Pose/${poseName}`);
  };

  return (
    <>
      {poseList ? (
        <PoseSelectCom onClick={onClick} poseList={poseList} />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default withRouter(PoseForm);
