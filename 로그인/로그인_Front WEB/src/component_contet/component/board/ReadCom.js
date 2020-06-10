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
      <div className="TopButton">
        <button className="exit" onClick={onGoBack}>
          나가기
        </button>
        {ownPost && actionButton}
      </div>
      <div className="TitleForm">
        <div className="Title">제목 : {post.BO_Title}</div>
      </div>
      <div className="ContentForm">
        <pre>{post.BO_Content}</pre>
        <div className="FileForm">
          <div className="FileText">첨부파일 :</div>
          {post.BO_File ? (
            <span onClick={() => onClick(post.BO_File)}>
              {post.BO_File.substring(13)}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </Container>
  );
};

export default ReadCom;
