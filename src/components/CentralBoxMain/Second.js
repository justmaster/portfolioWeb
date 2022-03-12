import React, {useState, useEffect} from 'react'
import styled, { keyframes } from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import { Employment } from '../AllSvgs'
import { Education } from '../AllSvgs'
import { Skills } from '../AllSvgs'
import StyleButton from '../../subComponents/stylebutton/stylebutton'

const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 70vw;
height: 70vh;
display: flex;
overflow: hidden;

z-index: 2;
backdrop-filter: blur(2px);

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};

    @media (max-width: 1000px) {
    margin-top: 3%;
    width: 80vw;
    height: 85vh;
    flex-direction: column;
    border-image: linear-gradient(white, black) 30;
    background: none;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-top: 2px solid white;
    border-bottom: 2px solid black;
    }
    
    
`
const SubBox = styled(motion.div)`
width: 50%;
position: relative;
display: flex;
flex-direction: column;
margin-right: 1px;

@media (max-width: 1000px) {
    width: 100%;
    height: 47%;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    padding: 0%;
  }

.type {
    width: fit-content;
    color: #E0E0E0 ;
    font-size: calc(0.3rem + 1.7vw);
    margin-left: 4%;
    font-family: 'Raleway', sans-serif;
}

.empsvg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1% 3%;
    padding: 0.5%;
    @media (max-width: 1000px) {
        width: 100%;
    }   
}

`

const FirstSection = styled.div`
display: flex;
flex-direction: column;
margin-left: 0;

@media only screen and (max-width: 900px) and (min-height: 730px) and (max-height: 1000px) {
    margin-top: 10%;
}

@media (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
`

const SecondSection = styled.div`
display: flex;
flex-direction: column;
margin-right: 0;

@media (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

@media (max-width: 550px) {
    margin-top: 0%;
}
`






const JobContainer = styled.div`
display: flex;
flex-direction: column;
border-left: white 3px solid;
margin-top: 2%;
margin-left: 0.4%;
margin-right: 0.5%;
padding: 1%;
cursor: pointer;

@media (max-width: 1000px) {
    width: 45%;
    display: flex;
    flex-direction: column;
    border-left: white 2px solid;
    border-right: white 2px solid;
    margin-top: 0.4%;
    margin-left: 0.4%;
    margin-right: 0.5%;
    padding: 1%;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0.1%;
  }

&:hover {
    border-left: white 3.2px solid;
    /* transition: 0.1s ease-in-out; */
}

h1 {
    color: white;
    font-size: calc(0.4rem + 0.4vw);
}
`


const JobContainerFull = styled.div`
display: flex;
flex-direction: column;
border-left: white 3px solid;
margin-top: 2%;
margin-left: 0.4%;
margin-right: 0.5%;
padding: 1%;
cursor: pointer;

@media (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-left: white 2px solid;
    border-right: white 2px solid;
    margin-top: 0.4%;
    margin-left: 0.4%;
    margin-right: 0.5%;
    padding: 1%;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0.1%;

  }

&:hover {
    border-left: white 3.2px solid;
    /* transition: 0.1s ease-in-out; */
}

h1 {
    color: white;
    font-size: calc(0.4rem + 0.4vw);
}

`

const DescTime = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

h1{
    color: white;
    font-size: calc(0.6rem + 0.4vw);
}
h2{
    color: white;
    font-size: calc(0.5rem + 0.4vw);
}
h3{
    color: white;
    font-size: calc(0.4rem + 0.4vw);
}
`

const Line = styled(motion.span)`
margin-left: 0.5%;
width: calc(10rem + 5vw);
height: 0.1rem;
background-color: #505050;

@media (max-width: 600px) {
    align-self: center;
    width: calc(8rem + 4vw);
}
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg)
}
`

const SubBoxSecond = styled(motion.div)`
width: 50%;
position: relative;
display: flex;
flex-direction: column;

@media (max-width: 1000px) {
    width: 100%;
    height: 50%;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media (max-width: 550px) {
    flex-direction: row;
    flex-wrap: wrap;
}

.type {
    width: fit-content;
    color: black ;
    font-size: calc(0.3rem + 1.4vw);
    margin-left: 4%;
    font-family: 'Raleway', sans-serif;

    @media (max-width: 550px) {
    align-self: center;
    font-size: calc(0.3rem + 1.7vw);
}

}

.empsvg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1% 3%;
    padding: 0.5%;

    @media (max-width: 550px) {
    width: 100%;
    margin-top: 0%;
}


&>:first-child{
        animation: ${rotate} infinite 20s linear;
}
}
`

const FrontContainer= styled.div`
display: flex;
flex-direction: column;
margin-left: 0;


@media (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
}

@media (max-width: 550px) {
    flex-direction: column;
    flex-wrap: wrap;
}
`

const BackContainer = styled.div`
display: flex;
flex-direction: column;
margin-right: 0;

@media (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
}

@media (max-width: 550px) {
    flex-direction: column;
    flex-wrap: wrap;
}
`
const ToolList = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media (max-width: 550px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    margin-top: 2.5%;
}
`


//frame animation configs here
const boxenter = {
    hidden: {width: 0, opacity: 0},
    animate: {width: '70vw', opacity: 1, transition: { type: 'spring', duration: 1.5, delay: 0.7, }},
    exit: {width: 0, opacity: 0, transition: {type: 'tween', duration: 1}}
}

const conditions = {
    hidden: {opacity:0},
    show: {opacity:1, transition: { duration: 0.5, delay: 1.9}},
    exit: {width: 0, opacity: 0, transition: {type: 'spring', duration: 1}},
}

const innerbox = {
    hidden: {opacity: 0},
    animate: {opacity: 1, transition: { type: 'tween', duration: 2, delay: 0.7, }},
    exit: {opacity: 0, transition: {type: 'tween', duration: 0.3}}
}


const linedraw = {
    hidden: {width: 0},
    show: {width: "10rem", transition: { type: 'tween', duration: 0.9, delay: 1.8,}},
    exit: {width: 0, transition: {type: 'spring', duration: 0.7, delay: 0}},
}

const textexit ={
    exit: {width: 0, height: 0, fontSize: 0, opacity: 0, transition: {type: 'spring', duration: 1.5, delay: 0.2}},
}


const Intro = ({ show }) => {
    const [shouldRender, setRender] = useState(show);
    useEffect(() => {
      if (show === "second") {setRender(true)}
      else {setRender(false)}
    }, [show]);

    return (
        <AnimatePresence>
        {shouldRender && (
        <Box
            variants={boxenter}
            initial='hidden'
            animate='animate'
            exit='exit'
        >
            <SubBox variants={innerbox} initial='hidden' animate='animate' exit='exit'>

                <FirstSection>
                    <div className='empsvg'>
                        <Employment variants={textexit} exit='exit' fill='white'  width={ "2.5vw" } height={"2.5vw"} />
                        <motion.h1  variants={textexit} exit='exit' className='type'>Employment</motion.h1>
                    </div>  

                    <JobContainer>
                        <DescTime>
                            <h1>Lead UX Designer</h1>
                            <h1>2011-Present</h1>
                        </DescTime>

                        <DescTime> 
                            <h2> Apple Inc. </h2>
                        </DescTime>
                        <h1>Worked in So many projects my dick is hard as fuck</h1>
                    </JobContainer>

                    <JobContainer>
                        <DescTime>
                            <h1>Front End Developer</h1>
                            <h1>2020-2021</h1>
                        </DescTime>

                        <DescTime> 
                            <h2> Petro - Energy Caspian East </h2>
                        </DescTime>
                        <h1>Supervised transdimentional hoes</h1>
                    </JobContainer>

                    <JobContainerFull>
                        <DescTime>
                            <h1>Nigga in Paris</h1>
                            <h1>2020-2021</h1>
                        </DescTime>

                        <DescTime> 
                            <h2> WHERE ARE THE HOES</h2>
                        </DescTime>
                        <h1>Supervised transdimentional hoes</h1>
                    </JobContainerFull>
                </FirstSection>

                <SecondSection>
                    <div className='empsvg'>
                        <Education fill='white'  width={ "3vw" } height={"3vw"} />
                        <h1 className='type'>Education</h1>
                    </div>  

                    <JobContainer>
                        <DescTime>
                            <h1>BBA</h1>
                            <h1>2014 - 2018</h1>
                        </DescTime>

                        <DescTime> 
                            <h2> Georgian - American University (GAU)</h2>
                        </DescTime>
                        <h1>Tbilisi Georgia</h1>
                    </JobContainer>

                    <JobContainer>
                        <DescTime>
                            <h1>React Native Expert Course</h1>
                            <h1>2019</h1>
                        </DescTime>

                        <DescTime> 
                            <h2> Harvard CS50</h2>
                        </DescTime>
                        <h1>Online</h1>
                    </JobContainer>
                </SecondSection>

            </SubBox>

            <SubBoxSecond variants={innerbox} initial='hidden' animate='animate' exit='exit'>
                <div className='empsvg'>
                    <Skills fill={'black'} width={ "3.5vw" } height={"3.5vw"}/>
                    <h1 className='type'>Skills</h1>
                </div>  

                <FrontContainer>
                    <FrontContainer>
                        <h1 className='type'>Front End</h1>
                        <Line variants={linedraw} initial='hidden' animate='show' exit='exit'/>
                    </FrontContainer>
                    <ToolList>
                        <StyleButton text="React"/>
                        <StyleButton text="React-Native"/>
                        <StyleButton text="TypeScript"/>
                        <StyleButton text="Next.js"/>
                        <StyleButton text="CSS"/>
                        <StyleButton text="SASS"/>
                        <StyleButton text="Styled-Components"/>
                        <StyleButton text="Tailwind"/>
                        <StyleButton text="GSAP"/>
                        <StyleButton text="Framer Motion"/>
                    </ToolList>
                </FrontContainer>

                <BackContainer>
                    <FrontContainer>
                        <h1 className='type'>Back End</h1>
                        <Line variants={linedraw} initial='hidden' animate='show' exit='exit'/>
                    </FrontContainer>
                    <ToolList>
                        <StyleButton text="AWS Amplify"/>
                        <StyleButton text="Node"/>
                        <StyleButton text="Firebase"/>
                        <StyleButton text="Django(Python)"/>
                    </ToolList>

                </BackContainer>



            </SubBoxSecond>
        </Box>
        
        )
}
        </AnimatePresence>
    )
}

export default Intro