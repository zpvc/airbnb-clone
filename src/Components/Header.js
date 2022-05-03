import React from 'react'
import logo from "../images/airbnb-logo.png";

export default function Header(){
    return(
            <header className="App-header">
                <img className="App-logo" srcSet={logo} alt='Airbnb Logo' />
            </header>
    )
}