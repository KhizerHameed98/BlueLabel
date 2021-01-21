import React , {useState, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Header3 from "../component/mainHeader3";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

import "./uploadDocument.css";

function UploadDoc (){
    const [selectedFiles, setSelectedFIles] = useState([]);

const handleDelete=(index)=>{
    selectedFiles.splice(index,1);
    setSelectedFIles([...selectedFiles]);
}

function onChangeHandler(event){
    // console.log(event.target.files[0].name);
    setSelectedFIles([...selectedFiles,event.target.files[0]]);

}
    return(
        <>
        <Container>
            <Header3 />
	<div className="row">
	  
	   <div className="col-md-6 " style={{marginLeft:280,marginTop:100}}>
	      
           <div className="form-group files color">
                <label>Documentation Upload</label>
                <input style={{padding:120}} type="file" name="file" className="form-control" multiple onChange={onChangeHandler}/>
              </div>

              {
              selectedFiles.map((file,index)=>{
                  return(
                      <div key={index} className="mb-2 row" style={{backgroundColor: "#f1f1f1", height:55, borderRadius:20}}>
                          
                            <div className="col-6">
                                {file.name}

                                </div>
                                <div className="col-6 text-right mt-3">
                                    
                                <Link to ="#">
                          <MdIcons.MdCancel size={25}  onClick={()=>{handleDelete(index)}}/>
                          </Link>
                                    </div>

                      
                      </div>
                  )
              })
          }
            
          </div>
          
          
</div>
<div className="text-right mt-5">
    <Link to ="/options">
<Button id="backButton" style={{backgroundColor:"white", color: "blue",marginRight:50, width:100}}  size="md" type="submit">
Back
        </Button>
        </Link>
    <Link to ="/options">
<Button style={{backgroundColor:"rgb(66, 40, 133)", marginRight:280}} id="button" size="md" type="submit">
          Submit 
          
          <FaIcons.FaPaperPlane style={{marginLeft:10}}/>
          
        </Button>
        </Link>
        </div>
        </Container>
        </>
    )
}
export default UploadDoc;