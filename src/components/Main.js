import React, {useState, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import { Borjgali } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'

import Intro from './CentralBoxMain/Intro'
import Second from './CentralBoxMain/Second'
import Third from './CentralBoxMain/Third'
import Fourth from './CentralBoxMain/Fourth'
import LeftDiv from '../subComponents/SideBarDivs/LeftDiv'
import RightDiv from '../subComponents/SideBarDivs/RightDiv'
import ThirdPageDiv from '../subComponents/SideBarDivs/ThirdPageDiv'
import FourthPageDiv from '../subComponents/SideBarDivs/FourthPageDiv'
import Navbar from './navbar/Navbar'



const MainContainer = styled(motion.div)`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;

h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif ;
    font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text };
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index: 1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text };
text-decoration: none;
z-index: 1;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg)
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%' };
left: ${props => props.click ? '92%' : '50%' };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
z-index: 5;

&>:first-child{
    animation: ${rotate} infinite 20s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}
`

const NavbarContainer = styled(motion.div)`
background-color: red;
border: pink solid 2px;
/* height: 50px;
width: 50px; */

`

function Main() {
    const [click, setClick] = useState(false)
    const [show, setShow] = useState(false);
    const [socialcolor, setSocial] = useState('white')
    const handleClick = () => {
        setClick(!click)
        setShow("first")
        if (click === true) {
            setShow(false)
        }
    }
    
    const firstHandle = () => {
        if (show === "first") {
            setShow("first")
        } else {setShow("first")}
        console.log("11")
    }

    const secondHandle = () => {
        if (show === "second") {
            setShow("second")
        } else {setShow("second")}
        console.log("22")
    }

    const thirdHandle = () => {
        if (show === "third") {
            setShow("third")
            setSocial('dark')
        } else {
        setShow("third") 
        setSocial('dark')
        }
        console.log("33")

    }
    const fourthHandle = () => {
        if (show === "fourth") {
            setShow("fourth")
            setSocial('dark')
        } else {
        setShow("fourth") 
        setSocial('dark')
        }
        console.log("33")
    }


    return (
        <MainContainer>

            <Container>
               {/* <PowerButton /> */}
               <LogoComponent theme={click ? 'dark' : "light"}/>
               <SocialIcons theme={click ? 'dark' : "light"}/>
               <Center click={click}>
                   <Borjgali onClick={() => handleClick()} width={click ? 120 : 300} height={click ? 250 : 250} fill='currentColor' />
                   {/* <img source={brjg} height={100} width={100}></img> */}

                   <span> {click ? "What this symbol means?" : "Click Here"}</span>
               </Center>

            </Container>
            <AnimatePresence>
                {click ? <LeftDiv show={show}> </LeftDiv> : null}
            </AnimatePresence>
            <AnimatePresence>
                {click ? <RightDiv show={show}></RightDiv> : null}
            </AnimatePresence>
            <AnimatePresence>
                {click ? <FourthPageDiv show={show}></FourthPageDiv> : null}
            </AnimatePresence>
            <AnimatePresence>
                {click ? <ThirdPageDiv show={show}></ThirdPageDiv> : null}
            </AnimatePresence>
            
                {click ? <Intro show={show}></Intro> : null}
                {click ? <Second show={show}></Second> : null}
                {click ? <Third show={show}></Third> : null}
                {click ? <Fourth show={show}></Fourth> : null}
                    
                    {show ? <Navbar show={show} first={firstHandle} second={secondHandle} third={thirdHandle} fourth={fourthHandle} /> : <div></div>} 

        </MainContainer>
    )
}

export default Main



{/* <Contact to={{pathname:"mailto:tornike.jin@gmail.com"}}>
<motion.h2
initial={{
    y: -200,
    transition: {
        type:'spring',
        duration: 1.5,
        delay: 1}
    }}
 animate={{
     y: 0,
     transition: {
         type:'spring',
         duration: 1.5,
         delay: 1}
     }}
whileHover={{scale: 1.1}}
whileTap={{scale:0.9}}
>
    Say Hi.....
</motion.h2>
</Contact>

<BLOG to="/blog">
<motion.h2
 initial={{
 y: -200,
 transition: {
     type:'spring',
     duration: 1.5,
     delay: 1}
 }}
 animate={{
     y: 0,
     transition: {
         type:'spring',
         duration: 1.5,
         delay: 1}
     }}
whileHover={{scale: 1.1}}
whileTap={{scale:0.9}}
>
    blog
</motion.h2>
</BLOG>

     <WORK to="/work" click={click}>
         <motion.h2
         initial={{
         y: -200,
         transition: {
             type:'spring',
             duration: 1.5,
             delay: 1}
         }}
         animate={{
             y: 0,
             transition: {
                 type:'spring',
                 duration: 1.5,
                 delay: 1}
             }}
             whileHover={{scale: 1.1}}
             whileTap={{scale:0.9}}
             >
                 WORK
             </motion.h2>
     </WORK>
<BottomBar>
     <ABOUT to="/about" click={click}>
         <motion.h3
         initial={{
             y: 200,
             transition: {
                 type:'spring',
                 duration: 1.5,
                 delay: 1}
             }}
             animate={{
                 y: 0,
                 transition: {
                     type:'spring',
                     duration: 1.5,
                     delay: 1}
                 }}
             whileHover={{scale: 1.1}}
             whileTap={{scale:0.9}}
             >
                 about
         </motion.h3>
     </ABOUT>

     <SKILLS to="/skills">
         <motion.h3
         initial={{
             y: 200,
             transition: {
                 type:'spring',
                 duration: 1.5,
                 delay: 1}
             }}
             animate={{
                 y: 0,
                 transition: {
                     type:'spring',
                     duration: 1.5,
                     delay: 1}
                 }}
             whileHover={{scale: 1.1}}
             whileTap={{scale:0.9}}
             >
                 My Skills
         </motion.h3>
     </SKILLS>
</BottomBar> */}
