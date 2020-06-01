import React from "react";

const WriteCom = ({ post, onChange, onClick, onUpload }) => {
  return (
    <div>
      <div>
        <p>제목</p>
        <input
          type="text"
          value={post.title}
          name="title"
          onChange={onChange}
        />
      </div>
      <div>
        <p>본문</p>
        <textarea
          type="text"
          value={post.content}
          name="content"
          onChange={onChange}
        />
      </div>

      <div>
        <input type="file" name="file" onChange={onUpload} />
      </div>

      <div>
        <button onClick={onClick}>글쓰기</button>
      </div>
    </div>
  );
};

export default WriteCom;
