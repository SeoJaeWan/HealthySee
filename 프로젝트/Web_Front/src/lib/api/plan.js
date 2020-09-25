import client from "./client";

export const planList = () => client.get("/plan/lists");

export const readPlan = (code) => client.get(`/plan/posts/${code}`);

// export const setList = () => client.get("/plan/evaluation")
