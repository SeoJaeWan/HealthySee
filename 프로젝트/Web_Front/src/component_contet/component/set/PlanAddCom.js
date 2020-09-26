import React, { useState } from "react"
import { Container } from "../../style/Container_style"
import PlanPoseItemCom from "./PlanPoseItemCom"
import { PlanAddForm, BackgroundForm, ItemsForm } from "./style/PlanAddCom_style"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const PlanAddCom = ({ columns, onDragEnd, setColumns, onClick, poseList, onAddPose, onChange }) => {
  return (
    <>
      {console.log(columns)}
      <Container>
        <PlanAddForm>
          <div className="titleForm">
            <h1>운동 추가</h1>
            <button type="submit" className="completeButton" onClick={onClick}>
              완료
            </button>
          </div>
          <div className="contentsForm">
            <div className="leftForm">
              <div className="searchForm">
                <input className="inputForm" type="text"></input>
                <button className="searchButton" type="submit">
                  검색
                </button>
              </div>
              {/* 여기서 운동 리스트들이 나옴 */}
              <div className="itemForm">
                {poseList !== null
                  ? poseList.map((pose, index) => (
                      <PlanPoseItemCom
                        poseName={pose.EX_KO_Name}
                        key={index}
                        index={index}
                        onClick={onAddPose}
                      />
                    ))
                  : ""}
              </div>
            </div>
            <div className="rightForm">
              <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([columnId, column], index) => {
                  return (
                    <div className="columnForm" key={columnId}>
                      <div className="rextTimeForm">
                        <h2>휴식시간</h2>
                        <input className="resttimeInput" type="text" defaultValue="30"></input>
                        <h2>초</h2>
                      </div>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                          return (
                            <BackgroundForm
                              {...provided.droppableProps}
                              {...snapshot.isDraggingOver}
                              ref={provided.innerRef}
                              className="backgroundForm"
                              backcolor={snapshot.isDraggingOver}
                            >
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => {
                                      return (
                                        <ItemsForm
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            ...provided.draggableProps.style,
                                          }}
                                          backcolor={snapshot.isDragging}
                                        >
                                          {/* 여기서 그 contianer에 있는 item 값들을 불러와서넣어줫음 */}
                                          <h2>{item.PoseName}</h2>
                                          <dl>
                                            <dt>횟수 :</dt>
                                            <dd>
                                              <input
                                                type="text"
                                                value={item.PoseCount}
                                                onChange={onChange}
                                              ></input>
                                            </dd>
                                          </dl>
                                        </ItemsForm>
                                      )
                                    }}
                                  </Draggable>
                                )
                              })}
                              {provided.placeholder}
                            </BackgroundForm>
                          )
                        }}
                      </Droppable>
                    </div>
                  )
                })}
              </DragDropContext>
            </div>
          </div>
        </PlanAddForm>
      </Container>
    </>
  )
}

export default PlanAddCom
