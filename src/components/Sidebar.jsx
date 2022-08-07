import React from 'react'
import styled from 'styled-components'

const SideContainer = styled.div`
    width: 40px;
    height: 97vh;
    z-index: 15;
    padding: 4px;
    box-sizing: border-box;
    background-color: #0480c9;
    background-image: linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.05));
    position: fixed;
    top: 44px;
    left: 0;
    box-shadow: -6px 2px 8px 1px #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #ffffff;
        background-image: none;
    }
`;

const Sidebutton = styled.button`
    width: 32px;
    height: 32px;
    background-color: #fff;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #fff;
`;

const Sideimg = styled.img`
    width: 20px;
    height: 20px;
    position: relative;
    top: 2px;
    padding-right: 8px;
`;

const SideArrow = styled.button`
    background-color: transparent;
    margin-top: 8px;
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #fff;
`;

function Sidebar() {
  return (
    <SideContainer>
        <Sidebutton>
            <Sideimg src="https://trello-replica.web.app/static/media/user-blue.022f390c.png"/>
        </Sidebutton>
        <SideArrow>
            <Sideimg src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1657658825/sidearrow_uezrga.png" />
        </SideArrow>
    </SideContainer>
  )
}

export default Sidebar