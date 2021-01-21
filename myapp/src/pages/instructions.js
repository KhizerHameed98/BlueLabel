import React from "react";
import Header1 from "../component/mainHeader1";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import './login.css';

function Instructions(){
    return(
        <>
        <Container>
      
       <Header1/>

       <div className="row">
           <div className="col-md-12 text-center mt-3" style={{paddingLeft:350, paddingRight:330}}>
               <h6 style={{fontWeight:"bold", letterSpacing:1}}>
                   Please read carefully the following instructions to fill in the assessment
               </h6>

           </div>

       </div>
       <div className="container mt-5" style={{paddingRight:200, marginLeft:120}}>
       <ul>
                <li>In each question please tick the box if you agree the described action applies to EREKS'
                    current operations. If not the case, please leave the box unticked.
                </li>
                <br />
                <li>
                    Please take your time to make sure your answers are accurate. There is no time limit to complete this
                    assessment.
                </li>
                <br />
                <li>You can change your answer anytime during the assessment. You will also be able to review all your answers
                    before the final submission and change them if you wish so.
                </li>
                <br />


                <li>
                    Once submitted, your answer can only be changed by taking again the full assessment from the start.
                </li>
        </ul>
        <Link to="/survey">
        <button id="button" className="mt-4 btn btn-primary text-center" style={{backgroundColor:"#422885",marginLeft:"30%", width:300}}>
            Let's Start
        </button>
        </Link>
        <Link to ="/options">
        <button id="backButton" className="mt-3 btn text-center" style={{fontWeight:"bold",marginLeft:"30%", width:300}}>
            Back
        </button>
        </Link> 
       </div>
        </Container>
        </>
    )

}

export default Instructions