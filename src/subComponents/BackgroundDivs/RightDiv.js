import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import { DarkParticle } from '../Particles/DarkParticle'
import { useIsMedium } from './responsiveControl'


const TransDiv = styled(motion.div)`
    position: absolute;
    background-color: transparent;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    z-index: 1;
    overflow: hidden;
    @media (max-width: 1000px) {
        top: 50%;
        bottom: 0;
        left: 0;
}
`


const RightDiv = ({show})  => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        if (show === "first" || show === "second") {setRender(true)}
        else {setRender(false)}
      }, [show]);



const isMedium = useIsMedium();
const diventer = isMedium 
?
{
    hidden: {width: "0%", height: "0%"},
    animate: {
        width: ["0%", "0%", "100%"],
        height: ["0%", "100%", "100%"],
        transition: { duration: 1, delay: 0 }},
        exit: {width: 0, transition: {type: 'tween', duration: 0.7}}
} 

:

{
    hidden: {width: "0%", height: "0%"},
    animate: {
        width: ["100%", "100%", "100%"],
        height: ["0%", "50%", "50%"],
        transition: { duration: 1, delay: 0 }},
        exit: {height: 0, transition: {type: 'tween', duration: 0.7}}
} 


// const diventer = isMedium
// ? {
//     hidden: {width: "0%", height: "0%"},
//     animate: {width: ["0%", "50%"], height: ["0%", "100%"], transition: { duration: 1, delay: 0 }}, 
//     exit: {width: 0,  transition: {type: 'tween', duration: 1}}
//   }
// : 
//  {
//     hidden: {width: "0%", height: "0%"},
//     animate: {width: ["100%", "100%"], height: ["0vh", "50vh"], transition: { duration: 1, delay: 0 }}, 
//     exit: {height: 0,  transition: {type: 'tween', duration: 1}}
//   };




    return (

            <div>
                
                <AnimatePresence>
                    {shouldRender && (
                        <TransDiv  variants={diventer} initial='hidden' animate='animate' exit='exit'> </TransDiv> 
                    )}       
                </AnimatePresence>

                <AnimatePresence>
                    {show === "second" ? <DarkParticle /> : null}
                </AnimatePresence>

            </div>
    )
}

export default RightDiv
