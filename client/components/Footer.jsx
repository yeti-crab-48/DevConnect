import React from 'react'
import styled from 'styled-components';

export default function Footer(props) {
    

    return (
        <FooterEl>
            <div className="dev">
                <span>🌿 Kerolos </span>
                <span>🤪 Miko </span>
                <span>🤑 Eric </span>
                <span>🐱‍👤 Nick </span>
                <span>🐒 Will </span>
            </div>
            <div className="logo">
                {/* <img src="https://static.wikia.nocookie.net/octonauts/images/0/00/Yeti_crab.png/revision/latest/scale-to-width-down/255?cb=20190204201106" alt="" /> */}
            </div>
            <div className="contact">
                contact
            </div>
        </FooterEl>
    )
}

const FooterEl = styled.footer`
    position: absolute;
    width: 100%;
    background: white;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    .dev {
        display: flex;
        flex-direction: column;
    }
`
