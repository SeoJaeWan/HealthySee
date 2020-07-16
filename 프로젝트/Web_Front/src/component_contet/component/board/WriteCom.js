import React from "react";
import { Container } from "../../style/Container_style";
import { WriteForm } from "./style/WriteCom_style";

const WriteCom = ({
  post,
  oldFiles,
  onChange,
  onClick,
  onUpload,
  deleteFile,
  onCancel,
}) => {
  return (
    <Container>
      <WriteForm>
        <div className="buttonForm">
          <button className="backButton" onClick={onCancel}>
            돌아가기
          </button>
          <button className="writeButton" onClick={onClick}>
            {post.BO_Code ? "수정" : "글쓰기"}
          </button>
        </div>
        <dl className="titleform">
          <dt className="title">제목 :</dt>
          <dd className="titleInputForm">
            <input
              className="titleInput"
              type="text"
              value={post.BO_Title}
              name="BO_Title"
              onChange={onChange}
            />
          </dd>
        </dl>

        <h1 className="textTitle">본문</h1>
        <div className="textForm">
          <textarea
            className="textArea"
            type="text"
            value={post.BO_Content}
            name="BO_Content"
            onChange={onChange}
          />
        </div>

        <div className="fileForm">
          <div className="fileDiv">
            <h1>첨부 파일</h1>
            <div>
              <label className="inputImg" htmlFor="file">
                첨부 하기 &nbsp;
              </label>
              <label className="fileInput" htmlFor="file">
                &#8626;
              </label>
              <input
                className="hidden"
                id="file"
                type="file"
                name="file"
                onChange={onUpload}
                multiple
              />
            </div>
          </div>
          {console.log(post.files)}
          {post.oldFiles && (
            <>
              {post.oldFiles.map((file, index) => {
                return (
                  <div className="storageFile" key={index}>
                    <span key={index}>{file.BF_Name}</span>
                    <button
                      name="leaveFiles"
                      onClick={(e) => deleteFile(index, post.oldFiles, e)}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </>
          )}
          {post.files &&
            post.files.map((file, index) => {
              return (
                <div className="storageFile" key={index}>
                  <span key={index}>{file.name}</span>
                  <button
                    name="files"
                    onClick={(e) => deleteFile(index, post.file)}
                  >
                    X
                  </button>
                </div>
              );
            })}
        </div>
      </WriteForm>
    </Container>
  );
};

export default WriteCom;
