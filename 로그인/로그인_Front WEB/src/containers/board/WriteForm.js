import React, { useEffect } from "react";
import WriteCom from "../../component_contet/component/board/WriteCom";

import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize, writePost } from "../../modules/board/write";
import { withRouter } from "react-router-dom";

const WriteForm = ({ route, history }) => {
  const dispatch = useDispatch();
  const { postInfo, comments, post } = useSelector(({ write }) => ({
    postInfo: write.postInfo,
    comments: write.comments,
    post: write.post,
  }));

  const onClick = () => {
    dispatch(writePost(post));
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    dispatch(changeField({ form: "post", key: name, value }));
  };

  useEffect(() => {
    return () => {
      // 언마운트 시 초기화
      dispatch(initialize());
    };
  }, [dispatch]);

  useEffect(() => {
    if (postInfo) {
      const postId = postInfo.boardDetail.BO_Code;
      console.log("여기 호출중입니다!");
      history.push(`${route}/read/${postId}`);
    }
  }, [postInfo, history, route]);

  return <WriteCom onChange={onChange} post={post} onClick={onClick} />;
};

export default withRouter(WriteForm);
