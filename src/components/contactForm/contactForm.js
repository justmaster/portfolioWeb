import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import {motion} from 'framer-motion'
import emailjs from "emailjs-com"
import "./index.css"

const Line = styled(motion.span)`
height: 0.08rem;
width: calc(2rem + 20vw);
margin-left: 2%;
background-color: #505050;
`

const linedraw = {
  hidden: {width: 0},
  show: {width: "calc(2rem + 20vw)", transition: { type: 'tween', duration: 1.3, delay: 1.3,}},
  exit: {width: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
}
const linedrawSec = {
  hidden: {width: 0},
  show: {width: "calc(2rem + 20vw)", transition: { type: 'tween', duration: 1.3, delay: 1.5,}},
  exit: {width: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
}

const linedrawTh = {
  hidden: {width: 0},
  show: {width: "calc(2rem + 22vw)", transition: { type: 'tween', duration: 1.3, delay: 1.8,}},
  exit: {width: 0, transition: {type: 'spring', duration: 0.9, delay: 0}},
}

export default function ContactForm() {
  const [buttonText, setButtonText] = useState("submit");
  const [buttonClass, setButtonClass] = useState("submitBut");




  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7g6xvh7', 'templatePortfolio', form.current, 'k_VbNyG4x1PTBSiw-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

 const buttonChange = () => {
      setButtonClass("submitBut active_submit")
      setButtonText("Thanks!")
  };

  return (
    <form ref={form} className="rootForm" onSubmit={sendEmail}>
      <h1 className="inputName">Name</h1>
        <input type="text" className="form" name="name" placeholder="What is your name ?" />
        <Line variants={linedraw} initial='hidden' animate='show' exit='exit'/>
      <h1 className="inputName">Email</h1>
        <input type="email"  className="form" name="email" placeholder="So i can get back to you " />
        <Line variants={linedrawSec} initial='hidden' animate='show' exit='exit'/>

      <h1 className="inputName">Message</h1>
        <textarea className="MessageForm"  name="message" placeholder="And your message to me..."></textarea>
        <Line variants={linedrawTh} initial='hidden' animate='show' exit='exit'/>
        {/* <Button text={"nigga"}  fun={submit} type="submit"></Button> */}

        <button  id="btn"  class={buttonClass} onClick={() => buttonChange()}>
            <p  id="btnText" className="butText">{buttonText}</p>
            <div className="check-box">
                <svg className="svgSub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>
        </button>

        
    </form>
  );
};