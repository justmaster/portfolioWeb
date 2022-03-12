import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import { useIsMedium } from './responsiveControl'

const YellowDiv = styled(motion.div)`
    position: absolute;
    background-color: #FF9600;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    height: 0;
    z-index: 1;
    overflow: hidden;
`

const diventer = {
    hidden: {width: "0%", height: "0%"},
    animate: {
        width: ["0%", "100%"],
        height: ["100%", "100%"],
        transition: { duration: 1, delay: 0 }},
        exit: {width: 0, transition: {type: 'tween', duration: 1}}
}

const ThirdPageDiv = ({show})  => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
      if (show === "third") {setRender(true)}
      else {setRender(false)}
    }, [show]);

    const isMedium = useIsMedium();
	const diventer = isMedium
	? {
        hidden: {width: "0%", height: "0%"},
        animate: {width: ["0%", "100%"], height: ["100%", "100%"], transition: { duration: 1, delay: 0 }}, 
        exit: {width: "0%",  transition: {type: 'tween', duration: 1}}
	  }
	: {
        animate: {width: ["100%", "100%"], height: ["0%", "100%"], transition: { duration: 1, delay: 0 }}, 
        exit: {height: "0%",  transition: {type: 'tween', duration: 1}}
	  };
    
    return (
        <div>
            <AnimatePresence>
                {shouldRender && (
                    <YellowDiv  variants={diventer} initial='hidden' animate='animate' exit='exit'></YellowDiv>
                )}
            </AnimatePresence>
                
            <AnimatePresence>
                {/* {show === "third" ? <LightParticle /> : null} */}
            </AnimatePresence>
        </div>
    )
}

export default ThirdPageDiv
