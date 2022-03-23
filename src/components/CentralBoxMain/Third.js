import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import MapComponent from '../map/MapComponent'
import Location from '../../assets/Images/location.png'
import Contact from '../../assets/Images/send.png'
import ContactForm from '../contactForm/contactForm'
import { useIsMedium } from "../../subComponents/BackgroundDivs/responsiveControl"


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 54%;
transform: translate(-50%, -50%);
width: 70vw;
height: 77vh;
display: flex;
flex-direction: row;
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

    @media (max-width: 1000px) {
    flex-direction: column;
    width: 72vw;
    height: 80vh;
    margin-bottom: 0;
    justify-content: space-evenly;

    }
    @media (max-width: 700px) {
    width: 65vw;
    height: 90vh;
    margin-bottom: 0;
    justify-content: space-evenly;

    }
`
const SubBox = styled(motion.div)`
width: 50%;
height: 100%;
position: relative;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 50%;
    overflow: hidden;
    }

`

const Line = styled(motion.span)`
width: 0.06rem;
height: calc(2rem + 40vw);
background-color: #505050;

@media (max-width: 1000px) {
    display: none;
    margin-top: 0.8%;
}
`

const SubBoxSecond = styled(motion.div)`
width: 50%;
height: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-evenly;
overflow: hidden;

@media (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 50%;
}
`


const Header = styled(motion.div)`
width: 80%;
height: 8%;
display: flex;
flex-direction: row;
justify-content: center;
align-self: center;



.type {
    color: 'black';
    font-size: calc(0.9rem + 1vw);
    font-family: 'Raleway', sans-serif;
    align-self: center;
    text-align: center;
    margin: 5%;
}
&:hover {
    .type {
        color: white;
        cursor: pointer;
    }
    .image{
        color: white;
    }
}

.image {
    height: calc(1.7rem + 1vh);
    width: calc(1.4rem + 1vw);
    margin: 1%;

    @media (max-width: 1000px) {
        height: calc(1.2rem + 1vh);
        width: calc(1.4rem + 1vw);
        margin: 1%;
}
}
`


//frame animation configs here

const boxenter = {
    hidden: {width: 0, opacity: 0},
    animate: {width: '80vw', opacity: 1, transition: { type: 'spring', duration: 1.3, delay: 0.5, }},
    exit: {width: 0, opacity: 0, transition: {type: 'tween', duration: 0.7}}
}

const conditions = {
    hidden: {opacity:0},
    show: {opacity:1, transition: { duration: 1, delay: 1.3}},
    exit: {opacity: 0, transition: {type: 'tween', duration: 0.2}},
}




const Third = ({ show }) => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
      if (show === "third") {setRender(true)}
      else {setRender(false)}
    }, [show]);


    
    const isMedium = useIsMedium();
    const linedraw = 
    isMedium 
    ?
    {
        hidden: {height: 0},
        show: {height: "100vh", transition: { type: 'tween', duration: 1.3, delay: 0.5,}},
        exit: {height: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
    } 
    :
    {
        hidden: {height: "1.3px", width: 0},
        show: {height: "1.3px", width: "100vw", transition: { type: 'tween', duration: 1.3, delay: 0.5,}},
        exit: {width: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
    } 

    return (
        <AnimatePresence>
        {shouldRender && (
        <Box
            variants={boxenter}
            initial='hidden'
            animate='animate'
            exit='exit'
        >

            <SubBox variants={conditions} initial="hidden" animate='show' exit='exit'
            >
                <Header>
                    <motion.img className='image' src={Location} /> 
                    <motion.h1  className='type'>Where I Am Right Now</motion.h1>
                </Header>
                <MapComponent show={shouldRender}/>
            </SubBox>

            <Line variants={linedraw} initial='hidden' animate='show' exit='exit'/>

            <SubBoxSecond variants={conditions} initial='hidden'animate='show' exit='exit'>
                <Header>
                    <motion.img className='image' src={Contact} /> 
                    <motion.h1  className='type'>Contact Me</motion.h1>
                </Header>
                
                <ContactForm />

            </SubBoxSecond>
        </Box>
        )}
        </AnimatePresence>
    )
}

export default Third