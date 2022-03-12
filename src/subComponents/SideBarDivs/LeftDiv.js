import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import { LightParticle } from '../Particles/LightParticle'
import { useIsMedium } from './responsiveControl'


// const color = () =>{
//     if (show === "first") {
//         return "#000"
//     } elseif (show === "second") {
//         return "white"
//     }
// }




const DarkDiv = styled(motion.div)`
        position: absolute;
        background-color: #000;
        top: 0;
        bottom: 0;
        right: 50%;
        z-index: 1;
        overflow: hidden;
    @media (max-width: 1000px) {
        top: 0;
        bottom: 50%;
        right: 0;
  }
`


const LeftDiv = ({show})  => {
    const [shouldRender, setRender] = useState(false);

    useEffect(() => {
      if (show === "first" || show === "second") {setRender(true)}
      else {setRender(false)}
    }, [show]);

    const isMedium = useIsMedium();
	const diventer = isMedium
	? {
        animate: {width: ["0%", "50%"], height: ["100vh", "100vh"], transition: { duration: 1, delay: 0 }}, 
        exit: {width: 0,  transition: {type: 'tween', duration: 1}}
	  }
	: {
        animate: {width: ["100%", "100%"], height: ["0vh", "50vh"], transition: { duration: 1, delay: 0 }}, 
        exit: {height: 0,  transition: {type: 'tween', duration: 1}}
	  };
	

    
    return (
        <div>
                <AnimatePresence>
                    {shouldRender && (
                        <DarkDiv variants={diventer} initial='hidden' animate='animate' exit='exit'></DarkDiv> 
                    )}   
                </AnimatePresence>

                <AnimatePresence>
                    {show === "second" ? <LightParticle  /> : null}
                </AnimatePresence>
        </div>
    )
}

export default LeftDiv
