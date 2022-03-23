import React, {useState} from 'react'
import styled, { keyframes } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { useIsLowerThanMedium } from "../subComponents/BackgroundDivs/responsiveControl"


import { Borjgali } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'

import Intro from './CentralBoxMain/Intro'
import Second from './CentralBoxMain/Second'
import Third from './CentralBoxMain/Third'
import Fourth from './CentralBoxMain/Fourth'
import LeftDiv from '../subComponents/BackgroundDivs/LeftDiv'
import RightDiv from '../subComponents/BackgroundDivs/RightDiv'
import ThirdPageDiv from '../subComponents/BackgroundDivs/ThirdPageDiv'
import FourthPageDiv from '../subComponents/BackgroundDivs/FourthPageDiv'
import Navbar from './navbar/Navbar'


const MainContainer = styled(motion.div)`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow-x: hidden;
display: flex;
flex-direction: column;

h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif ;
    font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
overflow-x: hidden;
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
    display: ${props => props.click ? 'none' : "flex"};
    padding-top: 1rem;
}
`

const NavbarContainer = styled.div`
display: flex;
position: absolute;
margin-top: 4.2%;
align-self: center;
justify-content: center;
width: 50vw;
/* border: 2px pink solid; */
transition: 2s ease-in-out;
`





function Main() {
    const [click, setClick] = useState(false)
    const [show, setShow] = useState(false);
    const [expanded, setExpanded] = useState(false)

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
        } else {
        setShow("third") 
        }
    }

    const fourthHandle = () => {
        if (show === "fourth") {
            setShow("fourth")
        } else {
        setShow("fourth") 
        }
    }

    const detailsHandle = () => {
        expanded ? setExpanded(false) : setExpanded(true)
    }

    const isMedium = useIsLowerThanMedium();
    const BorjgaliMain = () => {
    return(
        <div>{
    isMedium
    ? 
        <Borjgali  onClick={() => handleClick()} width={click ? 130 : 300} height={click ? 160 : 250} fill={show === "fourth" ?  "white" : "black"} /> 
    :   
        <Borjgali  onClick={() => handleClick()} width={click ? "23vw" : 300} height={click ? "23vw" : 250}  fill={show === "fourth" ?  "white" : "black"} /> 
}
    </div>
    )
}

    return (
        <MainContainer>
            {expanded ? null : 
                    <Container>
                        {/* <PowerButton /> */}
                        <LogoComponent theme={click ? 'dark' : "light"}/>
                        <SocialIcons theme={click}/>
                        <Center click={click}>
                            <BorjgaliMain />
                            <span>Click Here</span>
                        </Center>

                    </Container>
}
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
                {click ? <Fourth expanded={expanded} detailsHandle={detailsHandle} show={show}></Fourth> : null}

                {expanded ? null 
                    : 
                    <NavbarContainer>
                        {show ? <Navbar show={show} first={firstHandle} second={secondHandle} third={thirdHandle} fourth={fourthHandle} /> : null}
                    </NavbarContainer>
                }

                


        </MainContainer>
    )
}

export default Main


