import client, { config } from "./client";

export const readMypage = ({ owner, username }) => {
  console.log(owner, username);
  return client.get(`/mypages/${owner}&${username}`);
};

export const updateMypage = (mypage) => client.post("/mypages", mypage, config);
