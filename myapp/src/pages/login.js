import React , {useState, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as FaIcons from 'react-icons/fa';
import './login.css';
import Header1 from "../component/mainHeader1";
import { Link } from 'react-router-dom';




function Login() {


  const [passwordShown, setPasswordShown] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>

    <Container>
      <Header1 />
      <div className="row">
          <div className="col-12 mt-5 text-center">
            <h3 style={{fontWeight: "bold"}}>Welcome to EREKS Pilot Self Assessment Tool by Blu-Label</h3>

          </div>
          
          <div className="col-12 mt-3 text-center" style={{marginLeft:80,paddingRight:390,paddingLeft:250}}>
            <h6>To begin this journey, please enter your email and create your password for future use.</h6>

          </div>
          
          
        </div>
           <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Enter your email:</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            placeholder="e.g name@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Create your password:</Form.Label>
          <Form.Control
          type={passwordShown ? "text" : "password"}
            placeholder="choose password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         <i onClick={togglePasswordVisiblity}> <FaIcons.FaEye /> </i>
        </Form.Group>
        <Link to="/options">
        <Button id="button" style={{backgroundColor:"rgb(66, 40, 133)"}} block size="md" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        </Link>
      </Form>
    </div>
   
      
      </Container>  
   </>
  );
}

export default Login;
