import React from 'react';
import "../styles/eight.css";
import eight1 from "../assets/eight1.svg";
import eight2 from "../assets/eight2.svg";
import eight3 from "../assets/eight3.svg";
import eight4 from "../assets/eight4.svg";
import eight5 from "../assets/eight5.svg";
import eight6 from "../assets/eight6.svg";
import eight7 from "../assets/eight7.svg";
import eight8 from "../assets/eight8.svg";
import eight9 from "../assets/eight9.svg";
import eight10 from "../assets/eight10.svg";


export default function Eight() {
 
    return (
      <div className='eightsection'>
        <div className='eight-top'>
            <h1>Trusted by Leading E-Commerce Brands</h1>
        </div>
        <div className='eight-middle'>
            <div className='eight-container'>
                <img src={eight1} className='eight-img'></img>
            </div>
            <div className='eight-container'>
                <img src={eight2} className='eight-img'></img>
            </div>
            <div className='eight-container'>
                <img src={eight3} className='eight-img'></img>
            </div>
            <div className='eight-container'>
                <img src={eight4} className='eight-img'></img>
            </div>
            <div className='eight-container'>
                <img src={eight5} className='eight-img'></img>
            </div>
            


        </div>
        <div className='eight-lower'>
            <div className='eight-container'>
                <img src={eight6} className='eight-img'></img>
            </div>
            <div className='eight-container'>
                <img src={eight7} className='eight-img'></img>
            </div>
            <div className='eight-container'>
                <img src={eight8} className='eight-img'></img>
            </div>
            <div className='eight-container'>
                <img src={eight10} className='eight-img'></img>
            </div>
            <div className='eight-container'>
                <img src={eight9} className='eight-img'></img>
            </div>
        </div>

      </div>
    )
  
}
