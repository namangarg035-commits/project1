import React from 'react';
import "../styles/fourth.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import {right,left} from './fifth1';
export default function Fourth(){
    return(
        <div className='fourthsection'>
            <div className='fourthsection-left'>
                <h1 style={{fontWeight:"400", fontSize:'40px'}}>Our BigCommerce Work</h1>
                <h4 style={{fontWeight:"300", fontSize:'20px'}}>Recent Websites We've Launched</h4>
            </div>

            <div className='fourthsection-right'>
                <span className='fourthsection-leftbutton' onClick={left} >
                    <GoArrowLeft size={25} />
                </span>
                <span className='fourthsection-rightbutton' onClick={right}>
                    <GoArrowRight  size={25}  />
                </span>
            </div>

        </div>
    );
}