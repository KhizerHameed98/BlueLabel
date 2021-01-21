import React from "react";
import logo from "../images/logo.png";
import blueLabel from "../images/blueLabel.png";
import Clock from 'react-digital-clock';
import * as AiIcons from "react-icons/ai";

import "./header2.css";

function Header2() {
    return(
        <>
         <div className="row mt-4">
        <div className="col-md-1 col-sm-12 text-right">
        <img src ={logo} style={{width:70}} alt ="LOGO" />

        </div>
        <div className="col-md-1 mr-5 mt-3 col-sm-6" style={{color:"gray"}}>
        <h5 >EREKS</h5>

        </div>
        <div className="header2logo" style={{color:"gray",height:18 ,borderLeftWidth:2,borderLeftStyle: 'solid'}}>
      
        </div>
        <div className="col-1 mt-3 col-sm-4 "style={{position:"absolute",left:300}}>
        <img src ={blueLabel} style={{width:40}} alt ="LOGO" />

        </div>
        <div className="col-6 mt-3 text-center" style={{marginLeft:50}}>
            <h3 style={{fontWeight:"bold"}}>EREKS PILOT SELF ASSESSMENT</h3>

        </div>
      
       
       
        

      </div>

   
        </>
    )
}
export default Header2