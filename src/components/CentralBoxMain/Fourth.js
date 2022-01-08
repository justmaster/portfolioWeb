import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'



const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 85vw;
height: 65vh;
display: flex;
overflow: hidden;
z-index: 2;
backdrop-filter: blur(2px);

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.body} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.body} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.body};
    
    
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

flex-direction: column;
justify-content: center;
margin-right: 1px;


`
const Line = styled(motion.span)`
margin-left: 6%;
width: 35rem;
height: 0.07rem;
background-color: #505050;
`

const SubBoxSecond = styled(motion.div)`
width: 50%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
`


//frame animation configs here

const boxenter = {
    hidden: {width: 0, opacity: 0},
    animate: {width: '70vw', opacity: 1, transition: { type: 'spring', duration: 1.3, delay: 0.5, }},
    exit: {width: 0, opacity: 0, transition: {type: 'tween', duration: 0.7}}
}

const conditions = {
    hidden: {opacity:0},
    show: {opacity:1, transition: { duration: 0.5, delay: 1.9}},
    exit: {width: 0, opacity: 0, transition: {type: 'spring', duration: 1}},
}

const Fourth = ({ show }) => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
      if (show === "fourth") {setRender(true)}
      else {setRender(false)}
    }, [show]);

    return (
        <AnimatePresence>

        {shouldRender && (
        <Box
        variants={boxenter}
        initial='hidden'
        animate='animate'
        exit='exit'
        >
            <SubBox>
                <h1 style={{color: "white"}}>Fourth Cat</h1>
            </SubBox>

            <SubBoxSecond
            variants={conditions}
            initial='hidden'
            animate='show'
            exit='exit'
            >
                <h1 >Fourth Cat</h1>

            </SubBoxSecond>
        </Box>
        
        )
}
        </AnimatePresence>
    )
}

export default Fourth