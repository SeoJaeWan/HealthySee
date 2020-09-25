import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import PlanAddCom from "../../component_contet/component/set/PlanAddCom";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { listPose } from "../../modules/pose/pose";

const PlanAddForm = () => {
  // 운동 리스트
  const { poseList } = useSelector(({ pose }) => ({
    poseList: pose.poseList,
  }));
  const dispatch = useDispatch();

  const itemsFromBackend = [
    {
      id: uuid(),
      content: (
        <div>
          test <input type="text"></input>
        </div>
      ),
    },
    { id: uuid(), content: "2 test" },
  ];

  const columnsFromBackend = {
    [uuid()]: {
      name: "Requested",
      items: itemsFromBackend,
    },
  };

  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
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
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  // 운동 불러오기
  useEffect(() => {
    dispatch(listPose());
  }, [dispatch]);

  return (
    <>
      {/* {console.log(poseList)}  운동 리스트 */}
      <PlanAddCom
        columns={columns}
        onDragEnd={onDragEnd}
        setColumns={setColumns}
      />
    </>
  );
};

export default withRouter(PlanAddForm);
