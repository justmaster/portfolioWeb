import React, {useState} from 'react'
import AmazonVideo from "../../assets/video/Amazon.MP4"
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import "./Styles.css"
import { DescCard } from '../../subComponents/cards/DescriptionCard'
import Player from '../../subComponents/VideoPlayer2/videoPlayer'
import { ToolsCard } from '../../subComponents/cards/ToolsCard'
import TypeButton from '../../subComponents/TypeButton/TypeButton'


const Line = styled(motion.span)`
margin-left: 6%;
width: 0.12rem;
height: 104vh;
background-color: black;
`

const ExpoCont = styled(motion.span)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 7%;
gap: 0.3vw;

h1{
    font-family: 'Raleway', sans-serif;
    color: white;
    font-size: 2.5vw;    
}
`

const AndroidDetails = styled(motion.span)`
display: flex;
flex-direction: column;
// justify-content: center;
// align-items: center;
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
`


const linedraw = {
    hidden: {height: 0},
    show: {height: "103vh", transition: { type: 'tween', duration: 0.9, delay: 1,}},
    exit: {height: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
}

const linedraw_second = {
    hidden: {height: 0},
    show: {height: "103vh", transition: { type: 'tween', duration: 0.9, delay: 1.2,}},
    exit: {height: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
}

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

    
    return (

            <div className='main'>
                <Player video={AmazonVideo} />
                <Line variants={linedraw} initial='hidden' animate='show' exit='exit' />

                <div className='appDescription'>
                    {/* {Work.map( d => <DescCard key={d.id} data={d}/> )} */}
                    <DescCard name={name} description={description} tags={tags}/>
                    <div className='smallTools'>
                        <ToolsCard toolTitle={"Front End"} description={description} tags={tags} front={frontDesc} />
                        <ToolsCard toolTitle={"Back End"} description={description} tags={Backtags} front={frontDesc} />
                    </div>
                </div>
                <Line variants={linedraw_second} initial='hidden' animate='show' exit='exit' />
                <ExpoCont variants={conditions} initial='hidden' animate='show' exit='exit'> 
                            <h1>Open In Expo</h1>
                            <TypeButton first={Handle}  second={Handle} active={active} Name={"android"} NameSecond={"ios"}/>
                            {active === "android" ? 
                                <AndroidDetails variants={conditions} initial='hidden' animate='show' exit='exit'>
                                    <img src={qrCode} />
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
