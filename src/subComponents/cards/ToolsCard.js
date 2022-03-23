import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';




const Box = styled(motion.li)`
width: calc(5rem + 2vw);
height: calc(4rem + 4vw);
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
padding: 1rem 2rem;
border-radius: 50px 50px 50px;
display: flex;
flex-direction: column;
justify-content: space-around;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;
cursor: pointer;

&:hover{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
}


@media (max-width: 700px) {

}
`

const Title = styled.h2`
font-size: calc(0.4em + 0.6vw);
align-self: flex-start;
`

const Description = styled.h2`
display: flex;
font-size: calc(0.4em + 0.4vw);
font-family: 'Karla', sans-serif;
font-weight: 400;
border-top: 1.5px solid ${props => props.theme.body};
border-bottom: 1.5px solid ${props => props.theme.body};
padding: 5px;

${Box}:hover &{
    border-top: 1.5px solid ${props => props.theme.text};
    border-bottom: 1.5px solid ${props => props.theme.text};

}


`

const Tags = styled.div`
display: flex;
flex-direction: column;
`

const Tag = styled.div`
margin-right: 1rem;
font-size: calc(0.8em + 0.2vw);

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
            delay: 0.8,
        }
    }
}

export const ToolsCard = ({toolTitle,  tags }) => {
    return (
        <Box variants={Item}>
            <Title>{toolTitle}</Title>
            <Description>
                <Tags>
                    {
                        tags.map((t) => {
                            return <Tag>#{t}</Tag>
                        })
                    }
                </Tags>
            </Description>
        </Box>
    )
}
