import React from 'react';
import "../styles/sixth.css";
import six1 from "../assets/six1.svg";
import six2 from "../assets/six2.svg";
import six3 from "../assets/six3.svg";
import six4 from "../assets/six4.svg";
import six5 from "../assets/six5.svg";

export default function Sixth(){
    return(
        <div className='sixthsection'>
            <div className='six-top'>
                <h3 style={{fontStyle:"italic", fontSize:"24px", fontWeight:"400"}}>Why choose us</h3>
                <h1 style={{fontWeight:'500'}}>Whats make us better</h1>
            </div>

            <div className='six-middle'>
                <div className='six-container'>
                   <img src={six1}></img> 
                   <h2 style={{fontWeight:"600", fontSize:"24px"}}>Custom BigCommerce</h2>
                   <p>Tailored solutions to match your brand and business goals.</p>
                </div>

                <div className='six-container'>
                   <img src={six2}></img> 
                   <h2 style={{fontWeight:"600", fontSize:"24px"}}>Seamless Integrations</h2>
                   <p>Connect your store with payment gateways, CRMs, and marketing tools effortlessly</p>
                </div>

                <div className='six-container'>
                   <img src={six3}></img> 
                   <h2 style={{fontWeight:"600", fontSize:"24px"}}>Mobile-Optimized Designs</h2>
                   <p>Ensure a flawless shopping experience on all devices.</p>
                </div>

                

            </div>

            <div className='six-bottom'>
                    <div className='six-container'>
                   <img src={six4}></img> 
                   <h2 style={{fontWeight:"600", fontSize:"24px"}}>Scalable Solutions</h2>
                   <p>Grow your store without worrying about performance bottlenecks.</p>
                </div>

                <div className='six-container'>
                   <img src={six5}></img> 
                   <h2 style={{fontWeight:"600", fontSize:"24px"}}>Expert Support</h2>
                   <p>Ongoing maintenance and optimization to keep your store running smoothly.</p>
                </div>

            </div>

        </div>
    );
}