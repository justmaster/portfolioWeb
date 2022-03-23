import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import { useIsMedium } from './responsiveControl'



const DarkDiv = styled(motion.div)`
    position: absolute;
    background-color: #000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 50%;
    width: 0;
    height: 0;
    z-index: 1;
    width: 0;
    height: 0;
    overflow: hidden;

    @media (max-width: 1000px) {
        top: 0;
        bottom: 0;
        right: 0;
  }
    
`

const FourthPageDiv = ({show})  => {
    const [shouldRender, setRender] = useState(false);

    useEffect(() => {
      if (show === "fourth") {setRender(true)}
      else {setRender(false)}
    }, [show]);

    
    const isMedium = useIsMedium();
	const diventer = isMedium
	? {
        hidden: {width: "0%", height: "0%"},
        animate: {width: ["50%", "100%"], height: ["100%", "100%"], transition: { duration: 1, delay: 0.3 }}, 
        exit: {width: "50%",  transition: {type: 'tween', duration: 1}}
	  }
	: {
        hidden: {width: "0%", height: "0%"},
        animate: {width: ["100%", "100%"], height: ["50%", "100%"], transition: { duration: 1, delay: 0 }}, 
        exit: {height: "50%",  transition: {type: 'tween', duration: 1}}
	  };

    
    return (
        <div>
                <AnimatePresence>
                    {shouldRender && (
                        <DarkDiv 
                            variants={diventer} initial='hidden'animate='animate' exit='exit'
                        ></DarkDiv> 
                    )}   
                </AnimatePresence>
        </div>
    )
}

export default FourthPageDiv
