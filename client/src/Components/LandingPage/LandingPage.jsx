import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"

export default function LandingPage() {
    return (

       
        <div className="landingbackground">
            <div className="contlanding">
                <h1>PI FOOD - Mathez Jorge</h1>
                <Link to='/home'>
                    <button className="enterbutton">INGRESAR</button>
                </Link>
                <a src href="https://www.linkedin.com/in/jorge-mathez-598597260/" className="Linkedin" ><img src="https://media.tenor.com/KOki-OrS24AAAAAC/linkedin.gif" width="125" height="100" alt="" /></a>.
                
                <img className="luffy" src="https://media.tenor.com/p3xh2LVG4ukAAAAj/monkey-d-luffy-one-piece.gif" alt="" />
  
            </div>
        </div>
        
    )
}