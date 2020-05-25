import client from "./client";

export const register = ({ nickname, gender, weight, scope }) =>
  client.post("/auth/register", { nickname, gender, weight, scope });

// export const register = () => client.get(`auth/test`);

export const check = () => client.get("/auth/check");

export const logout = () => client.post("/auth/logout");
