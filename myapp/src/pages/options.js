import React from "react";
import Header1 from "../component/mainHeader1";
import Container from "react-bootstrap/Container";
import * as IoIcons from 'react-icons/io';
import {IconContext} from "react-icons";
import { Link } from 'react-router-dom';


import "./login.css";

 

function Options() {
    return(
        <Container style={{marginRight:150}}>
            
       <Header1/>

       <div className="row">
          <div className="col-12 mt-5  text-center">
            <h5 style={{fontWeight: "bold"}}>Please select your option</h5>

          </div>
     
          <div className="mt-5  col-12 text-center">
              <Link to="/instructions">
              <button className="option" style={{height:70,width:300, backgroundColor:"white"}} >
                
                START SELF ASSESSMENT  
                     <span style={{marginLeft:30}}> <IoIcons.IoIosArrowForward /></span>
                
              </button>
              </Link>

          </div>
          <div className="mt-2  col-12 text-center">
          <Link to="/uploadDocuments">

              <button className="option" style={{height:70,width:300, backgroundColor:"white"}} >
                
                DOCUMENTATION UPLOAD  
                     <span style={{marginLeft:30}}> <IoIcons.IoIosArrowForward /></span>
                
              </button>
              </Link>

          </div>
          <div className="mt-2  col-12 text-center">
              
              <button className="option" style={{height:70,width:300 , backgroundColor:"white"}} >
                
                MEDIA UPLOAD  
                     <span style={{marginLeft:120}}> < IoIcons.IoIosArrowForward /></span>
                
              </button>

          </div>
      </div>
   
       </Container>
    )
}
export default Options