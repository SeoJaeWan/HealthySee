import client from "./client";
import qs from "qs";

export const writePost = (formData) => client.post("/board/posts", formData);

export const readPost = (id) => client.get(`/board/posts/${id}`);

export const deletePost = (id) => client.delete(`/board/posts/${id}`);

// export const list = ({ search, next }) => {
//   const queryString = qs.stringify({
//     search,
//     next,
//   });

//   return client.get(`/board/lists?${queryString}`);
// };

export const list = () => client.get(`/board/lists/`);
export const writeComment = ({ content, postId }) =>
  client.post("/board/comments", {
    BC_Content: content,
    Board_BO_Code: postId,
    BC_Re_Ref: "0",
  });

// export const reportPost = (id) => client.get(`/posts`);        미구현
// export const healthyPost                                       미구현
