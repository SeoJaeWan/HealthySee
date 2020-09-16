import client, { config } from "./client";

export const readMypage = (owner) => {
  console.log(owner);
  return client.get(`/mypages/${owner}`);
};

export const updateMypage = (mypage) =>
  client.patch("/mypages", mypage, config);
