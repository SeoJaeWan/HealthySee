import React from "react"
import { Container } from "../../style/Container_style"
import { WriteForm } from "../../style/Board/WriteCom_style"

const WriteCom = ({ post, onChange, onClick, onUpload, deleteFile, onCancel }) => {
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
          <label className="inputImg" htmlFor="file">
            첨부 하기
          </label>
          <input
            className="hidden"
            id="file"
            type="file"
            name="file"
            onChange={onUpload}
            multiple
          />
          {post.BO_File ? (
            <>
              {post.BO_File.map((file, index) => {
                return (
                  <div className="storageFile" key={index}>
                    <span key={index}>{file.substring(13)}</span>
                    <button onClick={() => deleteFile(file)}>X</button>
                  </div>
                )
              })}
            </>
          ) : (
            ""
          )}
        </div>
      </WriteForm>
    </Container>
  )
}

export default WriteCom
