import React from 'react';
import styled from 'styled-components';

const Usercontain = styled.div`
padding-top: 10px;
    display: flex;
    z-index: -18
    align-items: center;
    padding: 4px 0 8px;
    background-color: #0079BF;
    width: 97.5vw;
    margin-left: 2.5vw;
    position: fixed;
    margin-top: 12.865vh;
`;

const Userh = styled.h1`
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    padding: 0 12px;
    color: #fff;
    margin: 0;
`;

const Userstar = styled.div`
    width: 32px;
    height: 32px;
    color: #fff;
    background-color: hsla(0,0%,100%,.3);
    border-radius: 3px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Userseparate = styled.div`
    width: 1px;
    height: 16px;
    background-color: hsla(0,0%,100%,.3);
    margin: 8px;
`;

const Userbutton = styled.button`
    color: #fff;
    background-color: hsla(0,0%,100%,.3);
    padding: 0 12px;
    width: 96px;
    height: 32px;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    &:hover{
        background-color: #66AFD9;
    }
`;

const Userimg = styled.img`
    top: 0;
    width: 16px;
    height: 16px;
    top: 1px;
    position: relative;
    top: 2px;
`;

const Userspan = styled.span`
    color: #fff;
    background-color: hsla(0,0%,100%,.3);
    padding: 0 12px;
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const Userlogo = styled.span`
    color: #172b4d;
    background-color: #dfe1e6;
    height: 32px;
    width: 32px;
    line-height: 32px;
    font-size: 14px;
    text-align: center;
    border-radius: 50%;
    font-weight: 700;
    margin-left: 4px;
`;

function Userbar() {
  return (
    <Usercontain>
        <Userh>Kanban Board</Userh>
        <Userstar>
            <span className='material-icons staricon'>star_border</span>
        </Userstar>
        <Userseparate/>
        <Userbutton>
            <Userimg src="https://trello-replica.web.app/static/media/earth_white.b0d834ac.svg"/>
            <Userspan>Public</Userspan>
        </Userbutton>
        <Userseparate/>
        <Userlogo>AH</Userlogo>
    </Usercontain>
  )
}

export default Userbar