import React from "react";
import { ReadComForm } from "../../style/Board/ReadCom_Style";
import { Container } from "../../style/Container";

const ReadCom = ({ post, ownPost, actionButton, onGoBack, onClick }) => {
  return (
    <Container>
      <ReadComForm>
        <div className="topButton">
          <button type="button" className="exitButton" onClick={onGoBack}>
            나가기
          </button>
          <div className="titleButton">{ownPost && actionButton}</div>
        </div>
        <dl className="titleForm">
          <dt className="title">제목 :</dt>
          <dd className="titleContent">{post.BO_Title}</dd>
        </dl>
        <div className="contentForm">
          <div className="fileForm">
            <button type="button" id="file" className="filebutton">
              &#x25BC;
            </button>
            <label className="fileText" htmlFor="file">
              첨부파일
            </label>
          </div>
          <div className="fileInfo">
            {post.BO_File
              ? post.BO_File.map((file, index) => {
                  return (
                    <button
                      type="button"
                      className="file"
                      key={index}
                      onClick={() => onClick(file)}
                    >
                      {file.substring(13)}
                      <br />
                    </button>
                  );
                })
              : ""}
          </div>
          <pre>{post.BO_Content}</pre>
        </div>
      </ReadComForm>
    </Container>
  );
};

export default ReadCom;
