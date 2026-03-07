import React from 'react';
import "../styles/second.css";
import telephone from "../assets/telephone 1.png";
import whatsapp from "../assets/whatsapp 1.png";
import secondsection from '../assets/secondsection.svg';
 export default function Second(){
    return(
        <section className="hero" style={{ backgroundImage: `url(${secondsection})` }}>

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-left">
          <h1>
            Custom <span>BigCommerce</span> <br />
            Development | Scalable,
            <br />
            Secure & Conversion-Driven
          </h1>

          <p>
            From stunning store designs to seamless integrations,
            we help businesses like yours unlock the full potential
            of BigCommerce for faster growth and higher sales.
          </p>

          <div className="hero-buttons">

            <button className="call-btn">
                <img className='telephone' src={telephone}></img>+1-585-566-2070
            </button>

            <button className="whatsapp-btn">
              <img className='whatsapp' src={whatsapp} ></img>WhatsApp
            </button>

          </div>
        </div>

        {/* RIGHT FORM */}

        <div className="form-box">

          <h3>
            Looking for <b>E-Commerce Development</b> Services?
          </h3>

          <form>

            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email*" />

            <div className="mobile-row">
              <select>
                <option>USA (+1)</option>
                <option>India (+91)</option>
                <option>UK (+44)</option>
              </select>

              <input type="text" placeholder="Mobile Number" />
            </div>

            <select>
              <option>Services</option>
              <option>BigCommerce Development</option>
              <option>Shopify Development</option>
              <option>Magento Development</option>
            </select>

            <textarea
              placeholder="To help us understand better, enter a brief description about your project."
            ></textarea>

            <button className="submit-btn">
              SUBMIT
            </button>

          </form>

        </div>

      </div>

    </section>
    );
}