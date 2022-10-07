import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import SignIn from '../components/SignIn'

const Login = () => {
    const {register, handleSubmit} = useForm()
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const submit = (data) => {
        console.log(data)
        if(show === false) {
            axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login',data).then((res) => {
                alert('User Correct!')
               // console.log(res.data.data.token)
                localStorage.setItem('token', res.data.data.token)
                navigate('/')            
            })
            .catch(error => {
                if(error.response?.status === 400) {
                    alert('credenciales invalidas')
                } 

                console.log(error.response)
            })
        } else {
            console.log(data)
            axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users', data).then((res) => {
                alert('User Creado Exitosamente')
               // console.log(res.data.data.token)
            }).catch(error => console.log(error.response))
        }   
    }


    return (
        <>
            <Alert variant="success">
                <Alert.Heading>Hey, please use this user and password :)</Alert.Heading>
                <p>
                    <hr />
                User: john@gmail.com <br/>password: john1234 -- pass1234891
                </p>
            </Alert>
            <div className='login-page'>
                <div className='form'>
                    <form className='login-form' onSubmit={handleSubmit(submit)}>
                        <div className='imageUser'> <img src='/src/assets/user.svg' alt='image of user' /></div>
                        <label  style={{color: '#7f00b2'}} className='mb-2'>Welcome Back!</label>
                        <input type='text' placeholder='username' {...register("email")}/>
                        <input type='password' placeholder='password' {...register("password")}/>
                        <button type='submit'>login</button>
                        <p className='message'>Not registered? <a onClick={() => setShow(!show)} >Create an account</a></p>
                    </form>
            </div>
            {
                show && ( 
                    <div className='login-page singInForm'> 
                        <div className='form'>
                            <form className='register-form'  onSubmit={handleSubmit(submit)}>
                                <label style={{color: '#7f00b2'}} className='mb-2'>Account Login</label>
                                
                                <input type='text' placeholder='First Name' required {...register('firstName')}/>
                                <input type='text' placeholder='Last Name' {...register('lastName')}/>
                                <input type='password' placeholder='Password' required {...register('password')}/>
                                <input type='text' placeholder='Email address (10 characters)' required {...register('email')}/>
                                <input type='text' placeholder='Phone Number' {...register('phone')}/>
                                <button type='submit'>get Stated</button>
                                <p className="message">Already registered? <a onClick={() => setShow(!show)}>Sign In</a></p>
                            </form>
                        </div>
                    </div>
                )
            }
            </div>
        </>
    )
}

export default Login
/*
<li class="tab active"><a href="#signup" ref={signUp} type='submit' onClick={(e) =>setBtnSignUp(e.target.value)} >Sign Up</a></li>
                    <li class="tab"><a href="#login" ref={logIn} onClick={(e) => setBtnLogIn(e.target.value)}>Log In</a></li>
*/


//<a href="#signup" ref={signUp} onClick={(e) =>setBtnSignUp(e.target.value)} >Sign Up</a>

 {/*  <div>
                <h2>john@gmail.com</h2>
                <p>john1234</p>
            </div>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password")}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">Submit</Button>
    </Form>*/}

    /*
    <div className="form">
            <div className="tab-content">
                <div id="signup">   
                    <h1>Hi, Create or Insert you Acount</h1>
                    <form  onSubmit={handleSubmit(submit)}>
                        <div className="field-wrap">
                            <label> Email Address<span className="req">*</span>
                            </label>
                            <input type="email"required {...register("email")}/>
                        </div>
                        <div className="field-wrap">
                            <label> Set A Password<span className="req">*</span>
                            </label>
                            <input type="password"required {...register("password")}/>
                        </div>
                    </form>
                </div>
                
                <div id="login">

                    
                </div>
            </div>
            <div className="tab-group">
                <button className="tab active" type="submit">Sing Up</button>
                <button className="tab active" type="submit">Create User</button>
            </div>
        </div>
    
    
    */