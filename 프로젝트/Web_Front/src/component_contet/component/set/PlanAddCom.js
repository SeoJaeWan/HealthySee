import React, { useState } from "react";
import { Container } from "../../style/Container_style";
import PlanPoseItemCom from "./PlanPoseItemCom";
import { PlanAddForm } from "./style/PlanAddCom_style";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const PlanAddCom = ({ columns, onDragEnd, setColumns }) => {
  return (
    <>
      {console.log(columns)}
      <Container>
        <PlanAddForm>
          <div className="titleForm">
            <h1>운동 추가</h1>
            <button type="submit" className="completeButton">
              완료
            </button>
          </div>
          <div className="contentsForm">
            <div className="itemForm">
              <PlanPoseItemCom />
              <PlanPoseItemCom />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <DragDropContext
                onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
              >
                {Object.entries(columns).map(([columnId, column], index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      key={columnId}
                    >
                      <h2>{column.name}</h2>
                      <div style={{ margin: 8 }}>
                        <Droppable droppableId={columnId} key={columnId}>
                          {(provided, snapshot) => {
                            return (
                              <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                  background: snapshot.isDraggingOver
                                    ? "lightblue"
                                    : "lightgrey",
                                  padding: 4,
                                  width: 250,
                                  minHeight: 500,
                                }}
                              >
                                {column.items.map((item, index) => {
                                  return (
                                    <Draggable
                                      key={item.id}
                                      draggableId={item.id}
                                      index={index}
                                    >
                                      {(provided, snapshot) => {
                                        return (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                              userSelect: "none",
                                              padding: 16,
                                              margin: "0 0 8px 0",
                                              minHeight: "50px",
                                              backgroundColor: snapshot.isDragging
                                                ? "#263B4A"
                                                : "#456C86",
                                              color: "white",
                                              ...provided.draggableProps.style,
                                            }}
                                          >
                                            {item.content}
                                          </div>
                                        );
                                      }}
                                    </Draggable>
                                  );
                                })}
                                {provided.placeholder}
                              </div>
                            );
                          }}
                        </Droppable>
                      </div>
                    </div>
                  );
                })}
              </DragDropContext>
            </div>
          </div>
        </PlanAddForm>
      </Container>
    </>
  );
};

export default PlanAddCom;
