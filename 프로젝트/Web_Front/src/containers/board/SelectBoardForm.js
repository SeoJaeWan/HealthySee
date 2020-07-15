import React, { useEffect, useState } from "react";
import SelectBoardCom from "../../component_contet/component/board/SelectBoardCom";
import { useSelector, useDispatch } from "react-redux";
import { bestList } from "../../modules/board/boardList";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import AlertModal from "../../component_contet/common/Modal/AlertModal";

const SelectBoardForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { bestPosts } = useSelector(({ boardList }) => ({
    bestPosts: boardList.bestPosts,
  }));

  const onClick = (postId, board) => {
    history.push(`/Board/${board}/read/${postId}`);
  };

  const onChangeModal = () => {
    setModal(!modal);
  };

  const onChange = (e) => {
    const value = e.target.value;

    dispatch(bestList(value));
  };

  useEffect(() => {
    dispatch(bestList("BO_Healthsee_Count"));
  }, [dispatch]);

  return (
    <>
      <SelectBoardCom
        bestPosts={bestPosts}
        match={match}
        onChangeModal={onChangeModal}
        onClick={onClick}
        onChange={onChange}
      />
      <AlertModal
        visible={modal}
        title="블라인드"
        description="블라인드 처리된 게시글입니다!"
        onCancel={onChangeModal}
      />
    </>
  );
};

export default withRouter(SelectBoardForm);
