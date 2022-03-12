import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import {motion} from 'framer-motion'
//particle config files

import darkSide from '../../config/darside.json'


const Box = styled(motion.div)`
position: absolute;
top:0;
right: 50%;
left: 0;
bottom: 0;
z-index: 2;
overflow: hidden;
@media (max-width: 1000px) {
        top: 0;
        bottom: 50%;
        right: 0;
}
`

const diventer = {
    hidden: {opacity: 0},
    animate: {opacity: 1, transition: { duration: 1, delay: 0}},
    exit: {opacity: [0.8, 0.5, 0.3, 0.1, 0.1], transition: { duration: 1, delay: 0}}
}


export const LightParticle = (show) => {
    return (
        <Box 
            variants={diventer}
            initial='hidden'
            animate='animate'
            exit='exit'
            >
            <Particles 
                style={{position: 'absolute', top:0}} 
                params={darkSide}
            />
        </Box>
    )
}
