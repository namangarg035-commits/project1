import Reacr from "react";
import kdslogo from "../assets/kdslogo.svg";
import "../styles/nav.css";
import { IoCallOutline } from "react-icons/io5";

export default function Navbar(){
    return(
        <div className="navcontainer">
            <img src={kdslogo} className="kdsicon"></img>
            <div className="buttonconatiner">
            <button className="callbutton" ><IoCallOutline />Call Now</button>
            <button className="bookbutton">Book Free Consulation</button>
            </div>
        </div>
    );
}