import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, Linkedin } from '../components/AllSvgs'
import { motion } from 'framer-motion'
import { useIsMedium } from "../subComponents/BackgroundDivs/responsiveControl"


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*:not(:last-child) {
    margin: 0.5rem 0;
    left: 2rem;
}

@media (max-width: 1000px) {
    left: 0.9rem;

    &>*:not(:last-child) {
    margin: 0.3rem 0;
}
    }   
`

    const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: red;
    @media (max-width: 1000px) {
        width: 1px;
        height: 0rem;   
        background-color: red;
        }   
    `
    






function SocialIcons({theme}) {

    const isMedium = useIsMedium();
    const GithubMain = () => {
    return(
        isMedium
        ?
            <Github width={25} height={25} fill={theme ? "white" : "black"}/>
        :   
            <Github width={17} height={17} fill={theme ? "black" : "black"} />
        )
    }

    const TwitterMain = () => {
        return(
            isMedium
            ? 
                <Twitter width={25} height={25} fill={theme ? "white" : "black"}/>
            :   
                <Twitter width={17} height={17} fill="black" />
            )
        }

    const FacebookMain = () => {
        return(
            isMedium
            ? 
                <Facebook width={25} height={25} fill={theme ? "white" : "black"}/>
            :   
                <Facebook width={17} height={17} fill="black" />
            )
        }

    const LinkedinMain = () => {
        return(
            isMedium
            ? 
                <Linkedin width={25} height={25} fill={theme ? "white" : "black"}/>
            :   
                <Linkedin width={17} height={17} fill="black" />
            )
        }

    const linedraw = isMedium
    ? 
        {
        initial: {height: 0},
        animate: { height: '8rem', backgroundColor: theme ? "white" : "black", transition: { type: 'spring', duration: 1, delay: 1 }}, 
        }
    : 
        {
        initial: {height: 0},
        animate: { height: '5rem', backgroundColor: theme ? "black" : "black", transition: { type: 'spring', duration: 1, delay: 1 }}, 
        };

    return (
        <Icons>

            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://github.com/justmaster"}}>
                    <GithubMain/>
                </NavLink>
            </motion.div>

            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://twitter.com/T_KE_J"}}>
                    <TwitterMain  />
                </NavLink>
            </motion.div>

            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://www.facebook.com/tornike.jinn"}}>
                    <FacebookMain/>
                </NavLink>
            </motion.div>

            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://www.linkedin.com/in/tornike-jintchveleishvili-2987621a4/"}}>
                    <LinkedinMain />
                </NavLink>
            </motion.div>
            <Line variants={linedraw} initial='initial' animate='animate' exit='exit'/>

        </Icons>
    )
}

export default SocialIcons
