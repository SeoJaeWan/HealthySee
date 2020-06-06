import client from "./client";
import qs from "qs";

export const writePost = (formData) => client.post("/board/posts", formData);
export const readPost = (id) => client.get(`/board/posts/${id}`);
export const deletePost = (id) => {
  console.log(id);
  return client.delete(`/board/posts/${id}`);
};

export const reportPost = ({ BO_Code }) =>
  client.post("/board/posts/report", { BO_Code });
export const undoReportPost = (id) =>
  client.delete(`/board/posts/report/${id}`);

export const healthPost = ({ BO_Code }) =>
  client.post("/board/posts/health", { BO_Code });
export const undoHealthPost = (id) =>
  client.delete(`/board/posts/health/${id}`);

export const list = () => client.get(`/board/lists/`);
export const writeComment = ({ content, postId, ref }) => {
  console.log(content, postId, ref);

  return client.post("/board/comments", {
    BC_Content: content,
    Board_BO_Code: postId,
    BC_Re_Ref: ref,
  });
};

export const deleteComment = (id) => client.delete(`/board/comments/${id}`);

export const downloadFile = (id) =>
  client.get(`/board/posts/download/${id}`, { responseType: "blob" });