import React from "react";
import { Route } from "react-router-dom";

import ViewForm from "../containers/training/ViewForm";

const Training = ({ match }) => {
  return (
    <>
      <Route path={`${match.path}`} component={ViewForm} />
    </>
  );
};

export default Training;
