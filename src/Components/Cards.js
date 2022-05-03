import React from 'react'
import Swimmer from '../images/Cards/swimmer.png'
import Wedding from '../images/Cards/wedding-photography.png'
import Bike from '../images/Cards/mountain-bike.png'
import Star from '../images/Star.png'

export default function Cards() {
    return(
        <div className="Cards">
            <div className="Card">
                <img className="Card--Image" srcSet={Swimmer} alt="Swimmer" width='176' height='235' />
                <span className="Card--Rating"><img className="Card--Rating--Star" srcSet={Star} alt="Star"/> 5.0 (6) USA</span>
                <p className="Card--Description">Lessons with Katie Zaferas</p>
                <p className="Card--Pricing"><strong>From $135</strong> / person</p>
            </div>
            <div className="Card">
                <img className="Card--Image" srcSet={Wedding} alt="Wedding" width='176' height='235' />
                <span className="Card--Rating"><img className="Card--Rating--Star" srcSet={Star} alt="Star"/> 5.0 (30) USA</span>
                <p className="Card--Description">Learn wedding photography</p>
                <p className="Card--Pricing"><strong>From $125</strong> / person</p>
            </div>
            <div className="Card">
                <img className="Card--Image" srcSet={Bike} alt="Mountain Bike" width='176' height='235' />
                <span className="Card--Rating"><img className="Card--Rating--Star" srcSet={Star} alt="Star"/> 4.8 (2) USA</span>
                <p className="Card--Description">Group Mountain Biking Lessons</p>
                <p className="Card--Pricing"><strong>From $50</strong> / person</p>
            </div>
        </div>
    )
}