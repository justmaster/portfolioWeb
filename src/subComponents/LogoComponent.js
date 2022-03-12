import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};

position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;

@media (max-width: 1000px) {
    margin-top: -2%;
    left: 4%;
    font-size: 5vw;
    }
`

function LogoComponent(props) {
    return (
        <Logo color={props.theme}>
            TJ
        </Logo>
    )
}

export default LogoComponent
