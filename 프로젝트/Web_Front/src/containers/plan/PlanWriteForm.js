import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import PlanWriteCom from "../../component_contet/component/plan/PlanWriteCom"
import { changeField, writePlan } from "../../modules/plan/plan"

const PlanWriteForm = ({ history, match }) => {
  const { writeList } = useSelector(({ plan }) => ({
    writeList: plan.write.list,
  }))

  const dispatch = useDispatch()

  const onClick = (setName) => {
    dispatch(changeField({ key: "list", value: writeList }))
    history.push(`/Plan/${setName}`)
  }

  // 운동 불러오기
  useEffect(() => {
    dispatch(writePlan())
  }, [dispatch])

  return (
    <>
      <PlanWriteCom onClick={onClick} writeList={writeList} />
    </>
  )
}

export default withRouter(PlanWriteForm)
