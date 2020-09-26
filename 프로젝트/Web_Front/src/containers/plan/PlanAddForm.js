import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import PlanAddCom from "../../component_contet/component/set/PlanAddCom"
import { v4 as uuid } from "uuid"
import { useDispatch, useSelector } from "react-redux"
import { listPose } from "../../modules/pose/pose"

const PlanAddForm = ({ history }) => {
  const { poseList } = useSelector(({ pose }) => ({
    poseList: pose.poseList,
  }))
  const dispatch = useDispatch()
  const example = {
    id: uuid(),
    PoseName: "스쿼트",
    PoseCount: 12,
  }
  //itemsFromBackend가 늘어나면 운동 추가화면에서 우측 운동이 늘어남
  //PoseCount는 Input 안에 defaultvalue로 넣어놨음
  const [itemsFromBackend, setItems] = useState([])
  const columnsFromBackend = {
    [uuid()]: {
      items: itemsFromBackend,
    },
  }
  //[example, { id: uuid(), PoseName: "런지", PoseCount: 12 }]
  //이거는 위쪽 itemsFromBackend를 나열하는 곳
  //원래 세로줄이 여러개면 여기서 2~3개 더 만들어서 이동시킬수 있는데 우린 하나만 사용해서 하나만있음

  const onClick = (setName) => {
    history.push(`/Set/${setName}`)
  }

  const onChange = (e) => {
    const { Count, name } = e.target
    console.log(Count)
    console.log(itemsFromBackend)
  }

  //이거는 add 페이지에서 운동을 눌렀을때 우측에 추가
  const onAddPose = (e) => {
    setItems((itemsFromBackend) => [
      ...itemsFromBackend,
      { id: uuid(), PoseName: "런지", PoseCount: 0 },
    ])
    setColumns(columnsFromBackend)
  }

  const [columns, setColumns] = useState(columnsFromBackend)

  const onDragEnd = (result, columns, setColumns) => {
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
    }
  }

  // 운동 불러오기
  useEffect(() => {
    dispatch(listPose())
  }, [dispatch])

  return (
    <>
      <PlanAddCom
        onAddPose={onAddPose}
        columns={columns}
        onDragEnd={onDragEnd}
        setColumns={setColumns}
        onChange={onChange}
        poseList={poseList}
      />
    </>
  )
}

export default withRouter(PlanAddForm)
