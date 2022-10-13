import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate()
  
    const logeOut = () => {
        localStorage.setItem('token', '')
        navigate('/login')
    }

    return (
        <Card>
            <Card.Header as='h3'>Welcome Back, {localStorage.getItem('userName')}!</Card.Header>
            <Card.Body>
            
                <Card.Title>Session started</Card.Title>
                <Card.Text> Do you want to Log Out? </Card.Text>
                <Button variant='danger' onClick={logeOut}>Log out</Button>
            </Card.Body>
        </Card>
    )
}


export default SignIn

/*
<div className="login-page singInForm"> 
            <div className="form">
                <form className="register-form" >
                    <input type="text" placeholder="name"/>
                    <input type="password" placeholder="password"/>
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p className="message">Already registered? <button>Sign In</button></p>
                </form>
            </div>
        </div>
*/