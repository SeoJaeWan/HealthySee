import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPost, setBeforeList } from "../../modules/board/post";
import { withRouter } from "react-router-dom";
import { deletePost, downloadFile } from "../../lib/api/board";
import { saveAs } from "file-saver";

import ReadCom from "../../component_contet/component/board/ReadCom";
import EvaluationForm from "./read/EvaluationForm";
import CommentsForm from "./read/CommentsForm";
import ActionButton from "../../component_contet/common/ActionButton";
import { useCallback } from "react";
import { initialize } from "../../modules/board/evaluation";

const ReadForm = ({ match, history, route }) => {
  const postId = match.params.postId;
  const rootUrl = `/board/${match.params.board}`;

  const dispatch = useDispatch();
  const { post, loading, user, isReport, isHealth, reportError } = useSelector(
    ({ post, loading, user, evaluation }) => ({
      post: post.post,
      loading: loading["post/READ_POST"],
      user: user.user,
      isHealth: post.isHealthsee,
      isReport: post.isReport,
      reportError: evaluation.reportError,
    })
  );

  const onDeletePost = async () => {
    await deletePost(post.BO_Code);
    history.push(rootUrl);
  };

  const onChange = (form, data) => {
    var post = {
      ...data,
      file: [],
    };
    console.log(post);
    localStorage.setItem(form, JSON.stringify(post));

    history.push(`${rootUrl}/write`);
  };

  const onClick = async (filename) => {
    const file = await downloadFile(filename);
    console.log(file);
    saveAs(file.data, filename.substring(13));
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

  if (!post || loading) {
    return null;
  }

  return (
    <>
      <ReadCom
        post={post}
        ownPost={user === (post && post.BO_Writer_NickName)}
        actionButton={
          <ActionButton
            onDelete={onDeletePost}
            onChange={() => onChange("post", post)}
          />
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
