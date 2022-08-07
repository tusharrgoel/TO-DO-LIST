import React from 'react'
import styled from 'styled-components'
import 'material-icons/iconfont/material-icons.css';


const NavContainer = styled.div`
    width: 100vw;
    position: fixed;
    top: 0px;
    min-height: 2.75rem;
    background-color: #004269;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Navleft = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 40%;
`;

const Navright = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 25%;
`;

const NavimgCon = styled.div`
    width: fit-content;
    padding: 5px;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.02s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #4D7B96;
    } 
`;

const Navimg = styled.img`
    max-width: 20px;
`;

const Navgif = styled.img`
    max-width: 80px;
    margin:5px;
`;

const Navbutton = styled.button`
    background: inherit;
    border: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.02s ease;
    font-size: 15px;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
        background-color: #4D7B96;
    } 
`;

const Arrow = styled.img`
    max-width: 10px;
    margin-left: 2px;
`;

const Navcreate = styled.button`
    width: 70px;
    height: 35px;
    transition: all 0.02s ease;
    color: #fff;
    font-size: 15px;
    background-color: rgba(0,0,0,.24);
    border-radius: 5px;
    border: none;
    &:hover{
        background-color: #4D7B96;
    } 
`;
const Navinput = styled.input`
    width: 250px;
    height: 32px;
    border: 1px solid hsla(0,0%,100%,.25);
    border-radius: 3px;
    background-color: hsla(0,0%,100%,.3);
    color: hsla(0,0%,100%,.5);
    padding-left: 30px;
    outline: none;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    &::placeholder{
        color: hsla(0,0%,100%,.5);
    }
    &:focus{
        background-color: #fff;
        &::placeholder{
            color: #000;
        }
    }
`;
const Navuser = styled.div`
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
const Navsearch = styled.div`
    position: relative;
    margin-right: 8px;
    &:focus .searchicon{
        color: #000;
    }
`;

function Navbar() {
  return (
    <NavContainer>
    <Navleft>
        <NavimgCon>
            <Navimg src='https://trello-replica.web.app/static/media/apps_white.2aa687f0.svg'/>
        </NavimgCon>
        <NavimgCon>
            <Navgif src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1657656122/download_sjury2.gif" />
        </NavimgCon>
        <Navbutton>
            Workspaces
            <Arrow src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1657656506/arro_xl07ho.png"/>
        </Navbutton>
        <Navbutton>
            Recent
            <Arrow src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1657656506/arro_xl07ho.png"/>
        </Navbutton>
        <Navbutton>
            Starred
            <Arrow src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1657656506/arro_xl07ho.png"/>
        </Navbutton>
        <Navbutton>
            Templates
            <Arrow src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1657656506/arro_xl07ho.png"/>
        </Navbutton>
        <Navcreate>Create</Navcreate>
    </Navleft>
    <Navright>
        <Navsearch className='search'>
            <Navinput type="search" placeholder='Search'/>
            <span id="search" className="material-icons searchicon">&#xe8b6;</span>     
        </Navsearch>
        <NavimgCon>
            <Navimg src="https://trello-replica.web.app/static/media/info.23e92631.png"/>
        </NavimgCon>
        <NavimgCon>
            <Navimg src="https://trello-replica.web.app/static/media/notification.c7957132.png"/>
        </NavimgCon>
        <Navuser>
            QK
        </Navuser>
    </Navright>
    </NavContainer>
    
  )
}

export default Navbar