import client from "./client";

export const logExercise = ({
  LO_Time,
  LO_Success_Count,
  LO_Fault_Count,
  Plan_PL_Code,
  LOD_Code,
}) =>
  client.post("/training/log", {
    LO_Time,
    LO_Success_Count,
    LO_Fault_Count,
    Plan_PL_Code,
    LOD_Code,
  });
