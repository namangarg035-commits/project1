import React from 'react';
import "../styles/fourth.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {right,left} from './fifth1';
export default function Fourth(){
    return(
        <div className='fourthsection'>
            <div className='fourthsection-left'>
                <h1>Our BigCommerce Work</h1>
                <h4>Recent Websites We've Launched</h4>
            </div>

            <div className='fourthsection-right'>
                <span className='fourthsection-leftbutton' onClick={left} >
                    <FaArrowLeft />
                </span>
                <span className='fourthsection-rightbutton' onClick={right}>
                    <FaArrowRight />
                </span>
            </div>

        </div>
    );
}