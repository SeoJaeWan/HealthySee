import React from "react";
import { Container } from "../../style/Board/ReadCom_Style";

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
      <div className="TopButton">
        <button className="exit" onClick={onGoBack}>
          나가기
        </button>
        <div className="titlebutton">{ownPost && actionButton}</div>
      </div>
      <div className="TitleForm">
        <div className="Title">제목 :</div>
        <div className="TitleContent">{post.BO_Title}</div>
      </div>
      <div className="ContentForm">
        <pre>{post.BO_Content}</pre>
        <div className="FileForm">
          <div className="flex">
            <div className="FileText">첨부파일 :</div>
            <div className="FileButton">
              {post.BO_File
                ? post.BO_File.map((file, index) => {
                    return (
                      <span className="File" key={index} onClick={() => onClick(file)}>
                        {file.substring(13)}<br/>
                      </span>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ReadCom;
