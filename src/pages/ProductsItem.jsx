import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { postCartThunk, purchaseCartThunk } from '../slices/cartSlide.slice'
import Card from 'react-bootstrap/Card'
import { Button, Form, InputGroup } from "react-bootstrap"


const ProductsItem = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    
    const newsList = useSelector(state => state.newProduct)

    const newListDetails = newsList.find(news => news.id === Number(id))

    //show products relacionados
    const relateProducts = newsList.filter(news => news.category.id === newListDetails.category.id)
    //console.log(relateProducts)

    //console.log(newListDetails)

    const [rate, setRate] = useState(1)

    useEffect(() => {
        setRate(1)
    }, [id])

    const addProductCart = () => {
        alert('add to cart: ' + rate + ' quantity')

        const addCart = {
            id: id,
            quantity: rate 
        }
        
        dispatch(postCartThunk(addCart))
    }


    const clearCartProduct = () => { 
        alert('product purchased successfully')
        dispatch(purchaseCartThunk()) 
    }

    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Carousel variant='dark' className='p-5'>
                        <Carousel.Item  className='imageCarousel'>
                            <img className='d-block w-100' src={newListDetails?.productImgs[0]} alt='First slide' />
                        </Carousel.Item>
                        <Carousel.Item className='imageCarousel '>
                            <img className='d-block w-100' src={newListDetails?.productImgs[1]} alt='First slide' />
                        </Carousel.Item>
                        <Carousel.Item className='imageCarousel'>
                            <img className='d-block w-100' src={newListDetails?.productImgs[2]} alt='First slide' />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                    <Row className='d-flex justify-content-between p-1 '>
                        <h2 className='titleProductDetails'>{newListDetails?.title}</h2>
                        <p className='paragraphDetails'>{newListDetails?.description}</p>
                        <div className=' d-flex justify-content-between w-50 rate'>
                            <p className= 'text-nowrap textPrice'>Price: <b>$ {newListDetails?.price} </b></p> 
                            <button className='btn-lg w-30 m-5' onClick={() => setRate(rate-1)} disabled={rate <= 1}> <i className="fa-solid fa-square-minus"></i></button> 
                            <p className='mt-5'>{rate}</p>
                            <button className='btn-lg w-25 m-5' onClick={() => setRate(rate+1)} disabled={rate >= 5}> <i className="fa-solid fa-square-plus"></i></button>
                        </div>
                        
                        <div className='btnCheckOut'>
                            <button className='w-50 p-3 btn-lg' onClick={addProductCart}>Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>
                            <button className='w-50 p-3 btn-lg' onClick={clearCartProduct}>To Buy</button>
                        </div>
                    </Row>
                </Col>
                <h1 className='interest'><center>Products that may interest you</center></h1>
                <Row xs={1} md={3} xl={5} className='g-4 col-rowsAux'>
                    { relateProducts.map(product => (
                        <Col className='col-rows' key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
                            <div  className='containerGrid'>
                                <Card className='cardProduct '  onClick={() => navigate(`/products/${product.id}`)} style={{maxWidth: '400px'}}>
                                    <Row className='g-1 mt-4'>
                                        <div className='divImage'>
                                            <Card.Img variant="top" className="img-fluid" src={product.productImgs} style={{ height: "60%" }}/>
                                        </div>
                                        <Card.Body>
                                            <div className='detailsCard'>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Text> <b>Price:</b> $ {product.price}</Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Row>
                                </Card>
                            </div>
                        </Col>
                        ))
                    }
                </Row>
            </Row>
            <Container>
            <Row className='containerDown'>
                <Col>
                    <div className='type'>
                        <img src="/src/assets/delivery.png" alt="" />
                        <h1>Free Delivery</h1>
                        <p>And free returns. See checkout for delivery dates.</p>
                        <hr />
                    </div>
                </Col>
                
                <Col >
                    <div className='type'>
                        <img src="/src/assets/confidence.png" alt="" />
                        <h1>Shop With Confidence</h1>
                        <p>Your data will be kept under strict confidentiality</p>
                        <hr />
                    </div>
                </Col>
                <Col >
                    <div className='type'>
                        <img src="/src/assets/Help Center.png" alt="" />
                        <h1>24/7 Help Center</h1>
                        <p>Have a question? Call a Specialist or chat online.</p>
                        <hr />
                    </div>
                </Col>
                <Col >
                    <div className='type'>
                        <img src="/src/assets/cardPay.png" alt="" />
                        <h1>Safe Payment</h1>
                        <p>Pay with the world's most popular and secure payment methods.</p>
                        <hr />
                    </div>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}


export default ProductsItem

/*
<Card className={'cardProduct'} >
                                <Row className='g-1 mt-5'>
                                    <div className='divImage'>
                                        <Card.Img variant="top" className="img-fluid" src={product.productImgs} style={{ height: "60%" }}/>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                            <div className='detailsCard'>
                                                <Card.Text> {product.price}</Card.Text>
                                                <Button variant="warning"><i className="fa-solid fa-cart-shopping"></i></Button>
                                            </div>
                                    </Card.Body>
                                </Row>
                            </Card>

*/



/*
 <h2>{newListDetails?.title}</h2>
                        <img src={newListDetails?.productImgs} alt="image product detail" width={'150px'}/>
                        <p>{newListDetails?.description}</p>

*/


{/*<Carousel.Item>
                            <img className='d-block w-100' src='https://bgr.com/wp-content/uploads/2022/03/Bender-Futurama.jpg?quality=82&strip=all' alt='Second slide' />
                            <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='d-block w-100' src='https://www.mexicodesconocido.com.mx/wp-content/uploads/2022/01/Lethal-Inspection-Bender-and-Hermes-Cropped.jpeg' alt='Third slide' />
                            <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur </p>
                            </Carousel.Caption>
                    </Carousel.Item>*/}

{/* <div>
            <h1>Hi Ana Product</h1>
            <p>Show New <strong>{id}</strong></p>
            
            <ul >
            {
                relateProducts.map(product => (
                    <li>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </li>
                ))
            }
            </ul>
            <br />
            <br />
            <h2>{newListDetails?.title}</h2>
            <img src={newListDetails?.productImgs} alt="image product detail" width={'150px'}/>
            <p>{newListDetails?.description}</p>
        </div>*/}