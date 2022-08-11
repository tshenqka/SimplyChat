import React, { Component } from 'react'

let tracker = 0

const toggle = () => {
    if (tracker % 2 === 0) 
        document
            .querySelector(".App")
            .setAttribute("class", "App lightmode")
    else document.querySelector(".App").setAttribute("class", "App")
    tracker++
}


export const Darkmode = () => {
    return(<button onClick={toggle}>Toggle</button>)
}