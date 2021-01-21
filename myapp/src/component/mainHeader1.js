import React from "react";
import logo from "../images/logo.png";
import blueLabel from "../images/blueLabel.png";

function Header1() {
    return(
        <>
         <div className="row mt-3">
        <div className="col-md-6 col-sm-12 text-right">
        <img src ={logo} style={{width:150}} alt ="LOGO" />

        </div>
        <div className="col-md-1 mr-2 col-sm-6" style={{color:"gray", marginTop:70}}>
        <h2 >EREKS</h2>

        </div>
        <div className="ml-4" style={{marginTop:75,color:"gray",height:25 ,borderLeftWidth:3,borderLeftStyle: 'solid'}}>
      
        </div>
        <div className="col-2 col-sm-4" style={{marginTop:70}}>
          
        <img src ={blueLabel} style={{width:50}} alt ="LOGO" />
        </div>
       
        

      </div>


   
        </>
    )
}
export default Header1