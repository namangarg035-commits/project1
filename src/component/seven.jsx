import React from 'react'
import "../styles/seven.css"
import seven1 from "../assets/seven1.svg";
import seven2 from "../assets/seven2.svg";
import seven3 from "../assets/seven3.svg";
export default function Seven() {
 
    return (
      <div className='sevensection'>
            <div className='seven-container'>
                <img src={seven1}></img>
                <h3>110+ BigCommerce Projects Launch</h3>

            </div>
            <div className="seven-line"></div>
            <div className='seven-container'>
                <img src={seven2}></img>
                <h3>7+ Years Experience</h3>
            </div>
            <div className="seven-line"></div>

            <div className='seven-container'>
                <img src={seven3}></img>
                <h3>90+ BigCommerce Clients </h3>

            </div>
      </div>
    )
}
