import React from 'react'
import heroImage from "../images/photo-grid.png";

export default function Hero() {
    return(
            <div className="Hero">
                <img className="Hero-Image" srcSet={heroImage} alt={'Grid of Photos'}/>
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
    )
}