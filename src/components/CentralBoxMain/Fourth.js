import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import AmazonLogo from '../../assets/Portfolio.media/ACicon.png'
import TwitterLogo  from '../../assets/Portfolio.media/twitter.png'

import phone_svg from "../../assets/Portfolio.media/smartphone.svg"
import twitter from "../../assets/Portfolio.media/twitter.png"
import spotify from "../../assets/Portfolio.media/spotify.png"
import Flipcard from "../../subComponents/flipcard/flipcard"
import TypeButton from '../../subComponents/TypeButton/TypeButton'
// import "./CentralBoxCSS/Fourth.css"
import { Flip, gsap } from 'gsap/all'
import AmazonCard from '../../subComponents/AppCards/AmazonApp/AmazonCard'
import TaxiCard from '../../subComponents/AppCards/TaxiApp/TaxiCard'
import CryptoCard from '../../subComponents/AppCards/CryptoApp/CryptoCard'


const RNContainer = styled(motion.div)`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
justify-self: center;
overflow: visible;
/* z-index: 1; */
`

const AppType = styled(motion.h)`
position: absolute;
color: white;
font-size: 20;
margin-bottom: 27%;
z-index: 2;
`

const MainBox = styled(motion.div)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: transparent;
position: absolute;
z-index:4;
height: 100vh;
width:100vw;
`






//framer animation configs here

const boxenter = {
    hidden: {width: 0, opacity: 0},
    animate: {width: '70vw', opacity: 1, transition: { type: 'spring', duration: 1.3, delay: 0.6, }},
    exit: {width: 0, opacity: 0, transition: {type: 'tween', duration: 0.7}}
}

const conditions = {
    hidden: {  opacity: 0},
    show: {opacity: 1,   transition: { type: 'tween', duration: 1, delay: 0.7}},
    exit: {opacity: 0,  transition: {type: 'spring', duration: 1}},
}

const Fourth = ({ show, detailsHandle, expanded}) => {

    const [shouldRender, setRender] = useState(false);
    const [active, setActive] = useState('mobile');

    const HandleMobile = () => {
        if (active === "mobile") {
            setActive("none")
            console.log(active)

        } else {
            setActive("mobile") 
            console.log(active)
        }
    }

    const HandleWeb = () => {
        if (active === "web") {
            setActive("none")
            console.log(active)
        } else {
        setActive("web") 
        console.log(active)
        }
    }


    useEffect(() => {
    if (show === "fourth") 
        {setRender(true)}
    else 
        {setRender(false)}
    },);

    return (

        
    <AnimatePresence>
                {shouldRender && (  

                    <MainBox>
                         {expanded ? null: 
                        <AppType variants={conditions} initial="hidden" animate="show" exit="exit">
                            <TypeButton first={HandleMobile}  second={HandleWeb} active={active}/>
                        </AppType> 
                        }

                        {/* {active === "mobile" ? */}
                        {/* <RNContainer variants={conditions} initial="hidden" animate="show" exit="exit"> */}
                            <AmazonCard expanded={expanded} detailsHandle={detailsHandle} logo={AmazonLogo} svg={phone_svg} primary_color="#e47911" secondary_color="#e47911"/>
                            <TaxiCard   expanded={expanded} detailsHandle={detailsHandle} logo={TwitterLogo} svg={phone_svg} primary_color="#1DA1F2" secondary_color="#1DA1F2"/>
                            <CryptoCard expanded={expanded} detailsHandle={detailsHandle} logo={TwitterLogo} svg={phone_svg} primary_color="#3CC94F" secondary_color="#3CC94F"/>
                        {/* </RNContainer> */}
                        {/* :
                        null
                        } */}
                    </MainBox>
    )}
    </AnimatePresence>

    )
}

export default Fourth


// <RNContainer variants={conditions} initial="hidden" animate="show" exit="exit">

// </RNContainer>


// <Flipcard 
// // details={DetailsChange} 
// applogo={AmazonLogo} 
// primary_color="#e47911" 
// secondary_color="#e47911" 
// link="https://shazoo.ru/" 
// svg={phone_svg} 
// apptype={"Ecommerce"} 
// appname={"AmazonClone"}>

// </Flipcard>
// <Flipcard applogo={twitter} primary_color="#36af89" secondary_color="#bffd43" link="https://shazoo.ru/" svg={phone_svg} apptype={"Service"} appname={"UberClone"}/>
// <Flipcard applogo={spotify} primary_color="#454d44" secondary_color="#13a805" link="https://shazoo.ru/" svg={phone_svg} apptype={"Tourism"} appname={"WineRoute"}/>