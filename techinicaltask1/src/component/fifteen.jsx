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
            <img src={fifteen1} style={{ width: "650px"}}></img>
            <img src={fifteen2} ></img>
            <img src={fifteen3} ></img>
            <img src={fifteen4} ></img>
            
        </div>
        <div className='fifteen-right'>
            <p>Please fill in the form and let’s chat understand <br></br>how we can help you better</p>
            <form>
                <div className='fifteen-right-name'>
                    <input type="text" placeholder="First name*" required></input>
                    <input type="text" placeholder="Last name*" required></input>
                </div>
                <div className='fifteen-right-phone'>
                    <div className='fifteen-right-flag-box'>
                          <img src={fifteen5}></img>
                          <span><FaAngleDown /></span>
                    </div>
                    <input type="text" placeholder="Phone number"></input>
                </div>
                <input type="email" placeholder="Email*" required></input>
                <select>
                  <option>Services*</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>UI/UX Design</option>
                </select>

                <textarea placeholder="Message*" rows="5"></textarea>

            </form>
        </div>
      </div>
    )
  
}
