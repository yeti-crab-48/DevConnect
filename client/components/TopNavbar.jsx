import React from 'react'
import styled from 'styled-components';

export default function TopNavbar(props) {
    return (
        <Nav>
            <div className='logo'> Yeti Crab <img style={{cursor: 'pointer'}}onClick={() => window.location.href='/'} src='https://ctl.s6img.com/society6/img/wtsueCje5P7V1PfmBkZAvRbncac/w_700/prints/~artwork/s6-0034/a/16184776_15232469/~~/yeti-crab-prints.jpg?wait=0&attempt=0' width='30px'/>   </div>
        </Nav>
    )
}


const Nav = styled.nav`
    height: 30px;
    display: flex;
    justify-content: flex-end;
    top: 0;
    position: sticky;
    background: rgb(240,255,255);
    font-size: 20px;
    font-family: sans-serif;
    .logo {
        display: flex;
        align-items: center;
        img{
            margin: 0 10px;
        }
    }
    `