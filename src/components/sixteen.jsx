import React from 'react';
import "../styles/sixteen.css";
import sixteen1 from "../assets/sixteen1.svg";
import sixteeen2 from "../assets/sixteeen2.svg";
import sixteen3 from "../assets/sixteen3.svg";
import sixteen4 from "../assets/sixteen4.svg";
import sixteen5 from "../assets/sixteen5.svg";
import sixteen6 from "../assets/sixteen6.svg";


export default function Sixteen() {
    return (
      <div className='sixteen-section'>
            <div className='sixteen-section-left'>
                <img src={sixteen1}></img>
                <p>Phone: +1-585-566-2070</p>
                <p>Email: info@kusheldigi.com</p>
            </div>
            <div className='sixteen-section-middle-1'>
                <h3>Quick links</h3>
                <p>Home</p>
                <p>About</p>
                <p>Service</p>
                <p>Portfolio</p>
                <p>Contact us</p>
            </div>
            <div className='sixteen-section-middle-2'>
                <h3>Our Services</h3>
                <p>Store Development & Setup</p>
                <p>Custom Theme Developiment</p>
                <p>Custom Development & Integrations</p>
                <p>BigCommerce B2B Development</p>
                <p>BigCommerce Platform Migration</p>
                <p>Multi-Storefront & Internationalization</p>
            </div>
            <div className='sixteen-section-right'>
                <h3>Company</h3>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <h3>Follow us</h3>
                <div className='sixteen-icons'>
                    <img src={sixteeen2}></img>
                    <img src={sixteen3}></img>
                    <img src={sixteen4}></img>
                    <img src={sixteen5}></img>
                    <img src={sixteen6}></img>

                </div>
            </div>
      </div>
    )

}
