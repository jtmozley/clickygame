import React from 'react'
import './style.css'

export default function Container(props){
    return (
        <div className="container">
            <div className="row justify-content-center">{props.children}</div>
        </div>
    )
}