import client from "./client";

export const readMypage = (username) => client.get(`/mypage/${username}`);

export const updateMypage = ({ scope, weight, height, birthday, username }) =>
  client.post("/mypage", { scope, weight, height, birthday, username });
