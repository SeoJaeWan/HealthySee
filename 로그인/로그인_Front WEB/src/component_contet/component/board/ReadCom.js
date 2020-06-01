import React from "react";

const ReadCom = ({
  post,
  loading,
  comment,
  comments,
  user,
  onComment,
  onGoBack,
  onChange,
  onDelete,
}) => {
  if (!post || loading) {
    return null;
  }

  return (
    <div>
      <h1>제목 : {post.BO_Title}</h1>
      <pre>{post.BO_Content}</pre>

      {/* {user.username === post.BO_Writer_NickName ? (
        <div onClick={onDelete}>삭제</div>
      ) : (
        ""
      )} */}
      <div>첨부파일 : {post.BO_File ? post.BO_File.substring(13) : ""}</div>
      <div>
        <p>댓글</p>
        <input
          type="text"
          name="content"
          value={comment.content}
          onChange={onChange}
        />
        <button onClick={() => onComment(post.BO_Code)}>작성</button>
      </div>

      <div>
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              {comment.BC_Content}
              {comment.BC_Writer_NickName}
            </div>
          );
        })}
      </div>

      <div onClick={onGoBack}>나가기</div>
    </div>
  );
};

export default ReadCom;
