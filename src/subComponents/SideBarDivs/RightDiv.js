import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import { DarkParticle } from '../Particles/DarkParticle'

const DarkDiv = styled(motion.div)`
    position: absolute;
    background-color: transparent;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    z-index: 1;
    overflow: hidden;
    
`

const diventer = {
    hidden: {width: "0%", height: "0%"},
    animate: {
        width: ["0%", "50%"],
        height: ["0%", "100%"],
        transition: { duration: 1, delay: 0 }},
        exit: {width: 0, transition: {type: 'tween', duration: 0.7}}
}

const RightDiv = ({show})  => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        if (show === "first" || show === "second") {setRender(true)}
        else {setRender(false)}
      }, [show]);
  



    return (

            <div>
                
                <AnimatePresence>
                    {shouldRender && (
                        <DarkDiv  variants={diventer} initial='hidden' animate='animate' exit='exit'> </DarkDiv> 
                    )}       
                </AnimatePresence>

                <AnimatePresence>
                    {show === "second" ? <DarkParticle /> : null}
                </AnimatePresence>

            </div>
    )
}

export default RightDiv
