import React from 'react';
import "../styles/eleven.css";
import eleven1 from "../assets/eleven1.svg";
import eleven2 from "../assets/eleven2.svg";
import eleven3 from "../assets/eleven3.svg";
import eleven4 from "../assets/eleven4.svg";
import eleven5 from "../assets/eleven5.svg";
import eleven6 from "../assets/eleven6.svg";
import eleven7 from "../assets/eleven7.svg";
import eleven8 from "../assets/eleven8.svg";
import eleven9 from "../assets/eleven9.svg";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Eleven() {
    return (
      <div className='eleven-section'>
        <div className='eleven-top'>
            <div className='eleven-container'>
                <div className='eleven-container-top'>
                    <img src={eleven1}></img>
                    <p>1</p>
                </div>
                <div className='leven-container-bottom'>
                    <h3 style={{color:"white"}}>Store Development & Setup</h3>
                    <p style={{color:"white"}}>we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers.
                        Whether you're launching a new store or upgrading an existing one, we ensure a seamless, high-performing eCommerce experience.</p>
                </div>
            </div>

            <div className='eleven-container'>
                <div className='eleven-container-top'>
                    <img src={eleven2}></img>
                    <p>2</p>
                </div>
                <div className='leven-container-bottom'>
                    <h3 style={{color:"white"}}>Custom Theme Development</h3>
                    <p style={{color:"white"}}>we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. 
                        Whether you're launching a new store or upgrading an existing one, we ensure a seamless, high-performing eCommerce experience.</p>
                </div>
            </div>

            <div className='eleven-container'>
                <div className='eleven-container-top'>
                    <img src={eleven3}></img>
                    <p>3</p>
                </div>
                <div className='leven-container-bottom'>
                    <h3 style={{color:"white"}}>Custom Development & Integrations</h3>
                    <p style={{color:"white"}}>We design and develop custom BigCommerce themes tailored to your brand, ensuring a seamless, high-performance shopping experience that drives conversions and engagement.</p>
                </div>
            </div>
        </div>
        <div className='eleven-middle'>
            <div className='eleven-container'>
                <div className='eleven-container-top'>
                    <img src={eleven4}></img>
                    <p>4</p>
                </div>
                <div className='leven-container-bottom'>
                    <h3 style={{color:"white"}}>BigCommerce B2B Development</h3>
                    <p style={{color:"white"}}>we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. 
                        Whether you're launching a new store or upgrading an existing one, we ensure a seamless.</p>
                </div>
            </div>

            <div className='eleven-container'>
                <div className='eleven-container-top'>
                    <img src={eleven5}></img>
                    <p>5</p>
                </div>
                <div className='leven-container-bottom'>
                    <h3 style={{color:"white"}}>BigCommerce Platform Migration</h3>
                    <p style={{color:"white"}}>we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers.
                        Whether you're launching a new store or upgrading an existing one, we ensure a seamless.</p>
                </div>
            </div>

            <div className='eleven-container'>
                <div className='eleven-container-top'>
                    <img src={eleven6}></img>
                    <p>6</p>
                </div>
                <div className='leven-container-bottom'>
                    <h3 style={{color:"white"}}>Multi-Storefront & Internationalization</h3>
                    <p style={{color:"white"}}>we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. 
                        Whether you're launching a new store or upgrading an existing one, we ensure a seamless.</p>
                </div>
            </div>

        </div>
        <div className='eleven-lower'>
                <div className='eleven-container'>
                <div className='eleven-container-top'>
                    <img src={eleven7}></img>
                    <p>7</p>
                </div>
                <div className='leven-container-bottom'>
                    <h3 style={{color:"white"}}>App & Plugin Development</h3>
                    <p style={{color:"white"}}>we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. 
                        Whether you're launching a new store or upgrading an existing one, we ensure a seamless.</p>
                </div>
            </div>

            <div className='eleven-container'>
                <div className='eleven-container-top'>
                    <img src={eleven8}></img>
                    <p>8</p>
                </div>
                <div className='leven-container-bottom'>
                    <h3 style={{color:"white"}}>Headless Commerce & API Development</h3>
                    <p style={{color:"white"}}>we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. 
                        Whether you're launching a new store or upgrading an existing one, we ensure a seamless.</p>
                </div>
            </div>

            <div className='eleven-container'>
                <div className='eleven-container-top'>
                    <img src={eleven9}></img>
                    <p>9</p>
                </div>
                <div className='eleven-container-bottom'>
                    <h3 style={{color:"white"}}>Headless eCommerce</h3>
                    <p style={{color:"white"}}>we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. 
                        Whether you're launching a new store or upgrading an existing one, we ensure a seamless.</p>
                </div>
            </div>
        </div>
        <button className='eleven-button'>DISCUSS A PROJECT <FaArrowRightLong /></button>
      </div>
    )
  
}
