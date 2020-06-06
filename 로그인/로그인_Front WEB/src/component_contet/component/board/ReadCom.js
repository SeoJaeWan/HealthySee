import React from "react";
import { Container } from "../../style/ReadCom_Style";

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
    <Container>
      {console.log(post)}
      <div className="TitleForm"><div className="Title">제목 : {post.BO_Title}</div></div>
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
    </Container>
  );
};

export default ReadCom;
