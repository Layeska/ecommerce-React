import React, { useEffect, useState } from 'react'
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCartThunk, getCartThunk } from '../slices/cartSlide.slice';
import {purchaseCartThunk } from '../slices/cartSlide.slice';
import Card from 'react-bootstrap/Card';


const SideBarCar = ({show, handleClose}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartSlide)
    const list = useSelector(state => state.newProduct)
    


    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    const clearCart = () => {
        dispatch(purchaseCartThunk())
    }

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let totalPrice = 0
        cart.forEach(item => {
            totalPrice += +item.price * item.productsInCart.quantity
        })
        
        setTotal(totalPrice)
    }, [total])

    const deleteProductItem = (id) => {
        dispatch(deleteCartThunk(id))
    }
    
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ListGroup>
                {
                    cart.map(item => (
                        <Card border="light" style={{ width: '18rem' }} key={item.id}>
                            <Card.Header><Link to={`/products/${item.id}`} onClick={handleClose}> {item.title} </Link></Card.Header>
                            <Card.Body>
                            <Card.Text>
                            <p>Quantity: {item.productsInCart.quantity}</p>
                            <p>Price: $ {item.price}</p>
                            <button >Cancel Buy</button>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
                <p><b>Total:</b> $ {total}</p>
                <button onClick={clearCart}>Checkout</button>
            </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
      </>
    )
}


export default SideBarCar
{/*<ListGroup.Item key={c.id}>
                            <Link to={`/products/${c.id}`} onClick={handleClose}> {c.title} </Link>
                    </ListGroup.Item>*/}



/*
{
                    cart.map(c => (
                        <Card border="light" style={{ width: '18rem' }} key={c.id}>
                            <Card.Header><Link to={`/products/${c.id}`} onClick={handleClose}> {c.title} </Link></Card.Header>
                            <Card.Body>
                            
                            <Card.Text>
                                {
                                    cart.map(item => (
                                        <p> {item.productsInCart.quantity}</p>
                                    ))
                                    }
                                
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    ))
                }

*/