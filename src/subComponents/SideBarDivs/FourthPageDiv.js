import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import { LightParticle } from '../Particles/LightParticle'



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
    left: 0;
    right: 50%;
    width: 0;
    height: 0;
    z-index: 1;
    overflow: hidden;
    
`

const diventer = {
    hidden: {width: "0%", height: "0%"},
    animate: {
        width: ["50%", "100%"],
        height: ["100%", "100%"],
        opacity: ["1", "1"],
        transition: { duration: 1, delay: 0.3}},
        exit: {width: "50%",  transition: {type: 'tween', duration: 1}}
}

const FourthPageDiv = ({show})  => {
    const [shouldRender, setRender] = useState(false);

    useEffect(() => {
      if (show === "fourth") {setRender(true)}
      else {setRender(false)}
    }, [show]);

    
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
