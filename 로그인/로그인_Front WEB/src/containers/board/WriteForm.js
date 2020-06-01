import React, { useEffect, useState } from "react";
import WriteCom from "../../component_contet/component/board/WriteCom";

import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize, writePost } from "../../modules/board/write";
import { withRouter } from "react-router-dom";

const WriteForm = ({ route, history }) => {
  const dispatch = useDispatch();

  const { postInfo, comments, post, user } = useSelector(({ write, user }) => ({
    postInfo: write.postInfo,
    comments: write.comments,
    post: write.post,

    user: user.user,
  }));

  const onClick = (e) => {
    const formData = new FormData();

    console.log(post.file);

    formData.append("BO_Title", post.title);
    formData.append("BO_Content", post.content);
    formData.append("file", post.file);
    formData.append("username", user.username);

    dispatch(writePost(formData));
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    dispatch(changeField({ form: "post", key: name, value }));
  };

  const onUpload = (e) => {
    dispatch(
      changeField({ form: "post", key: "file", value: e.target.files[0] })
    );
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

  return (
    <WriteCom
      onChange={onChange}
      post={post}
      onClick={onClick}
      onUpload={onUpload}
    />
  );
};

export default withRouter(WriteForm);
