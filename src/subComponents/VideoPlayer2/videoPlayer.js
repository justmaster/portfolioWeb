import React from 'react'
import ReactPlayer from 'react-player'
import {motion} from 'framer-motion'
import "./Styles.css"

const conditions = {
    hidden: {opacity:0},
    show: {opacity:1, transition: { duration: 0.5, delay: 0.7}},
    exit: {opacity:  0, transition: {type: 'spring', duration: 2}},
}

export default function Player({video}) {
    return (
                <motion.div  variants={conditions} initial='hidden' animate='show'  exit='exit' className='videoPlayer'>
                    <ReactPlayer 
                        autoPlay={true} 
                        url={video}
                        controls = {true}
                        gluid = {true} 
                        width = "20vw"
                        height = "90vh"
                        />
                </motion.div>

    )
}
