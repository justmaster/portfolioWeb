import { AnimatePresence, motion } from 'framer-motion';
import React, {useState, useEffect} from 'react'
import './navbar.scss'

function Navbar(props) {

    const [classLeftSide, setClassLeftSide] = useState("link_white");
    const [classRightSide, setClassRightSide] = useState("link");

    const test = {
        borderBottom: "2px solid white",
        borderHeight: 2,
        transition: "0.5s ease-in-out"
    }



    useEffect(() => {
        if (props.show === "first" || props.show === "second") {
            setClassLeftSide("link_white")
            setClassRightSide("link")
        } else if (props.show === "third" || props.show === "fourth") {
            setClassLeftSide("link_white")
            setClassRightSide("link_white")
        } 
    }, [props.show])

    const naventer = {
        hidden: { opacity: 0},
        animate: { opacity: 1,  transition: { type: 'spring', duration: 1, delay: 1.2, }},
        exit: {height: 0, opacity: 0, transition: {type: 'tween', duration: 1}}
    }

    return (
        <AnimatePresence>
            <nav className='overflow'>
                <ul className='navbar'>

                        <motion.a variants={naventer} initial="hidden" animate="animate" exit="exit" 
                            className={classLeftSide} style={props.show === "first" ?  test : null} 
                            onClick={() => props.first()}  href="javascript:;">About Me
                        </motion.a>

                        <motion.a variants={naventer} initial="hidden" animate="animate" exit="exit" 
                            className={classLeftSide} style= {props.show === "second" ?  test : null} 
                            onClick={() => props.second()} href="javascript:;">Skills
                        </motion.a>

                        <motion.a variants={naventer} initial="hidden" animate="animate" exit="exit" 
                            className={classRightSide} style= {props.show === "fourth" ?  test : null} 
                            onClick={() => props.fourth()}  href="javascript:;">Portfolio
                        </motion.a>

                        <motion.a variants={naventer} initial="hidden" animate="animate" exit="exit" 
                            className={classRightSide} style= {props.show === "third" ?  test : null} 
                            onClick={() => props.third()} href="javascript:;">Contact
                        </motion.a>
                </ul>
            </nav>
        </AnimatePresence>
    )
}

export default Navbar
