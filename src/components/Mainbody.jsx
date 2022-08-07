import React from 'react';
import Sidebar from './Sidebar';
import Infobar from './Infobar';
import styled from 'styled-components';
import Userbar from './Userbar';
import Tasksbar from './Tasksbar';

const Maincontainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
`;

function Mainbody() {
  return (
    <>
        <Sidebar/>
        <Infobar/>
        <Userbar/>
        <Maincontainer>
            <Tasksbar/>
        </Maincontainer>
    </>
  )
}

export default Mainbody