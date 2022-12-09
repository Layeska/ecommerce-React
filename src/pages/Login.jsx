import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import SignIn from '../components/SignIn'
import Card from 'react-bootstrap/Card';

const Login = () => {
    const {register, handleSubmit} = useForm()
    const [show, setShow] = useState(false)
    const [isSession, setIsSession] = useState(false)
    const navigate = useNavigate()

    const submit = (data) => {        
        if(show === false) {
            axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login',data).then((res) => {
                alert('User Correct! Welcome')
                localStorage.setItem('token', res.data.data.token)
                localStorage.setItem('userName', res.data.data.user.firstName)
                navigate('/')            
            })
            .catch(error => {
                if(error.response?.status === 400) { alert('Sorry, incorrect information') } 
                console.log(error.response)
            })
        } else {
            axios.post('https://e-commerce-api.academlo.tech/api/v1/users/register', data).then((res) => {
                alert('User created successfully!')
                localStorage.setItem('userName', res.data.data.user.firstName)
            }).catch(error => console.log(error.response))
        }   
    }

    const logeOut = () => {
        localStorage.setItem('token', '')
        navigate('/login')
        setIsSession(false)
    }

    const logUserName = localStorage.getItem('userName')

    useEffect(() => {
        if(localStorage.getItem('token') !== '') {
            setIsSession(true)
        } else {
            setIsSession(false)
        }
    }, [show])

    return (
        <>
            {
                isSession ? (
                    <Card>
                        <Card.Header as='h3'>Welcome Back, {logUserName}!</Card.Header>
                        <Card.Body>
                            <Card.Title>Session started</Card.Title>
                            <Card.Text> Do you want to Log Out? </Card.Text>
                            <Button variant='danger' onClick={logeOut}>Log out</Button>
                        </Card.Body>
                    </Card>
                ) : (
                    <>
                        <Alert variant="success">
                            <Alert.Heading>Hey, please use this user and password :)</Alert.Heading>
                            <p> <hr />
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
        </>
    )
}

export default Login
