import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/navBar.css'

import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux'
import SideBarCar from './SideBarCard'

const MyNavBar = () => {
  //const navigate = useNavigate()
  
  /*const logeOut = () => {
    localStorage.setItem('token', '')
    navigate('/login')
    setEmoji(true)
  }*/

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

 // const user = useSelector(state => state.newProduct)


  return (
    <div>
        <Navbar className='bg-navBar p-fixed' bg='light' expand='lg' >
          <Container className='p-fixed'>
            <Navbar.Brand to='/' as={Link}> 
              <img src={'https://dewey.tailorbrands.com/production/brand_version_mockup_image/197/7832655197_0ac1acde-1f1e-47d8-954f-2d034838f339.png?cb=1664856186'} alt='logo of e-commerce' width={'130px'}/>
            </Navbar.Brand>
            <br />
            <br />
            <div className='btnShop'>
              <Nav.Link as={Link} to='/login'>
                <button title='Log out' type='button' className='btn btn-light position-relative'><i className='fa-solid fa-user'></i></button>
              </Nav.Link>
              <Nav.Link onClick={handleShow}>
                <button type='button' className='btnShopping'><i className='fa-solid fa-cart-shopping m-2'></i> | <i className='fa-solid fa-angle-down m-2'></i></button>
              </Nav.Link>
            </div>
          </Container>
      </Navbar>
      <Navbar className='bg-navBar' bg='light' expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto linkNav'>
              <Navbar.Brand className='linkNav nav1' to='/' as={Link}>Home</Navbar.Brand>
              <Nav.Link className='linkNav' as={Link} to='/purchases'>Purchases</Nav.Link>
              <Nav.Link className='linkNav '>About As</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SideBarCar show={show} handleClose={handleClose}/>
    </div>
  )
}

export default MyNavBar
//<Nav.Link className='linkNav ' as={Link} to='/login'>My Account</Nav.Link>
/*
<div className='input-group mb-0 w-50'>
              <input type='text' className='form-control' placeholder='Search product ...' aria-label="Recipient's username" aria-describedby='button-addon2'/>
              <button title='search product' className='btn btn-outline' type='button' id='button-addon2'><i className='fa-solid fa-magnifying-glass'></i></button>
            </div>
*/