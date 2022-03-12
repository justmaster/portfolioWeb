import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import AmazonLogo from '../../assets/Portfolio.media/ACicon.png'
import TwitterLogo  from '../../assets/Portfolio.media/twitter.png'
import CryptoLogo  from '../../assets/Portfolio.media/spotify.png'
import amazonQr from '../../assets/Portfolio.media/amazonQr.png'


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
// import VideoPlayer from '../../subComponents/videoPlayer/videoPlayer'
import { Player } from 'video-react';
import videotest from '../../assets/video/videotest.mp4'
// import '~video-react/dist/video-react.css'
// @import '~video-react/styles/scss/video-react';
import Rnappdetails from '../../subComponents/VideoPlayer2/videoPlayer'
import AmazonDesc from '../MobileAppsDesc/AmazonDesc'

import { Work } from '../../data/WorkData'



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
width: 100vw;
`

const PlayerHost = styled(motion.div)`
width: 100vw;
z-index: 50;

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

    useEffect(() => {
        if (show === "fourth") 
            {setRender(true)}
        else 
            {setRender(false)}
        });

    const [shouldRender, setRender] = useState(false);
    const [active, setActive] = useState('mobile');
    const [activeCard, setActiveCard] = useState("empty")


    const toggleDetailsAM = async() => {
        activeCard === "amazon" ? setActiveCard("empty") : setActiveCard("amazon")
    }

    const toggleDetailsTX = async() => {
        activeCard === "taxi" ? setActiveCard("empty") : setActiveCard("taxi")
    }

    const toggleDetailsCR = async() => {
        activeCard === "crypto" ? setActiveCard("empty") : setActiveCard("crypto")
    }
    

    const Handle = () => {
        if (active === "mobile") {
            setActive("web")

        } else if  (active === "web"){
            setActive("mobile") 
        }
    }


        useEffect(() => {
        console.log(Work[0].id)
    });



    return (

        
    <AnimatePresence>
                {shouldRender && (  

                    
                    <MainBox variants={conditions} initial="hidden" animate="show" exit="exit">

                        {expanded ? null : 
                        <AppType>
                            <TypeButton first={Handle}  second={Handle} active={active} Name={"mobile"} NameSecond={"web"} />
                        </AppType>}

                        {active === "mobile" ?
                            <AmazonCard activeCard={activeCard} toggleDetails={toggleDetailsAM} expanded={expanded} detailsHandle={detailsHandle} logo={AmazonLogo} svg={phone_svg} primary_color="#e47911" secondary_color="#e47911"/>
                        : null}

                        {active === "mobile" ?
                            <TaxiCard   activeCard={activeCard} toggleDetails={toggleDetailsTX} expanded={expanded} detailsHandle={detailsHandle} logo={TwitterLogo} svg={phone_svg} primary_color="#1DA1F2" secondary_color="#1DA1F2"/>
                        : null}
                            
                        {active === "mobile" ?
                            <CryptoCard activeCard={activeCard} toggleDetails={toggleDetailsCR} expanded={expanded} detailsHandle={detailsHandle} logo={CryptoLogo} svg={phone_svg} primary_color="#3CC94F" secondary_color="#3CC94F"/>
                        : null}


                        {activeCard === "amazon" ? < AmazonDesc name={Work[0].name} description={Work[0].description} tags={Work[0].tags} Backtags={Work[0].Backtags} qrCode={amazonQr}/> : null}

                        {activeCard === "taxi" ? <div>taxi</div> : null}

                        {activeCard === "crypto" ? <div>crypto</div> : null}

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