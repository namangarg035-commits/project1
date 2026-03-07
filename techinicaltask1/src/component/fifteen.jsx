import React from 'react';
import "../styles/fifteen.css";
import fifteen1 from "../assets/fifteen1.svg";
import fifteen2 from "../assets/fifteen2.svg";
import fifteen3 from "../assets/fifteen3.svg";
import fifteen4 from "../assets/fifteen4.svg";
export default function Fifteen() {
  
    return (
      <div className='fifteen-section'>
        <div className='fifteen-left'>
            <img src={fifteen1}></img>
            <img src={fifteen2}></img>
            <img src={fifteen3}></img>
            <img src={fifteen4}></img>
            
        </div>
        <div className='fifteen-right'>
            <p>Please fill in the form and let’s chat understand <br></br>how we can help you better</p>
            <div></div>
        </div>
      </div>
    )
  
}
