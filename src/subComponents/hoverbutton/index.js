import React from 'react'
import "./index.scss"

export default function Button({text, link, style, fun,}) {
    return (
            <a className='homerightlink' onClick={() => fun()} style={style} href={link}>{text}</a>
    )
}
