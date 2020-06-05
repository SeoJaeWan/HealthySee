import React from "react";

const ReadCom = ({
  post,
  loading,
  ownPost,
  actionButton,
  onGoBack,
  onClick,
}) => {
  if (!post || loading) {
    return null;
  }

  return (
    <div>
      {console.log(post)}
      <h1>제목 : {post.BO_Title}</h1>
      <pre>{post.BO_Content}</pre>
      {ownPost && actionButton}
      <div>
        첨부파일 :
        {post.BO_File ? (
          <span onClick={() => onClick(post.BO_File)}>
            {post.BO_File.substring(13)}
          </span>
        ) : (
          ""
        )}
      </div>

      <button onClick={onGoBack}>나가기</button>
    </div>
  );
};

export default ReadCom;
