import React from "react";
import { Container } from "../../style/Container";
import { WriteForm } from "../../style/Board/WriteCom_Style";

const WriteCom = ({
  post,
  onChange,
  onClick,
  onUpload,
  deleteFile,
  onCancel,
}) => {
  return (
    <Container>
      <WriteForm>
        <div className="buttonform">
          <button type="button" className="backbutton" onClick={onCancel}>
            돌아가기
          </button>
          <button type="submit" className="writebutton" onClick={onClick}>
            {post.BO_Code ? "수정" : "글쓰기"}
          </button>
        </div>
        <div className="titleform">
          <div className="titlediv">
            <div className="title">제목 :</div>
            <input
              className="titleinput"
              type="text"
              value={post.BO_Title}
              name="BO_Title"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="textTitle">본문</div>
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
          <div className="fileButton">
            <input type="file" name="file" onChange={onUpload} multiple />
          </div>
          {post.BO_File ? (
            <div className="filetext">
              <div className="title">첨부파일</div>
              <div className="storageFileForm">
                {post.BO_File.map((file, index) => {
                  return (
                    <div className="storageFile" key={index}>
                      <span key={index}>{file.substring(13)}</span>
                      <button onClick={() => deleteFile(file)}>X</button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </WriteForm>
    </Container>
  );
};

export default WriteCom;
