import React, {useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Header2 from "../component/mainHeader2";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';


function Success() {


    return(
        <>
           <div className="row mr-1">
               <div className="col-12 text-center">
            <AiIcons.AiFillCheckCircle 
            size={220}
            />
               </div>
               <div className="col-12 text-center" style={{marginTop:50, paddingRight:150, paddingLeft:200}}>
                   <h2>
                       Thank you very much for taking the time to complete this assessment.
                   </h2>
                   <br />
                   <h6 style={{paddingRight:150,paddingLeft:130}}>
                   Please check your e-mail inbox. A copy of your assessment answers has just been sent to you.
                   </h6>
                   <br />
                   <Link to="/options">
                   <button className="btn btn-primary mt-2 mr-4" style={{backgroundColor:"white", color:"blue"}}>
                       Back to Home Screen
                   </button>
                   </Link>

               </div>

           </div>

        </>
    )
}

export default Success;