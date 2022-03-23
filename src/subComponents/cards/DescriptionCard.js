import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';




const Box = styled(motion.li)`
width: 17vw;
height: 26vh;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
padding: 5vh 2.5vw;
border-radius: 0 50px 0;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
}

@media (max-width: 700px) {
    width: 17vw;
    height: 20vh;
    padding: 0.01vh 6vw;
    justify-content: center;
    margin-top: 3%;
    margin-bottom: 5%;
    margin-right: 1.5%;
    margin-left: 1.5%;
    justify-content: center;
}

@media (max-width: 400px) {
    width: 17vw;
    height: 17vh;
    padding: 0.01vh 6vw;
    justify-content: center;
}
`

const Title = styled.h2`
font-size: calc(0.1px + 1.4vw);
align-self: center;
margin: 2% 0% 2% 0%;
@media (max-width: 700px) {
    font-size: calc(2px + 1.4vw);
}
`

const Description = styled.h2`
display: flex;
justify-content: center;
font-size: calc(1px + 0.9vw);
font-family: 'Karla', sans-serif;
font-weight: 400;
border-top: 1.5px solid ${props => props.theme.body};
border-bottom: 1.5px solid ${props => props.theme.body};
padding: calc(3px + 0.8vw);

${Box}:hover &{
    border-top: 1.5px solid ${props => props.theme.text};
    border-bottom: 1.5px solid ${props => props.theme.text};
}

@media (max-width: 700px) {
    font-size: calc(2.1px + 0.9vw);
    padding: 3px;
    width: 25vw;
    align-self: center





}

`


const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 1.3,
            delay: 0.6,
        }
    }
}

export const DescCard = ({name, description}) => {
    return (
        <Box variants={Item}>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
        </Box>
    )
}





