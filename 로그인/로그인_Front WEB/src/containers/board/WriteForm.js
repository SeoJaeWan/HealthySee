import React, { useEffect } from "react";
import WriteCom from "../../component_contet/component/board/WriteCom";

import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initialize,
  writePost,
  updatePost,
  setOriginal,
} from "../../modules/board/write";
import { withRouter } from "react-router-dom";

const WriteForm = ({ route, history, match }) => {
  const dispatch = useDispatch();

  const readUrl = `${route + "/" + match.params.board}`;

  const { postInfo, post, user } = useSelector(({ write, user }) => ({
    postInfo: write.postInfo,
    post: write.post,
    user: user.user,
  }));

  const onClick = (e) => {
    const formData = new FormData();
    var files = post.file.length;
    var oldFiles = post.BO_File.length;

    // 파일 크기 3개 이상일 때 return
    if (files + oldFiles > 3) return;

    formData.append("BO_Title", post.BO_Title);
    formData.append("BO_Content", post.BO_Content);
    formData.append("files", post.file[0]);
    formData.append("files", post.file[1]);
    formData.append("files", post.file[2]);
    formData.append("username", user.username);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    if (post.BO_Code) {
      formData.append("BO_Code", post.BO_Code);
      formData.append("leaveFile", post.BO_File);
      dispatch(updatePost(post.BO_Code, formData, config));
    } else dispatch(writePost(formData, config));
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    dispatch(changeField({ form: "post", key: name, value }));
  };

  const deleteFile = (file) => {
    var files = post.BO_File.slice();

    files.splice(files.indexOf(file), 1);
    dispatch(changeField({ form: "post", key: "BO_File", value: files }));
  };

  const onUpload = (e) => {
    let files = Object.keys(e.target.files).map((key) => {
      return e.target.files[key];
    });

    dispatch(
      changeField({
        form: "post",
        key: "file",
        value: files,
      })
    );
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    var post = localStorage.getItem("post");

    if (post) dispatch(setOriginal({ form: "post", data: JSON.parse(post) }));

    return () => {
      // 언마운트 시 초기화
      dispatch(initialize());
      localStorage.setItem("post", "");
    };
  }, [dispatch]);

  useEffect(() => {
    if (postInfo) {
      const postId = postInfo.boardDetail.BO_Code;

      history.push(`${readUrl}/read/${postId}`);
    }
  }, [postInfo, readUrl, history]);

  return (
    <WriteCom
      onChange={onChange}
      post={post}
      onClick={onClick}
      onUpload={onUpload}
      deleteFile={deleteFile}
      onCancel={onCancel}
    />
  );
};

export default withRouter(WriteForm);
