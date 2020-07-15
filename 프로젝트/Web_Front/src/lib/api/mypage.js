import client, { config } from "./client";

export const readMypage = (username) => client.get(`/mypages/${username}`);

export const updateMypage = (mypage) => client.post("/mypages", mypage, config);
