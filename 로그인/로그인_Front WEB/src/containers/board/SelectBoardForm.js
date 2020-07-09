import React, { useEffect, useState } from "react";
import SelectBoardCom from "../../component_contet/component/board/SelectBoardCom";
import { useSelector, useDispatch } from "react-redux";
import { bestList } from "../../modules/board/posts";
import AskModal from "../../component_contet/common/AskModal";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const SelectBoardForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { bestPosts, loading } = useSelector(({ posts, loading }) => ({
    bestPosts: posts.bestPosts,
  }));

  const onClick = (postId, board) => {
    history.push(`/Board/${board}/read/${postId}`);
  };

  const onChangeModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(bestList());
  }, [dispatch]);

  return (
    <>
      <SelectBoardCom
        bestPosts={bestPosts}
        match={match}
        onChangeModal={onChangeModal}
        onClick={onClick}
      />
      <AskModal
        visible={modal}
        title="블라인드"
        description="블라인드 처리된 게시글입니다!"
        onCancel={onChangeModal}
        confirmText=""
        cancelText="뒤로가기"
      />
    </>
  );
};

export default withRouter(SelectBoardForm);
