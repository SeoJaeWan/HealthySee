import React from "react";
import { Route } from "react-router-dom";

import ViewForm from "../containers/training/exercise/ViewForm";

const Training = ({ match }) => {
  return (
    <>
      <Route path={`${match.path}`} component={ViewForm} />
    </>
  );
};

export default Training;
