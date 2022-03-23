import React from 'react'
import "./stylebutton.css"

import {motion} from 'framer-motion'



const conditions = {
    hidden: {height: 0, opacity: 0},
    show: {height: "2rem", opacity: 1, transition: { type: 'spring', duration: 1.6, delay: 1}},
    exit: {height: '0rem', width: '0rem', fontSize: 0, opacity: [0.5, 0], transition: { type: 'tween', duration: 1}},
}


function StyleButton(props) {
    return (
        <motion.button 
            variants={conditions} 
            initial='hidden' 
            animate='show' 
            exit='exit' 
            className="fancy-btn"
        >
                {props.text}
        </motion.button>
    
    )
}

export default StyleButton