import React from 'react';
import "../styles/twelve.css";
import { FaArrowRight } from "react-icons/fa";

export default function Twelve() {
    return (
      <div className='twelve-section'>
            <h1 className='twelve-heading'>Ready to take your <strong>e-commerce</strong> business <br></br> to the next level?</h1>
            <p className='twelve-para'>Let’s build your dream BigCommerce store today!"</p>
            <button className='twelve-button'>GET STARTED NOW <FaArrowRight /></button>
      </div>
    )
}
