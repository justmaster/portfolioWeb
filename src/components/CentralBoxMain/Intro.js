import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'


const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
height:55vh;
display: flex;
overflow: hidden;


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
    z-index:1;
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

/* .pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
} */
`
const Line = styled(motion.span)`
margin-left: 6%;
width: 30rem;
height: 0.06rem;
background-color: #505050;
`

const SubBoxSecond = styled(motion.div)`
width: 50%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
&:hover {
    ${Line} {
        background-color: grey;
    }
}
`

const LineContainer = styled(motion.div)`
display: flex;
flex-direction: row;
margin-left: 5%;
width: 90%;
padding: 0.5rem; 
cursor: pointer;
`

const FirstWrap = styled.div`
display: flex;
flex-direction: column;
color: grey;
font-family: maroon;
font-size: 1.6rem;
font-family: 'Raleway', sans-serif;
font-weight: 600;
/* font-family: 'Ubuntu Mono', monospace; */
`

const SecondWrap = styled.div`
position: absolute;
display: flex;
flex-direction: column;
color: black;
margin-left: 31%;
font-size: 1.6rem;
/* font-family: maroon; */
font-family: 'Cormorant Garamond', serif; 
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
}
`

//frame animation configs here
const boxenter = {
    hidden: {height: 0},
    animate: {height: '55vh', transition: { type: 'spring', duration: 1.5, delay: 0.7, }},
    exit: {height: 0, opacity: 0, transition: {type: 'tween', duration: 1}}
}

const conditions = {
    hidden: {opacity:0},
    show: {opacity:1, transition: { duration: 0.5, delay: 1.2, staggerChildren: 2}},
    exit: {width: 0, opacity: 0.1, opacity: 0, transition: {type: 'spring', duration: 1, staggerChildren: 0.1}},
}

const linedraw = {
    hidden: {width: 0},
    show: {width: "28rem", transition: { type: 'tween', duration: 0.9, delay: 1.3,}},
    exit: {width: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
}


const Intro = ({ show }) => {

    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
      if (show === "first") {setRender(true)}
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
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Tornike</h3>
                    <h6>I create web and mobile applications using react and react-native</h6>
                </Text>
            </SubBox>
            <SubBoxSecond
            variants={conditions}
            initial='hidden'
            animate='show'
            exit='exit'
            >

                <Line variants={linedraw} initial='hidden' animate='show' exit='exit'/>
                    <LineContainer>
                        <FirstWrap>
                            <h>Name:</h>
                            <h>Age:</h>
                            <h>Birth Place:</h>
                        </FirstWrap>

                        <SecondWrap>
                            <h>Tornike Jintchveleishvili</h>
                            <h>25</h>
                            <h>Moscow Russia</h>
                        </SecondWrap>
                    </LineContainer>
                <Line variants={linedraw} initial='hidden' animate='show' exit='exit'/>

                    <LineContainer>
                        <FirstWrap>
                            <h>Address:</h>
                            <h>E-mail:</h>
                            <h>Phone:</h>
                        </FirstWrap>

                        <SecondWrap>
                            <h>Heidelberg Germany</h>
                            <h>tornike.jin@gmail.com</h>
                            <h>599 42 37 67</h>
                        </SecondWrap>
                    </LineContainer>

                <Line variants={linedraw} initial='hidden' animate='show' exit='exit'/>

                    <LineContainer>
                        <FirstWrap>
                            <h>Languages:</h>
                            <h>Freelance:</h>
                        </FirstWrap>

                        <SecondWrap>
                            <h>Javascript, Python</h>
                            <h>Available</h>
                        </SecondWrap>
                    </LineContainer>
            </SubBoxSecond>
        </Box>
        )
}
        </AnimatePresence>
    )
}

export default Intro