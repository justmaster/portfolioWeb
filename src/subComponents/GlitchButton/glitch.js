import React from 'react'
import "./glitch.css"


function GlitchButton(props) {
    return (
        <div className="glitchContainer">
            <button className='glitchbutton' 
                    style={{backgroundColor: "white"}} >
                {props.text}
            </button>
            <button className='glitchbutton'>{props.text1}</button>
            <button className='glitchbutton'>{props.text2}</button>
            <button className='glitchbutton'>{props.text3}</button>
            <button className='glitchbutton'>{props.text4}</button>
            

        </div>
    )
}

export default GlitchButton