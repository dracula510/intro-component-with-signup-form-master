import React, {useState, useEffect} from 'react'
import classes from './Homepage.module.css'
import { Button, Row, Col, Form, InputGroup} from "react-bootstrap";


const Home = () => {
        const [validated, setValidated] = useState(false);



     const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }  
 
        setValidated(true);
   };

    return(
        <div className={classes.Body}>
            <div className={classes.Bg}>
                <div className={classes.Container}>
                    <div className={classes.Left}>
                        <h1>Learn to code by watching others</h1>
                        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                    </div>

                    <div className={classes.Right}>
                        <div className={classes.Banner}>
                            <p>Try it free 7 days<span> then $20/mo. thereafter</span></p>
                        </div>

                        <div className={classes.Form}>

                            <Form noValidate validated={validated} onSubmit={handleSubmit} className={classes.FormContainer}>
                            <Form.Group as={Col}  controlId='validationCustom01'>
                                <Form.Control type='text' placeholder='Enter First Name' required className={classes.Input}/>
                                <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId='validationCustom02'>
                                <Form.Control type='text' placeholder='Enter Last Name' required className={classes.Input}/>
                                <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}  controlId='validationCustom03'>
                                <Form.Control type='email' placeholder='Enter Email' required className={classes.Input}/>
                                <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}  controlId='validationCustom04'>
                                <Form.Control type='password' placeholder='Enter Password' required className={classes.Input}/>
                                <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId='validationCustom05'>
                                <Form.Control type='button' value={'Claim your free trial'} required className={classes.Input}/>
                            </Form.Group>
                           </Form>

                            <div className={classes.Terms}>
                               <p>By clicking the button, you are agreeing to our <span><a href='#'>Terms and Services</a></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;