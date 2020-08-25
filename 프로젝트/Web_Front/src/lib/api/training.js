import client from "./client";

export const logExercise = (payload, state) => {
  console.log(state);
  return client.post("/training/log", { training: state.training });
};
