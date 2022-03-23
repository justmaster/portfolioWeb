import React, {useState} from 'react'
import AmazonVideo from "../../../assets/video/Amazon.MP4"

import { YouTube } from '../../../components/AllSvgs'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { useIsLowerThanMedium } from "../../BackgroundDivs/responsiveControl"
import "./Styles.css"
import { DescCard } from '../../cards/DescriptionCard'
import Player from '../../VideoPlayer2/videoPlayer'
import { ToolsCard } from '../../cards/ToolsCard'
import TypeButton from '../../Buttons/TypeButton/TypeButton'


const Line = styled(motion.span)`
width: 0.12rem;
background-color: black;
margin: 0% 1% 0% 1%;
`

const ExpoCont = styled(motion.span)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 10%;
gap: 0.2vw;

h1{
    font-family: 'Raleway', sans-serif;
    color: white;
    font-size: 2.3vw;    
    text-align: center;

}

@media (max-width: 700px) {
    flex-direction: row;
    gap: 3vw;
    word-break: break-all;  
    margin-top: 10%; 


    h1{
    font-family: 'Raleway', sans-serif;
    color: white;
    font-size: 6vw; 
    gap: 15vw;  
    text-align: left;
    &:hover{
        color: orange;
        cursor: pointer;
    }
}

}
`

const AndroidDetails = styled(motion.span)`
display: flex;
flex-direction: column;
gap: 0.5vw;

h1{
    font-family: 'Raleway', sans-serif;
    color: black;
    font-size: 1.5vw;

    &:hover {
        color: white;
        cursor: pointer;
    }
}


@media (max-width: 700px) {
    margin-top: 10%;

    h1{
    font-family: 'Raleway', sans-serif;
    font-size: 3vw; 
    gap: 8vw;
    text-align: left;
    }
}
`

const VideoLinkSmallDevices= styled(motion.a)`
display: none;

@media (max-width: 700px) {
    display: flex;
    align-self: center;
    width: 50vw;
    font-family: 'Raleway', sans-serif;
    color: black;
    font-size: 5vw;
    margin-top: 5%;
    margin-bottom: 5%;
    

    a {
        font-family: 'Raleway', sans-serif;
        color: black;
        font-size: 4.5vw;
        align-self: center;
        margin-left: 5%;
        &:hover {
        color: white;
        cursor: pointer;
        }
    }
}
`

const conditions = {
    hidden: {opacity:0},
    show: {opacity:1, transition: { duration: 0.5, delay: 1}},
    exit: {opacity:  0, transition: {type: 'spring', duration: 2}},
}

export default function AmazonDesc({name, description, tags, Backtags, frontDesc, qrCode,}) {
    const [active, setActive] = useState('android');
    
    const Handle = () => {
        if (active === "ios") {
            setActive("android")
        } else if  (active === "android")  {
            setActive("ios") 
        }
    }

    const isMedium = useIsLowerThanMedium();
    const linedraw = 
    isMedium 
    ?
    {
        hidden: {height: 0, width: "0.12rem"},
        show: {height: "103vh", width: "0.12rem", transition: { type: 'tween', duration: 0.9, delay: 1,}},
        exit: {height: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
    } 
    :
    {
        hidden: {width: 0, height: "0.12rem",},
        show: { height: "0.12rem", width: "103vw",  transition: { type: 'tween', duration: 0.9, delay: 1,}},
        exit: {width: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
    } 

    const linedrawSecond = 
    isMedium 
    ?
    {
        hidden: {height: 0, width: "0.12rem"},
        show: {height: "103vh", width: "0.12rem", transition: { type: 'tween', duration: 0.9, delay: 1.2,}},
        exit: {height: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
    } 
    :
    {
        hidden: {width: 0, height: "0.12rem",},
        show: { height: "0.12rem", width: "103vw",  transition: { type: 'tween', duration: 0.9, delay: 1.2,}},
        exit: {width: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
    } 

    
    return (

            <div className='main'>
                
                <VideoLinkSmallDevices>
                    <YouTube width={"8vw"} height={"8vw"} />
                    <a href="shazoo.ru">Open In Youtube</a>
                </VideoLinkSmallDevices>

                <Player video={AmazonVideo} />
                <Line variants={linedraw} initial='hidden' animate='show' exit='exit' />

                <div className='appDescription'>
                    {/* {Work.map( d => <DescCard key={d.id} data={d}/> )} */}
                    <DescCard name={name} description={description} tags={tags} />
                    <div className='smallTools'>
                        <ToolsCard toolTitle={"Front End"} description={description} tags={tags} front={frontDesc} />
                        <ToolsCard toolTitle={"Back End"} description={description} tags={Backtags} front={frontDesc} />
                    </div>
                </div>

                <Line variants={linedrawSecond} initial='hidden' animate='show' exit='exit' />
                <ExpoCont variants={conditions} initial='hidden' animate='show' exit='exit'> 
                            {isMedium ? <h1>Open In Expo</h1> : <h1>Open <br></br>In <br></br>Expo</h1>}
                            <TypeButton first={Handle}  second={Handle} active={active} Name={"android"} NameSecond={"ios"}/>
                            {active === "android" ? 
                                <AndroidDetails variants={conditions} initial='hidden' animate='show' exit='exit'>
                                    <img alt="QR" className="qrCode" src={qrCode} />
                                    <h1>1. Install Expo App</h1>
                                    <h1>2. Scan The Code</h1>
                                </AndroidDetails> 
                                : 
                                <AndroidDetails variants={conditions} initial='hidden' animate='show' exit='exit'>
                                    <h1>1. Install Expo App</h1>
                                    <h1>2. Log in to my account :</h1>
                                    <h1>* Login: justmaster </h1>
                                    <h1>* Pass: Lngrd1997</h1>
                                    <h1>3. Open Amazon Clone app</h1>
                                </AndroidDetails> 
                                }
                </ExpoCont>

            </div>

    )
}
