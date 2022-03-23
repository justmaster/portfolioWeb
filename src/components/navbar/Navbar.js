import { AnimatePresence, motion } from 'framer-motion';
import React, {useState, useEffect} from 'react'
import './navbar.scss'

function Navbar(props) {

    const [classNameLeftSide, setclassNameLeftSide] = useState("link_white");
    const [classNameRightSide, setclassNameRightSide] = useState("link");

    const test = {
        borderBottom: "2px solid white",
        borderHeight: 2,
        transition: "0.5s ease-in-out"
    }



    useEffect(() => {
        if (props.show === "first" || props.show === "second") {
            setclassNameLeftSide("link_white")
            setclassNameRightSide("link")
        } else if (props.show === "third" || props.show === "fourth") {
            setclassNameLeftSide("link_white")
            setclassNameRightSide("link_white")
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
                            className={classNameLeftSide} style={props.show === "first" ?  test : null}
                            // eslint-disable-next-line
                            onClick={() => props.first()}  href="javascript:;">About Me
                        </motion.a>

                        <motion.a variants={naventer} initial="hidden" animate="animate" exit="exit" 
                            className={classNameLeftSide} style= {props.show === "second" ?  test : null}
                            // eslint-disable-next-line
                            onClick={() => props.second()} href="javascript:;">Resume
                        </motion.a>

                        <motion.a variants={naventer} initial="hidden" animate="animate" exit="exit" 
                            className={classNameRightSide} style= {props.show === "fourth" ?  test : null} 
                            // eslint-disable-next-line
                            onClick={() => props.fourth()}  href="javascript:;">Portfolio
                        </motion.a>

                        <motion.a variants={naventer} initial="hidden" animate="animate" exit="exit" 
                            className={classNameRightSide} style= {props.show === "third" ?  test : null}
                            // eslint-disable-next-line
                            onClick={() => props.third()} href="javascript:;">Contact
                        </motion.a>
                </ul>
            </nav>
        </AnimatePresence>
    )
}

export default Navbar
