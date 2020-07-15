import React from "react";
import { ReadComForm, FilewViewInfo } from "./style/ReadCom_style";
import { Container } from "../../style/Container_style";

const ReadCom = ({
  post,
  ownPost,
  actionButton,
  onGoBack,
  onClick,
  setFile,
  isView,
}) => {
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
          <dt className="title">제목 : </dt>
          <dd className="titleContent">{post.BO_Title}</dd>
        </dl>
        <div className="contentForm">
          {post.BO_File.length !== 0 ? (
            <div className="fileForm">
              <button
                type="button"
                id="file"
                className="filebutton"
                onClick={() => setFile(setFile)}
                onBlur={() => setFile(setFile)}
              >
                &#x25BC;
              </button>
              <label className="fileText" htmlFor="file">
                첨부파일
              </label>
            </div>
          ) : (
            ""
          )}

          <FilewViewInfo isView={isView}>
            {post.BO_File
              ? post.BO_File.map((file, index) => {
                  return (
                    <button
                      type="submit"
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
          </FilewViewInfo>
          <pre>{post.BO_Content}</pre>
        </div>
      </ReadComForm>
    </Container>
  );
};

export default ReadCom;
