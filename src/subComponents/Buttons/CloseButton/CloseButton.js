import React from 'react'
import "./index.css"

export default function CloseButton({fun}) {


    return (

        <button onClick={() => fun()}  className="menu-btn open">
            <div className="menu-btn__burger"></div>
        </button>


            // <a className='homerightlink' onClick={() => fun()} style={style} href={link}>{text}</a>
    )
}
