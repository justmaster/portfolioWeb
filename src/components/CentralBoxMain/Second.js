import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'



const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height: 60vh;
display: flex;
overflow: hidden;

z-index: 2;
backdrop-filter: blur(2px);

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    
    
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

flex-direction: column;
margin-right: 1px;

.type {
    /* background-color: white; */
    width: fit-content;
    color: #E0E0E0 ;
    font-size: calc(0.7rem + 1vh);
    font-family: 'Karla', sans-serif ;
    margin: 1% 3%;
    padding: 0.5%;
}
`

const JobContainer = styled.div`
display: flex;
flex-direction: column;
border-left: white 3px solid;
margin-top: 1%;
margin-left: 0.4%;
margin-right: 0.5%;
padding: 1%;
cursor: pointer;

&:hover {
    border-left: white 3.2px solid;
    /* transition: 0.1s ease-in-out; */
}

h1 {
    color: white;
    font-size: calc(0.4rem + 1vh);
}

`

const DescTime = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
color: white;

h1{
    color: white;
    font-size: calc(0.4rem + 1vh);
}
h2{
    color: brown;
    font-size: calc(0.5rem + 1vh);
}
h3{
    color: brown;
    font-size: calc(0.5rem + 1vh);
}
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
    animate: {width: '65vw', opacity: 1, transition: { type: 'spring', duration: 1.5, delay: 0.7, }},
    exit: {width: 0, opacity: 0, transition: {type: 'tween', duration: 1}}
}

const conditions = {
    hidden: {opacity:0},
    show: {opacity:1, transition: { duration: 0.5, delay: 1.9}},
    exit: {width: 0, opacity: 0, transition: {type: 'spring', duration: 1}},
}

const Intro = ({ show }) => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
      if (show === "second") {setRender(true)}
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
                <h1 className='type'>Employment</h1>
                <JobContainer>
                    <DescTime>
                        <h1>Lead UX Designer</h1>
                        <h1>2011-Present</h1>
                    </DescTime>
                    <DescTime> 
                        <h2> Apple Inc. </h2>
                    </DescTime>
                    <h1>Worked in So many projects my dick is hard as fuck</h1>
                </JobContainer>

                <JobContainer>
                    <DescTime>
                        <h1>Front End Developer</h1>
                        <h1>2020-2021</h1>
                    </DescTime>
                    <DescTime> 
                        <h2> Petro - Energy Caspian East </h2>
                    </DescTime>
                    <h1>Supervised transdimentional hoes</h1>
                </JobContainer>

                <JobContainer>
                    <DescTime>
                        <h1>Nigga in Paris</h1>
                        <h1>2020-2021</h1>
                    </DescTime>
                    <DescTime> 
                        <h2> WHERE ARE THE HOES</h2>
                    </DescTime>
                    <h1>Supervised transdimentional hoes</h1>
                </JobContainer>

                <h1 className='type'>Education</h1>
                <JobContainer>
                    <DescTime>
                        <h1>BBA</h1>
                        <h1>2014 - 2018</h1>
                    </DescTime>
                    <DescTime> 
                        <h2> Georgian - American University (GAU)</h2>
                    </DescTime>
                    <h1>Supervised transdimentional hoes</h1>
                </JobContainer>

                <JobContainer>
                    <DescTime>
                        <h1>React Native Expert Course</h1>
                        <h1>2019</h1>
                    </DescTime>
                    <DescTime> 
                        <h2> Harvard CS50</h2>
                    </DescTime>
                    <h1>Supervised transdimentional hoes</h1>
                </JobContainer>

            </SubBox>

            <SubBoxSecond
            variants={conditions}
            initial='hidden'
            animate='show'
            exit='exit'
            >
                <h1 >Second Cat</h1>

            </SubBoxSecond>
        </Box>
        
        )
}
        </AnimatePresence>
    )
}

export default Intro