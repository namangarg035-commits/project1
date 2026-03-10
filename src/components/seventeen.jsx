import React from 'react';
import "../styles/seventeen.css";
import { FaChevronUp } from "react-icons/fa";

export default function Seventeen() {

    const scroll = () => {
        window.scrollTo({top: 0,behavior: "smooth"});
    };
  
    return (
      <div className='seventeen-main'>
        
            <button className='seventeen-button' onClick={scroll}>Back to top  <span ><FaChevronUp /></span></button>
            
        <p>@2025 Kusheldigi.All Rights resercved.</p>

      </div>
    )
}
