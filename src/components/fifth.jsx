import React from 'react';
import "../styles/fifth.css";

import sec2 from "../assets/sec2.svg";
import sec3 from "../assets/sec3.svg";
import sec4 from "../assets/sec4.svg";
import sec6 from "../assets/sec6.svg";
import sec5 from "../assets/sec5.svg";
import fifth1 from "../assets/fifth1.svg";
import fifth2 from "../assets/fifth2.svg";
import fifth3 from "../assets/fifth3.svg";
import fifth4 from "../assets/fifth4.svg";
import fifth5 from "../assets/fifth5.svg";
import fifth6 from "../assets/fifth6.svg";
import display from './fifth1';
export default function Fifth(){
    return(
        <div className='fifthsection'>
            <div className='fifthsection-top'>
                <img src={sec2} onClick={()=>display(0)} id="fifthsection-top-logo1"></img>
                <img src={sec3} onClick={()=>display(1)} id="fifthsection-top-logo2"></img>
                <img src={sec4} onClick={()=>display(2)} id="fifthsection-top-logo3"></img>
                <img src={sec6} onClick={()=>display(3)} id="fifthsection-top-logo4"></img>
                <img src={sec5} onClick={()=>display(4)} id="fifthsection-top-logo5"></img>
            </div>
            <div className="line"></div>
            
            <div className='fifthsection-bottom'>
                <div className='fifthsection-bottom-left'>
                    <img src={fifth1} style={{width:"300px", height:"400px"}} id="fifthsection-bottom-left-photo"></img>
                </div>

                <div className='fifthsection-bottom-middle'>
                    <img src={fifth6} style={{width:'150px',height:'150px'}}></img>
                </div>
                <div className='fifthsection-bottom-right'>
                    <h1 id="fifthsection-bottom-right-topheading">Top Brass Tactical</h1>
                    <div className='fifthsection-bottom-right-button'>
                        <button className='fifthsection-bottom-right-button-1'>B2B</button>
                        <button className='fifthsection-bottom-right-button-2'>Military & tactical industry </button>
                    </div>
                    <p style={{lineHeight:"30px", fontSize:"20px"}}><strong>What We Did:</strong> Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.</p>
                    <div className='fifthsection-bottom-right-content'>
                        <p>INCREASED CONVERSIONS</p>
                        <p id="fifthsection-bottom-right-content-number1">+85%</p>
                    </div>
                    <div className='fifthsection-bottom-right-content'>
                        <p>INCREASED REVENUE</p>
                        <p id="fifthsection-bottom-right-content-number2">+58%</p>
                    </div>
                    <div className='fifthsection-bottom-right-content'>
                        <p>INCREASED AOV</p>
                        <p id="fifthsection-bottom-right-content-number3">+6%</p>
                    </div>
                </div>

            </div>
        </div>
    );
}