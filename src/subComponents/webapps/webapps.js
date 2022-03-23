import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import './App.css';
import Button from '../Buttons/hoverbutton/index';
import Toolbutton from '../Buttons/toolbutton/index';

const Line = styled(motion.span)`
width: 0.1rem;
height: 8rem;
background-color: yellow;
margin: 0% 1% 0% 1%;
align-self: center;
display: none;

@media (max-width: 1000px) {
    display: block;
    height: 7rem;
  }

@media (max-width: 800px) {
    display: block;
    height: 5rem;
  }

@media (max-width: 700px) {
    display: block;
    height: 5rem;
  }
`

const WebApp = ({appscreen, tool1, tool2, tool3, tool4, apptype, appname, link, href }) => {

    const mystyle = {
		position: "absolute",
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
        bottom: "15%",
	 }


    
    return (
        <div className='WebMain'>
            <div className="container_app" style={{backgroundImage: `url(${appscreen})`}}>
                <div className="hover_overlay">
                    <Toolbutton text={tool1} />
                    <Toolbutton text={tool2} />
                    <Toolbutton text={tool3} />
                    <Toolbutton text={tool4} />
                    <Button style={mystyle}  text={link} link={href}/>
                </div>
            </div>
            <Line />
            {/* App Description */}
            <div className="desc_container">
                <h className="desc">{apptype}</h>
                <h className="typedName">{appname}</h>
            </div>
        </div>
    )
}



export default WebApp
