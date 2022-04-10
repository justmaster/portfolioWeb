import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import AmazonLogo from '../../assets/Portfolio.media/ACicon.png'
import TwitterLogo  from '../../assets/Portfolio.media/twitter.png'
import CryptoLogo  from '../../assets/Portfolio.media/spotify.png'
import amazonQr from '../../assets/Portfolio.media/amazonQr.png'
import octopus from '../../assets/Portfolio.media/octopus.PNG'
import churchuli from '../../assets/Portfolio.media/churchuli.png'
import peceast from '../../assets/Portfolio.media/peceast.png'




import phone_svg from "../../assets/Portfolio.media/smartphone.svg"
// eslint-disable-next-line
import Flipcard from "../../subComponents/flipcard/flipcard"
import WebApp from '../../subComponents/webapps/webapps'
import TypeButton from '../../subComponents/Buttons/TypeButton/TypeButton'
import AmazonCard from '../../subComponents/AppCards/AmazonApp/AmazonCard'
import TaxiCard from '../../subComponents/AppCards/TaxiApp/TaxiCard'
import CryptoCard from '../../subComponents/AppCards/CryptoApp/CryptoCard'
import AmazonDesc from '../../subComponents/AppCards/MobileAppsDesc/AmazonDesc'

import { Work } from '../../data/WorkData'






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

@media (max-width: 700px) {
    flex-direction: column;
  }
`

const AppType = styled(motion.h)`
position: absolute;
color: white;
margin-bottom: 27%;
z-index: 2;

@media (max-width: 1000px) {
    margin-bottom: 50%;
  }
  @media (max-width: 700px) {
    margin-bottom: 37%;
    left: 0px;
  }
`

const WebBox = styled(motion.div)`

margin-top: 3%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
background-color: transparent;
position: absolute;
height: auto;
width: auto;
gap: 5%;

@media (max-width: 1000px) {
    flex-direction: column;
  }

@media (max-width: 900px) {
    margin-top: 6%;
}

@media (max-width: 500px) {
    justify-content: space-between;
}
`





//framer animation configs here

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
        }, [show]);

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

                        {active === "web" ?
                        <WebBox>
                            <WebApp tool1={"React"} tool2={"JS"} tool3={"HTML"} tool4={"CSS"} link={"LINK"} href={"https://www.churchuli.com/"} 
                            apptype={"Restaurant"} appname={"Commercial"} appscreen={churchuli}/>

                            <WebApp tool1={"React"} tool2={"JS"} tool3={"HTML"} tool4={"CSS"} link={"LINK"} href={"https://pec-refinery.com/"} 
                                apptype={"Petro Energy Caspian"} appname={"Oil Refinery"} appscreen={peceast}/>

                            <WebApp tool1={"React"} tool2={"JS"} tool3={"HTML"} tool4={"CSS"} link={"LINK"} href={"https://octopusdev.netlify.app/"} 
                            apptype={"Octopus Project"} appname={"Design"} appscreen={octopus}/>


                        </WebBox>
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

