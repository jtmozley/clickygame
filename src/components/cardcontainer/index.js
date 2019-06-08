import React from 'react'
import './style.css'

export default function container(){
    return (
        <div className="container">
            <div className="row">{props.children}</div>
        </div>
    )
}