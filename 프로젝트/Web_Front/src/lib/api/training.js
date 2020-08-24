import client from "./client";

export const logExercise = (state) => {
  console.log(state);
  return client.post("/training/log", {});
};
