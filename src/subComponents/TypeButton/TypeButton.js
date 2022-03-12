
import {AnimatePresence } from 'framer-motion'
import React from 'react'
import "./TypeButton.css"




function TypeButton(props) {

    return (
        <AnimatePresence>

            <div>

                <input name="buttons" onClick={() => props.first()} type="checkbox" id="cut" checked= {props.active === props.Name ? true : false} />     
                <label className="label-but" for="cut">{props.Name}</label>

                <input name="buttons" onClick={() => props.second()} type="checkbox" id="copy" checked= {props.active === props.NameSecond ? true : false}/>
                <label className="label-but" for="copy">{props.NameSecond}</label>

            </div>

        </AnimatePresence>
    )
}

export default TypeButton











