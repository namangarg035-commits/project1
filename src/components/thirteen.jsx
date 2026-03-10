import React from 'react';
import "../styles/thirteen.css";
import thirteen1 from "../assets/thirteen1.svg";
import { FaArrowRight } from "react-icons/fa6";
export default function Thirteen() {
  
    return (
      <div className='thirteen-section'>
        <h1 style={{ marginBottom: "40px" }}>Our Packages</h1>
        <div className='thirteen-container'>
            <div className='thirteen-container-1'>
                <div className='thirteen-package'>
                    <h3>Essential Plan</h3>
                    <p>Get a fully customized store setup with seamless Flxpoint integration and built on the power of BigCommerce.</p>
                </div>
                <div className='thirteen-prize-1'>
                    <h1>$3,500</h1>
                    <p>Total Project Cost</p>
                </div>

                <div className='thirteen-prize-1'>
                    <h1>$1,750</h1>
                    <p>Deposit Cue at Sign Up </p>
                </div>

                <div className='thirteen-features'>
                    <h2>Features : </h2>
                    <ul>
                        <li><img src={thirteen1}></img>Our custom designed theme optimized for conversion</li>
                        <li><img src={thirteen1}></img>Optimized policy pages (privacy, cookie, terms of use, shipping, and returns)</li>
                        <li><img src={thirteen1}></img>Customized to match your unique brand and company</li>
                        <li><img src={thirteen1}></img>Three content pages optimized with AI to communicate your message while engaging your customers</li>
                        <li><img src={thirteen1}></img>All shipping rules setup for you</li>
                        <li><img src={thirteen1}></img>All tax rules setup for you</li>
                    </ul>
                </div>
                <button className='thirteen-button'>Gets Start Today <span> <FaArrowRight /> </span></button>

            </div>
            <div className='thirteen-container-2'>
                <div className='thirteen-package'>
                    <h3>Growth Plan</h3>
                    <p>Take advantage of our best design and user experience. Full of the features that have proven to convert more shoppers into buyers.</p>
                </div>
                <div className='thirteen-prize-1'>
                    <h1>$4,500</h1>
                    <p>Total Project Cost</p>
                </div>

                <div className='thirteen-prize-1'>
                    <h1>$2,250</h1>
                    <p>Deposit Cue at Sign Up </p>
                </div>

                <div className='thirteen-features'>
                    <h2>Features : </h2>
                    <ul>
                        <li><img src={thirteen1}></img>Our top of the line design theme</li>
                        <li><img src={thirteen1}></img>Optimized policy pages (privacy, cookie, terms of use, shipping, and returns)</li>
                        <li><img src={thirteen1}></img>Customized to match your unique brand and company</li>
                        <li><img src={thirteen1}></img>Three content pages optimized with AI to communicate your message while engaging your customers</li>
                        <li><img src={thirteen1}></img>All shipping rules setup for you</li>
                        <li><img src={thirteen1}></img>All tax rules setup for you</li>
                    </ul>
                </div>
                <button className='thirteen-button'>Gets Start Today <span> <FaArrowRight /> </span></button>

            </div>
            <div className='thirteen-container-3'>
            
                <div className='thirteen-package'>
                    <h3>Pro Plan</h3>
                    <p>Take our best theme to the next level by adding integrations to third party apps like Flxpooint, Judge.me, Smile.io and more.</p>
                </div>
                <div className='thirteen-prize-1'>
                    <h1>$6,500</h1>
                    <p>Total Project Cost</p>
                </div>

                <div className='thirteen-prize-1'>
                    <h1>$3,250</h1>
                    <p>Deposit Cue at Sign Up </p>
                </div>

                <div className='thirteen-features'>
                    <h2>Features : </h2>
                    <ul>
                        <li><img src={thirteen1}></img>Our custom designed theme optimized for conversion</li>
                        <li><img src={thirteen1}></img>Optimized policy pages (privacy, cookie, terms of use, shipping, and returns)</li>
                        <li><img src={thirteen1}></img>Customized to match your unique brand and company</li>
                        <li><img src={thirteen1}></img>Three content pages optimized with AI to communicate your message while engaging your customers</li>
                        <li><img src={thirteen1}></img>All shipping rules setup for you</li>
                        <li><img src={thirteen1}></img>All tax rules setup for you</li>
                    </ul>
                </div>
                <button className='thirteen-button'>Gets Start Today <span><FaArrowRight /> </span></button>

            </div>
            
        </div>
      </div>
    )
  
}
