import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task';

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

const Coltitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    overflow-y: auto;
`;

const Colh = styled.h3`
    margin: 0;
    color: #172b4d;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 4px 8px 10px;
`;

const Colbut = styled.span`
    ont-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
`;

const Taskadd = styled.div`
    display: flex;
    align-items: center;
    color: #5e6c84;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    padding: 2px 0;
    cursor: pointer;
    &:hover{
        background-color: #DADCE2;
        color: #000;
    }
`;

const Taskaddbutton = styled.form`
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
`;

const Taskinput = styled.input`
    width: 100%;
    background-color: #fff;
    border: 2px solid #0079bf;
    border-radius: 3px;
    outline: none;
    box-sizing: border-box;
    padding: 8px 12px;
    margin-bottom: 8px;
`;

const Taskadddiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`; 

const Tasksubmitbutton = styled.button`
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
`;

const Tasklist = styled.div`
    min-height: 2px;
`;

const Taskhide = styled.span`
    width: 32px;
    height: 32px;
    line-height: 32px;
    color: #42526e;
    margin-left: 8px;
    cursor: pointer;
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
`;

function Taskcolumn(props) {
    const Formstate = { showstate:false }
    const [state, setState] = useState({...Formstate});

    const showForm = () => {
        setState({...state, showstate: true});
    }

    const hideForm = () => {
        setState({...state, showstate: false});
    }

    const addTask = (e) => {
        e.preventDefault();
        const data = {
            cid: props.column.id,
            title: e.target.cardTitle.value
        }
        props.addTask(data);
        hideForm();
        e.target.cardTitle.value=""
    }
  return (
    <>
        <Colcontainer>
            <Coltitle>
                <Colh>{props.column.title}</Colh>
                <Colbut></Colbut>
            </Coltitle>
            <Droppable droppableId={props.column.id}>
                {(provided,snapshot)=>(
                    <Tasklist ref={provided.innerRef} {...provided.droppableProps} >
                        {props.tasks.map((task,index)=>{
                            return(
                                <Task key={task.id} task={task} index={index} />
                            )
                        })}
                        {provided.placeholder}
                    </Tasklist>
                )}
            </Droppable>
            {!state.showstate ? 
                <Taskadd onClick={showForm}>
                    <Colbut></Colbut>
                    <span className='material-icons'>add</span>
                    Add a card
                </Taskadd>
            :
                <Taskaddbutton onSubmit={addTask}>
                    <Taskinput type="text" required placeholder='Enter a title for this card...' name='cardTitle'></Taskinput>
                    <Taskadddiv>
                        <Tasksubmitbutton>
                            Add card
                        </Tasksubmitbutton>
                            <span style={{"cursor": "pointer", "margin-left": "4px"}} className='material-icons' onClick={hideForm}>&#xe5cd;</span>
                        <Taskhide>

                        </Taskhide>
                    </Taskadddiv>
                </Taskaddbutton>
            }
            
        </Colcontainer>
      </>
  )
}

export default Taskcolumn


