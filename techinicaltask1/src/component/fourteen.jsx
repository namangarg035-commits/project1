import React from 'react';
import "../styles/fourteen.css";
import { FaPlus } from "react-icons/fa";

export default function Fourteen()  {
  
    return (
      <div className='fourteen-section'>
        <h1 style={{ fontWeight: "normal" }} ><strong>Got Questions? </strong>We’ve Got Answers.<br></br>FAQs</h1>
        <div className='fourteen-section-top'>
            <div className='fourteen-section-top-1'>
                <p>Where are you located?</p>
                <FaPlus />
                
            </div>

            <div className='fourteen-section-top-1'>
                <p>What platforms do you work with?</p>
                <FaPlus />
            </div>

            <div className='fourteen-section-top-1'>
                <p>What size businesses do you usually work with?</p>
                <FaPlus />
            </div>

            <div className='fourteen-section-top-1'>
                <p>What is your project management process?</p>
                <FaPlus />
            </div>

            <div className='fourteen-section-top-1'>
                <p>Do you offer website maintenance services?</p>
                <FaPlus />
            </div>
        </div>
      </div>
    )
  
}
