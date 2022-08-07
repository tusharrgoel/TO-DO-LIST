import React from 'react'
import styled from 'styled-components'

const Infocontainer = styled.div`
    width: 97.5vw;
    z-index: -50;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: fixed;
    margin-top: 3vw;
    border-bottom: 1px solid #f4f5f7;
    padding: 8px;
    ${'' /* margin-top:2.5vw; */}
    box-sizing: border-box;
`;

const Infocenter = styled.div`
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Infoimg = styled.img`
    width: 16px;
    height: 16px;
    padding-right: 10px;
`;

const Infospan = styled.span`
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: #172b4d;
`;

const Infolink = styled.a`
    font-size: 14px;
    color: #6b778c;
    font-weight: 400;
    text-decoration: underline;
    margin: 0 0 0 10px;
`;

function Infobar() {
  return (
    <Infocontainer>
        <Infocenter>
            <Infoimg src="https://trello-replica.web.app/static/media/earth_green.f5dba22e.svg"/>
            <Infospan>This board is set to public. Board admins can change its visibility setting at any time.</Infospan>
            <Infolink>Learn more here</Infolink>
        </Infocenter>
        <span style={{"color": "#42526e","cursor": "pointer", 'position': "absolute","right": "0", "padding": "8px",}} className='material-icons'>&#xe5cd;</span>
    </Infocontainer>
  )
}

export default Infobar