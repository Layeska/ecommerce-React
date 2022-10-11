import React, { useEffect, useState } from 'react'
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteCartThunk, getCartThunk, postCartThunk } from '../slices/cartSlide.slice';
import {purchaseCartThunk } from '../slices/cartSlide.slice';
import Card from 'react-bootstrap/Card';


const SideBarCar = ({show, handleClose}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartSlide)
    const list = useSelector(state => state.newProduct)

    const [isId, setIsId] = useState(0)

   /* function aux() {
        const idList = () => {list.map(id => id.id)}
        const x = () => {
            cart.map(value => value.productsInCart.map(item => item.productId))
        }
        if(idList === x ) {
            return idList
        }
    }*/
    
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
    // <img src={list[1]?.productImgs} alt="" style={{width: '200px', height:'100px'}}/>

    //const insertImg = (value) => (
        
        //console.log(value)
        //<img src={list[value]?.productImgs} alt="" className='cartImages'/>
    //)
    const [rate, setRate] = useState(1)
    const {id} = useParams()
    

    useEffect(() => {
        setRate(1)
    },[id])

    const addProductCart = () => {
        alert('add to cart: ' + rate + ' quantity')

        const addCart = {
            id: id,
            quantity: rate 
        }
        
        dispatch(postCartThunk(addCart))
    }

    
    const insertImg = (value) => (
        //console.log(value)
        <img src={list[value]?.productImgs} alt="" className='cartImages'/>
    )

    console.log(insertImg)
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup className='text-center'>
                        {
                            cart.map(item => (
                                <Card border="light" style={{ width: '18rem' }} key={item.id}>
                                    <Card.Header><Link className='productName' to={`/products/${item.id}`} onClick={handleClose}> {item.title} </Link></Card.Header>
                                    <Card.Body>
                                        <Card.Text className='justify'>
                                            {insertImg(cart.productsInCart?.productImgs)}
                                            <p><b>Quantity:</b> {item.productsInCart.quantity}</p>
                                            <p><b>Price:</b> $ {item.price}</p>
                                            <div className='classBtn'>    
                                                <button className='dangerBtn' onClick={() => deleteProductItem(item.id)}><i className="fa-solid fa-trash-can"></i>Delete</button>
                                                <div className='rate'>
                                                    <button className='me-3' onClick={() => setRate(rate-1)} disabled={rate <= 1}> <i className="fa-solid fa-square-minus"></i></button> 
                                                    {rate}
                                                    <button className='ms-3' onClick={() => setRate(rate+1)} disabled={rate >= 5}> <i className="fa-solid fa-square-plus"></i></button>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                        <p className='totalCheckout'><b>Total:</b> $ {total}</p>
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