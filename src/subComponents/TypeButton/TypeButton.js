
import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import "./TypeButton.css"

const reveal = {
    hidden: {opacity: 0},
    animate: {opacity: 1, transition: { type: 'spring', duration: 0.3, delay: 0.5, }},
    exit: {opacity: 0, transition: {type: 'tween', duration: 0.7}}
}



function TypeButton(props) {

    return (
        <AnimatePresence>

            <div>

                <input name="buttons" onClick={() => props.first()} type="checkbox" id="cut" checked= {props.active === "mobile" ? true : false} />     
                <label className="label-but" for="cut">Mobile</label>

                <input name="buttons" onClick={() => props.second()} type="checkbox" id="copy" checked= {props.active === "web" ? true : false}/>
                <label className="label-but" for="copy">Web</label>

            </div>

        </AnimatePresence>
    )
}

export default TypeButton





            {/* <span> */}
                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="3"/>
                <circle cx="6" cy="18" r="3"/>
                <line x1="20" x2="8.12" y1="4" y2="15.88"/>
                <line x1="14.47" x2="20" y1="14.48" y2="20"/>
                <line x1="8.12" x2="12" y1="8.12" y2="12"/>
                </svg> */}
            {/* </span> */}


            {/* <span> */}
                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg> */}
            {/* </span> */}
            

        {/* <input name="buttons" type="checkbox" id="paste" />
            <label for="paste">
            <span>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
            </span>three</label> */}
            













