import React from 'react';
import "../styles/fifth.css";

import sec2 from "../assets/sec2.svg";
import sec3 from "../assets/sec3.svg";
import sec4 from "../assets/sec4.svg";
import sec6 from "../assets/sec6.svg";
import sec5 from "../assets/sec5.svg";

export default function Fifth(){
    return(
        <div className='fifthsection'>
            <div className='header'>
                
                <img src={sec2}></img>
                <img src={sec3}></img>
                <img src={sec4}></img>
                <img src={sec6}></img>
                <img src={sec5}></img>
            </div>
            <div className="line"></div>
            
        </div>
    );
}