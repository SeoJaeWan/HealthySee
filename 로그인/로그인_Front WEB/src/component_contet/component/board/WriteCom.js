import React from "react";
import { Container } from "../../style/Container";
import { WriteForm } from "../../style/WriteCom_Style";

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
        <div className="Buttonform">
          <button onClick={onCancel}>돌아가기</button>
          <button onClick={onClick}>{post.BO_Code ? "수정" : "글쓰기"}</button>
        </div>
        <div className="Titleform">
          <div className="Titlediv">
            <div className="Title">제목 :</div>
            <input
              className="Titleinput"
              type="text"
              value={post.BO_Title}
              name="BO_Title"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="TextTitle">본문</div>
        <div className="TextForm">
          <textarea
            className="TextArea"
            type="text"
            value={post.BO_Content}
            name="BO_Content"
            onChange={onChange}
            onkeydown="resize(this)"
            onkeyup="resize(this)"
          />
        </div>

        <div className="FileForm">
          <div className="FileButton">
            <input type="file" name="file" onChange={onUpload} multiple />
          </div>
          {post.BO_File ? (
            <div className="Filetext">
              <div className="Title">첨부파일</div>
              {post.BO_File.map((file, index) => {
                return (
                  <div key={index}>
                    <span key={index}>{file.substring(13)}</span>
                    <button onClick={() => deleteFile(file)}>X</button>
                  </div>
                );
              })}
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
