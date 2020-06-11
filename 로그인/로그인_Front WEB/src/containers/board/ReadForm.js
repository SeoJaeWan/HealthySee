import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPost } from "../../modules/board/post";
import { setOriginal } from "../../modules/board/write";
import { withRouter } from "react-router-dom";
import { deletePost, downloadFile } from "../../lib/api/board";
import { saveAs } from "file-saver";

import ReadCom from "../../component_contet/component/board/ReadCom";
import EvaluationForm from "./read/EvaluationForm";
import CommentsForm from "./read/CommentsForm";
import ActionButton from "../../component_contet/common/ActionButton";

const ReadForm = ({ match, history, route }) => {
  const postId = match.params.postId;

  const dispatch = useDispatch();
  const { post, loading, user } = useSelector(({ post, loading, user }) => ({
    post: post.post,

    loading: loading["post/READ_POST"],
    user: user.user,
  }));

  const onDeletePost = async (code) => {
    await deletePost(code);
    history.push(route);
  };

  const onChange = ({ code, data }) => {
    dispatch(setOriginal({ code, data }));
    localStorage.setItem(code, JSON.stringify(data));

    history.push("/Board/write");
  };

  const onClick = async (filename) => {
    const file = await downloadFile(filename);
    console.log(file);
    saveAs(file.data, filename.substring(13));
  };

  const onGoBack = () => {
    history.push("/board");
  };

  useEffect(() => {
    dispatch(readPost(postId));
  }, [dispatch, postId]);

  if (!post || loading) {
    return null;
  }

  return (
    <>
      <ReadCom
        post={post}
        ownPost={(user && user.username) === (post && post.BO_Writer_NickName)}
        actionButton={
          <ActionButton
            onDelete={onDeletePost}
            onChange={onChange}
            data={post}
            code={"post"}
          />
        }
        onGoBack={onGoBack}
        onDeletePost={onDeletePost}
        onClick={onClick}
      />
      <EvaluationForm post={post} />
      <CommentsForm post={post} user={user} />
    </>
  );
};

export default withRouter(ReadForm);
