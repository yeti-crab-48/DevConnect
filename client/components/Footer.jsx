import React from 'react'
import styled from 'styled-components';

export default function Footer(props) {
    

    return (
        <FooterEl>
                <div>🌿 Kerolos</div>
                <div>🤪 Miko </div>
                <div>🤑 Eric </div>
                <div>🐱 Nick </div>
                <div>🐒 Will </div>
        </FooterEl>
    )
}

const FooterEl = styled.footer`
    position: absolute;
    width: 100%;
    background: rgb(240,255,255);
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
`
