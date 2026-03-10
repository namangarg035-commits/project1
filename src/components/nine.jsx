import React from 'react';
import "../styles/nine.css";
import { FaArrowRight } from "react-icons/fa6";


export default function Nine() {
  
    return (
      <div className='nine-section'>
        <div className='nine-top'>
            <h1>Start Your BigCommerce Project Now!</h1>
        </div>
        <div className='nine-low'>
            <button className='nine-button'>LET'S CONNECT <span><FaArrowRight /></span></button>
        </div>
      </div>
    )
  
}
