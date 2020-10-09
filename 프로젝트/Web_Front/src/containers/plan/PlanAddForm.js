import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import PlanAddCom from "../../component_contet/component/plan/PlanAddCom"
import { v4 as uuid } from "uuid"
import { useDispatch, useSelector } from "react-redux"
import { listPose } from "../../modules/pose/pose"
import plan, { changeField, listPlan, writePlan } from "../../modules/plan/plan"
import AddPoseModal from "../../component_contet/common/Modal/AddPoseModal"

const PlanAddForm = ({ history }) => {
  //poseList를 써서 add 부분에 운동 리스트 뜨게 햇음
  const { poseList } = useSelector(({ pose }) => ({
    poseList: pose.poseList,
  }))

  const { writeList } = useSelector(({ plan }) => ({
    writeList: plan.write.list,
  }))

  const dispatch = useDispatch()

  const [modal, setModal] = useState(false)
  const [PoseName, setPoseName] = useState("")
  let [PoseCount, setPoseCount] = useState(0)

  const [itemsFromBackend, setItems] = useState([])

  const columnsFromBackend = {
    ["AddPose"]: {
      items: itemsFromBackend,
    },
  }

  const [columns, setColumns] = useState(columnsFromBackend)

  const onComplete = (e) => {
    dispatch(changeField({ key: "list", value: columns }))
    history.push("/Plan/Write")
  }

  //이거는 add 페이지에서 운동을 눌렀을때 우측에 추가
  const onClick = (pose) => {
    setModal(!modal)
    setPoseName(pose)
  }

  const onAddPose = (name, count) => {
    setItems([...itemsFromBackend, { id: uuid(), PoseName: name, PoseCount: count }])
    setColumns(columnsFromBackend)
    dispatch(changeField({ key: "list", value: itemsFromBackend }))
    setPoseCount(0)
    setModal(!modal)
  }

  const onIncrease = () => {
    PoseCount++
    setPoseCount(PoseCount)
  }
  const onDecrease = () => {
    if (PoseCount > 0) {
      PoseCount--
      setPoseCount(PoseCount)
    }
  }

  const onChange = (e, id, name) => {
    dispatch(changeField({ key: "list", value: itemsFromBackend }))
  }

  const onDragEnd = async (result, columns, setColumns) => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      })

      dispatch(changeField({ key: "list", value: columns }))
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      })

      dispatch(changeField({ key: "list", value: columns }))
    }
  }
  // 운동 불러오기
  useEffect(() => {
    dispatch(listPose())
  }, [dispatch])

  useEffect(() => {
    setColumns(columnsFromBackend)
  }, [itemsFromBackend])

  useEffect(() => {
    dispatch(writePlan())
  }, [dispatch])

  return (
    <>
      <PlanAddCom
        writeList={writeList}
        onClick={onClick}
        columns={columns}
        onDragEnd={onDragEnd}
        onComplete={onComplete}
        setColumns={setColumns}
        onChange={onChange}
        poseList={poseList}
      />
      <AddPoseModal
        visible={modal}
        PoseCount={PoseCount}
        onAddPose={onAddPose}
        onCancel={setModal}
        PoseName={PoseName}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </>
  )
}

export default withRouter(PlanAddForm)
