import client from "./client";
import qs from "qs";

export const writePost = ({ title, content }) =>
  client.post("/posts", { title, content });

export const readPost = (id) => client.get(`/posts/${id}`);

export const deletePost = (id) => client.delete(`/posts/${id}`);

export const list = ({ search, next }) => {
  const queryString = qs.stringify({
    search,
    next,
  });

  return client.get(`/posts?${queryString}`);
};

export const writeComment = ({ content, postId, username }) =>
  client.post("/posts/comments", { content, postId, username });

// export const reportPost = (id) => client.get(`/posts`);        미구현
// export const healthyPost                                       미구현
