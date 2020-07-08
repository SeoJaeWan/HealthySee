import React from "react"
import { ReadComForm } from "../../style/Board/ReadCom_Style"
import { Container } from "../../style/Container"

const ReadCom = ({ post, loading, ownPost, actionButton, onGoBack, onClick }) => {
  if (!post || loading) {
    return null
  }

  return (
    <Container>
      <ReadComForm>
        <div className="topButton">
          <button className="exitButton" onClick={onGoBack}>
            나가기
          </button>
          <div className="titleButton">{ownPost && actionButton}</div>
        </div>
        <div className="titleForm">
          <div className="title">제목 :</div>
          <div className="titleContent">{post.BO_Title}</div>
        </div>
        <div className="contentForm">
          <pre>{post.BO_Content}</pre>
          <div className="fileForm">
            <div className="flex">
              <div className="fileText">첨부파일 :</div>
              <div className="fileButton">
                {post.BO_File
                  ? post.BO_File.map((file, index) => {
                      return (
                        <span className="File" key={index} onClick={() => onClick(file)}>
                          {file.substring(13)}
                          <br />
                        </span>
                      )
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </ReadComForm>
    </Container>
  )
}

export default ReadCom
