import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPost } from "../../modules/board/post";
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

  const onDeletePost = async () => {
    await deletePost(post.BO_Code);
    history.push(route);
  };

  const onChange = (form, data) => {
    var post = {
      ...data,
      file: [],
    };
    console.log(post);
    localStorage.setItem(form, JSON.stringify(post));

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
            onChange={() => onChange("post", post)}
          />
        }
        onGoBack={onGoBack}
        onDeletePost={onDeletePost}
        onClick={onClick}
      />
      <EvaluationForm post={post} Writer={post.BO_Writer_NickName}/>
      <CommentsForm post={post} user={user} />
    </>
  );
};

export default withRouter(ReadForm);
