import React from 'react';
import "../styles/third.css";
import certified from "../assets/certified.svg";
import patner from "../assets/patner.svg";

export default function Third(){
    return (
        <div className='thirdsection'>
            <div className='main'>
                <h3>Award-winning Agency <br />Partner</h3>
               <div className='right2'> 
    <img src={certified} className='certified' />
    <img src={patner} className='patner' />
</div>
            </div>

        </div>
    );
}