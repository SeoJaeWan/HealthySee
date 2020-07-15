import client, { config } from "./client";
import qs from "qs";

export const list = ({ id, name, keyword, category }) => {
  const queryString = qs.stringify({
    BO_Code: id,
    name: name,
    keyword: keyword,
    category: category,
  });
  return client.get(`/board/lists?${queryString}`);
};

export const bestList = (value) => client.get(`/board/lists/${value}&10`);

export const writePost = (formData) =>
  client.post("/board/posts", formData, config);
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

export const updatePost = ({ id, formData }) => {
  console.log(id);
  console.log(formData);
  return client.patch(`/board/posts/${id}`, formData, config);
};

export const downloadFile = (id) => client.get(`/board/posts/download/${id}`);

export const writeComment = ({ content, postId, ref, page }) => {
  console.log(content, postId, ref);

  return client.post("/board/comments", {
    BC_Content: content,
    Board_BO_Code: postId,
    BC_Re_Ref: ref,
    page,
  });
};
export const updateComment = ({ code, content, page }) =>
  client.patch("/board/comments", {
    BC_Content: content,
    BC_Code: code,
    page,
  });

export const deleteComment = ({ id, page }) =>
  client.delete(`/board/comments/${id}&${page}`);

export const readComment = ({ BO_Code, page }) =>
  client.get(`/board/comments/${BO_Code}&${page}`);

export const reportComments = ({ BC_Code, page, BO_Code }) =>
  client.post("/board/comments/report", {
    Board_BO_Code: BO_Code,
    B_Comment_BC_Code: BC_Code,
    page,
  });
