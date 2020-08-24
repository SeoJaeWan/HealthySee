import client from "./client";

export const login = ({ name, platform, email }, test) => {
  console.log({ name, platform, email }, test);
  return client.post("/auth/login", { name, platform, email });
};

export const register = ({
  nickname,
  gender,
  weight,
  scope,
  name,
  email,
  platform,
}) =>
  client.post("/auth/register", {
    nickname,
    gender,
    weight,
    scope,
    name,
    email,
    platform,
  });

// export const register = () => client.get(`auth/test`);

export const check = () => client.get("/auth/check");

export const logout = () => client.post("/auth/logout");
