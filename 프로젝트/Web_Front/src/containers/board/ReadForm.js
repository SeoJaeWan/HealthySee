import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPost, setBeforeList } from "../../modules/board/boardPost";
import { withRouter } from "react-router-dom";
import { deletePost, downloadFile } from "../../lib/api/board";
import { saveAs } from "file-saver";

import ReadCom from "../../component_contet/component/board/ReadCom";
import EvaluationForm from "./read/EvaluationForm";
import CommentsForm from "./read/CommentsForm";
import ActionButton from "../../component_contet/common/Modal/ActionButton";
import { useCallback } from "react";
import { initialize } from "../../modules/board/evaluation";

const ReadForm = ({ match, history }) => {
  const postId = match.params.postId;
  const rootUrl = `/board/${match.params.board}`;

  const [isView, setView] = useState(true);
  const dispatch = useDispatch();
  const {
    post,
    files,
    loading,
    user,
    isReport,
    isHealth,
    reportError,
  } = useSelector(({ boardPost, loading, user, evaluation }) => ({
    post: boardPost.post,
    files: boardPost.files,
    loading: loading["post/READ_POST"],
    user: user.user,
    isHealth: boardPost.isHealthsee,
    isReport: boardPost.isReport,
    reportError: evaluation.reportError,
  }));

  const onDeletePost = async () => {
    await deletePost(post.BO_Code);
    history.push(rootUrl);
  };

  const onChange = () => {
    var data = {
      post,
      files,
    };
    console.log(JSON.stringify(data));
    localStorage.setItem("post", JSON.stringify(data));

    history.push(`${rootUrl}/write`);
  };

  const onClick = (file) => {
    let blob = new Blob([Uint8Array.from(file.BF_Files.data).buffer], {
      type: file.BF_Type,
    });

    saveAs(blob, file.BF_Name);
  };

  const onGoBack = useCallback(() => {
    history.push(rootUrl);
  }, [history, rootUrl]);

  useEffect(() => {
    dispatch(setBeforeList(JSON.parse(sessionStorage.getItem("beforeList"))));
    dispatch(readPost(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    if (reportError) {
      onGoBack();
      dispatch(initialize());
    }
  }, [reportError, onGoBack, dispatch]);

  const setFile = () => {
    return setView(!isView);
  };

  if (!post || loading) {
    return null;
  }

  return (
    <>
      <ReadCom
        post={post}
        files={files}
        ownPost={user === (post && post.BO_Writer_NickName)}
        setFile={setFile}
        isView={isView}
        actionButton={
          <ActionButton onDelete={onDeletePost} onChange={onChange} />
        }
        onGoBack={onGoBack}
        onDeletePost={onDeletePost}
        onClick={onClick}
      />
      <EvaluationForm
        post={post}
        Writer={post.BO_Writer_NickName}
        isHealthsee={isHealth}
        isReport={isReport}
      />
      <CommentsForm post={post} user={user} />
    </>
  );
};

export default withRouter(ReadForm);
