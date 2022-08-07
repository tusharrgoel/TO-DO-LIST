import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../initial-data';
import Taskcolumn from './Taskcolumn';

const Taskcontainer = styled.div`
    ${'' /* width: 97.5vw; */}
    width: fit-content;
    height: 78.625vh;
    margin-left:2.5vw;
    padding-left: 5px;
    margin-top: 19vh;
    background-color: #0079BF;
    display: flex;
    justify-content: space-evenly;
    align-items: start;
`;

const Addtasklist = styled.div`
    min-width: 272px;
    width: 272px;
    background-color: #3394CC;
    margin: 0 4px;
    border-radius: 3px;
    padding: 10px 8px 8px;
    display: flex;
    align-items: center;
    justify-content: start;
    &:hover{
        background-color: #66AFD9;
    }
`;

const Addbutton = styled.div`
    display: flex;
    align-items: center;
    color: #5e6c84;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    padding: 2px 0;
    cursor: pointer;
    color: #fff;
`;

const Addform = styled.form`
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
`;

const Addinput = styled.input`
    width: 100%;
    background-color: #fff;
    border: 2px solid #0079bf;
    border-radius: 3px;
    outline: none;
    box-sizing: border-box;
    padding: 8px 12px;
    margin-bottom: 8px;
`;

const Colcontainer = styled.div`
    min-width: 272px;
    width: 272px;
    height: auto;
    max-height: calc(100vh - 180px);
    overflow-y: auto;
    background-color: #ebecf0;
    margin: 0 4px;
    border-radius: 3px;
    padding: 10px 8px 8px;
`;

const Addsubmit = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Submitbut = styled.button`
    width: max-content;
    color: #fff;
    background-color: #0079bf;
    padding: 0 12px;
    height: 32px;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
`;

function Tasksbar() {
    const data = {...initialData}
    const Showform = {show: false};
    const [showf, setshowf] = React.useState({...Showform});
    const [state, setstate] = useState(data);

    const showForm = () => {
        setshowf({...showf, show: true});
    }
    const hideForm = () => {
        setshowf({...showf, show: false});
    };
    const getMyData = () => {
        if(!localStorage.getItem('my-data')){
            localStorage.setItem('my-data', JSON.stringify(state));
        } else {
            setstate(JSON.parse(localStorage.getItem('my-data')))
        }
    }
    useEffect(getMyData,);
    const onDragEnd = (result) => {
        const {destination, source, draggableId} = result;
        if(!destination){
            return;
        }
        if(destination.droppableId === source.droppableId && destination.index === source.index){
            return;
        }

        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];
        if(start === finish){
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            setstate(newState);
            return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };
        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        setstate(newState);
        localStorage.setItem('my-data', JSON.stringify(newState));
    }
    const addColumn = (e) => {
        e.preventDefault();
        const cid = String((Object.keys(state.columns).length)+1);
        const data = {
            id: cid,
            title: e.target.listTitle.value,
            taskIds: [],
        }
        const newColumn = {...state.columns, [data.id] : data};
        state.columnOrder.push(data.id);
        const newState = {...state, columns: newColumn};
        setstate(newState);
        localStorage.setItem('my-data', JSON.stringify(newState));
        hideForm();
        e.target.listTitle.value = ""
    }
    const addTask = (data) => {
        const newTask = {
            id: String((Object.keys(state.tasks).length)+1),
            content: data.title,
        }
        const newTasks = {...state.tasks, [newTask.id]: newTask};
        const newColumn = {
            id: data.cid,
            title: state.columns[data.cid].title,
            taskIds: [...state.columns[data.cid].taskIds, newTask.id],
        }
        const newColumns = {...state.columns, [newColumn.id]: newColumn};
        const newState = {...state, tasks: newTasks, columns: newColumns};
        setstate(newState);
        localStorage.setItem('my-data', JSON.stringify(newState));
    }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <Taskcontainer>
            {state.columnOrder.map(columnId => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map(
                    taskId => state.tasks[taskId]
                );
                return(
                    <>
                        <Taskcolumn
                            addTask = {addTask}
                            key={column.id}
                            column = {column}
                            tasks = {tasks}
                        />
                    </>
                )
            })}
            {!showf.show?
                <Addtasklist onClick={showForm}>
                    <span style={{"color": "#fff"}} className='material-icons'>add</span>
                    <Addbutton>Add another list</Addbutton>
                </Addtasklist>
                :
                <Colcontainer>
                    <Addform onSubmit={addColumn}>
                        <Addinput type="text" required placeholder="Enter list title..." name="listTitle" autoFocus/>
                        <Addsubmit>
                            <Submitbut>
                                Add List
                            </Submitbut>
                            <span style={{"cursor": "pointer", "margin-left": "4px"}} className='material-icons' onClick={hideForm}>&#xe5cd;</span>
                        </Addsubmit>
                    </Addform>
                </Colcontainer>
            }
        </Taskcontainer>
    </DragDropContext>
  )
}

export default Tasksbar
