import React from 'react'
import heroImage from "../images/photo-grid.png";

export default function Hero() {
    return(
            <div className="Hero">
                <img className="Hero-Image" srcSet={heroImage} alt={'Photo of Grid of Images'}/>
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
    )
}