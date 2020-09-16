import React from "react"
import { Route } from "react-router-dom"
import SetAddForm from "../containers/set/SetAddForm"
import SetForm from "../containers/set/SetForm"
import SetWriteForm from "../containers/set/SetWriteForm"

const Set = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={SetForm} />
      <Route path={"/Set/Write"} component={SetWriteForm} />
      <Route path={"/Set/Add"} component={SetAddForm} />
    </>
  )
}

export default Set
