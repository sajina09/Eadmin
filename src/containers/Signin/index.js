import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "./style.css";

/**
* @author
* @function Signin
**/

const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();




    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));
    }

    if (auth.authenticate) {
        return <Redirect to={`/`} />
    }

    return (
        <Layout>
            
            <Container>
                <div className='signin_main'>
                    <div className="image-container"> 
                        {<img  className="image" src={"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v921-audi-wit-035-b_1.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=9b9b65c66762af7590a8d1f874f808c9"}  alt="" /> }
                    </div>
                    <div className='signin_container' >

                        <Row style={{ marginTop: '25%' }}>
                            <Col md={{ span: 20, offset: 1 }}>
                                <Form onSubmit={userLogin}> 
                                <div className='welcome'> Welcome<br></br> Back ! </div>
                                <br></br>
                                    <div className='email_label'>
                                      
                                    <Input
                                        label="Email" 
                                        placeholder="Enter your Email"
                                        value={email}
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <Input
                                        label="Password"
                                        placeholder="Enter your Password"
                                        value={password}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    /></div>
                                    <div className='signin_button'>
                                    <Button variant="primary" type="submit">
                                        Sign In
                                    </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>



                    </div>
                </div> </Container>
        </Layout>
    )
}

export default Signin