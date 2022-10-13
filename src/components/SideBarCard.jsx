import React, { useEffect, useState } from 'react'
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteCartThunk, getCartThunk, patchCartThunk, postCartThunk } from '../slices/cartSlide.slice';
import {purchaseCartThunk } from '../slices/cartSlide.slice';
import Card from 'react-bootstrap/Card';


const SideBarCar = ({show, handleClose}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartSlide)
    const list = useSelector(state => state.newProduct)

    const [isId, setIsId] = useState(0)
    
    const idCart = cart.map(value => value.productsInCart.productId)
    const idList = list.map(id => id.id)
    const aux = idCart.concat(idList)

    const temp = [...aux].sort()
    let duplicate = []

    for(let i=0; i< temp.length; i++) {
        if(temp[i+1] === temp[i]) {
            duplicate.push(temp[i])
        }
    }

    console.log(duplicate.map(i => i))

    
    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    const clearCart = () => { dispatch(purchaseCartThunk()) }

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let totalPrice = 0
        cart.forEach(item => { totalPrice += +item.price * item.productsInCart.quantity })
        
        setTotal(totalPrice)
        setIsId(cart.productsInCart?.productId)
    }, [cart])

    const deleteProductItem = (id) => { dispatch(deleteCartThunk(id)) }
   
    const {id} = useParams()

    

    return (
        <>
            {
                total != 0 ? (
                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Shopping cart</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ListGroup className='text-center'>
                                {
                                    cart.map(item => (
                                        <Card border='light' style={{ width: '98%' }} key={item.id}>
                                            <Card.Header><Link className='productName' to={`/products/${item.id}`} onClick={handleClose}> {item.title} </Link></Card.Header>
                                            <Card.Body>
                                                <Card.Text className='justify'>
                                                    <p><b>Quantity:</b> {item.productsInCart.quantity}</p>
                                                    <p><b>Price:</b> ${item.price}</p>
                                                    <div className='classBtn'>    
                                                        <button className='dangerBtn' onClick={() => deleteProductItem(item.id)}><i className="fa-solid fa-trash-can"></i> Delete</button>
                                                        <Link className='productName' to={`/products/${item.id}`} onClick={handleClose}> <button className='updateBtn'><i className='fa-solid fa-pen'></i> Edit</button></Link>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    ))
                                }
                                <p className='totalCheckout' styles={{color: 'rgb(84, 83, 83);'}}>Total: <b>USD {total}.00</b></p>
                                <button onClick={clearCart} className='btnCheck'>Checkout</button>
                            </ListGroup>
                        </Offcanvas.Body>
                    </Offcanvas>
                ) : ( 
                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Shopping cart</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ListGroup className='text-center'>
                                <p className='alertEmpty'>Empty cart!</p>
                            </ListGroup>
                        </Offcanvas.Body>
                    </Offcanvas>
                )
            }
        </>
    )
}


export default SideBarCar

/*
<div className='rate'>
                                                    <button className='me-3' onClick={onClickPlus} disabled={rate <= 1}> <i className="fa-solid fa-square-minus"></i></button> 
                                                    {rate}
                                                    <button className='ms-3' onClick={() => setRate(rate+1)} disabled={rate >= 5}> <i className="fa-solid fa-square-plus"></i></button>
                                                </div>
*/

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