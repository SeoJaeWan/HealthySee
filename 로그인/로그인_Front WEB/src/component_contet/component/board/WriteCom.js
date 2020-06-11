import React from "react";

const WriteCom = ({
  post,
  onChange,
  onClick,
  onUpload,
  deleteFile,
  onCancel,
}) => {
  return (
    <div>
      <div>
        <p>제목</p>
        <input
          type="text"
          value={post.BO_Title}
          name="BO_Title"
          onChange={onChange}
        />
      </div>
      <div>
        <p>본문</p>
        <textarea
          type="text"
          value={post.BO_Content}
          name="BO_Content"
          onChange={onChange}
        />
      </div>

      {post.BO_File ? (
        <div className="FileForm">
          <div className="FileText">첨부파일</div>
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

      <div>
        <input type="file" name="file" onChange={onUpload} multiple />
      </div>

      <div>
        <button onClick={onClick}>{post.BO_Code ? "수정" : "글쓰기"}</button>
        <button onClick={onCancel}>돌아가기</button>
      </div>
    </div>
  );
};

export default WriteCom;
