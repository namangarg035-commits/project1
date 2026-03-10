import React from 'react';
import "../styles/fifteen.css";
import fifteen1 from "../assets/fifteen1.svg";
import fifteen2 from "../assets/fifteen2.svg";
import fifteen3 from "../assets/fifteen3.svg";
import fifteen4 from "../assets/fifteen4.svg";
import fifteen5 from "../assets/fifteen5.svg";
import { FaAngleDown } from "react-icons/fa";
export default function Fifteen() {
  
    return (
      <div className='fifteen-section'>
        <div className='fifteen-left'>
            <img src={fifteen1} style={{ width: "435px"}}></img>
            <img src={fifteen2} style={{ width: "400px"}}></img>
            <img src={fifteen3} style={{ width: "400px"}}></img>
            <img src={fifteen4} style={{ width: "400px"}}></img>
            
        </div>
        <div className='fifteen-right'>
            <p>Please fill in the form and let’s chat understand <br></br>how we can help you better</p>
            <form>
                <div className='fifteen-right-name'>
                    <input type="text" placeholder="First name*" required className='fifteen-name'></input>
                    <input type="text" placeholder="Last name*" required className='fifteen-lastname'></input>
                </div>
                <div className='fifteen-right-phone'>
                    <div className='fifteen-right-flag-box'>
                        <div>
                          <img src={fifteen5} ></img>
                        </div>
                          <span><FaAngleDown /></span>
                    </div>
                    
                    <input type="text" placeholder="Phone number" className='fifteen-number'></input>
                    
                </div>
                <input type="email" placeholder="Email*" required className='fifteen-email'></input>
                <select className='fifteen-service'>
                  <option  style={{background: "blue" }}>Services*</option>
                  <option style={{ background: "blue" }}>Web Development</option>
                  <option style={{ background: "blue" }}>App Development</option>
                  <option style={{ background: "blue" }}>UI/UX Design</option>
                </select>

                <textarea placeholder="Message*" rows="5" className='fifteen-message'></textarea>
                <button className='fifteen-button'>let's connect</button>
            </form>
            
        </div>
      </div>
    )
  
}
