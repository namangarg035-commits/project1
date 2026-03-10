import React from 'react';
import "../styles/fourth.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Fourth(){
    return(
        <div className='fourthsection'>
            <div className='left'>
                <h1>Our BigCommerce Work</h1>
                <h4>Recent Websites We've Launched</h4>
            </div>

            <div className='right'>
                <span className='leftbutton'>
                    <FaArrowLeft />
                </span>
                <span className='rightbutton'>
                    <FaArrowRight />
                </span>

            </div>

        </div>
    );
}