import React from 'react'
import styled from 'styled-components';

export default function TopNavbar(props) {
    

    return (
        <Nav>
            <div className='logo'>Yeti Crab</div>
        </Nav>
    )
}

const Nav = styled.nav`
    height: 53px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    top: 0;
    position: sticky;
    background: white;
`
const Logo = styled.div`

`