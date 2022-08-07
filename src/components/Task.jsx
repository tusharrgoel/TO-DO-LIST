import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'

const Taskcontainer = styled.div`
    margin: 8px 0;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
    padding: 6px 8px 2px;
    cursor: pointer;
    &:hover{
        background-color: #F4F5F7;
    }
`;

const Taskdesign = styled.div`
    background-color: #eb5a46;
    width: 40px;
    height: 8px;
    margin: 0 4px 4px 0;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Taskcontent = styled.h3`
    margin: 0 0 4px;
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #172b4d;
`;

function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
        {(provided,snapshot)=>(
            <Taskcontainer
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                <Taskdesign/>
                <Taskcontent>
                    {props.task.content}
                </Taskcontent>
            </Taskcontainer>
        )}
    </Draggable>
  )
}

export default Task
