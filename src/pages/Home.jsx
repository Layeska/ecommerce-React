import axios from 'axios'
import { Button, Form, InputGroup } from "react-bootstrap"
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'


const Home = () => {
    const newListProduct = useSelector(state => state.newProduct)
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [newProductFilter, setNewProductFilter] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories').then(res => setCategories(res.data.data.categories))
    }, [])

    useEffect(() => {
        setNewProductFilter(newListProduct)
    }, [newListProduct])

    const filterCategory = (categoryId) => {
        const filtered = newListProduct.filter((news) => news.category.id === categoryId)
        setNewProductFilter(filtered)
    }
    
    const searchProducts = () => {
        const filtered = newListProduct.filter((news) => news.title.toLowerCase().includes(search.toLowerCase()))
        setNewProductFilter(filtered);
    }

    const inputPriceHigher = useRef('')
    const inputPriceLower = useRef('')
    const [inputValue, setInputValue] = useState('')
    const [inputValueLower, setInputValueLower] = useState('')

    useEffect(() => {
        inputPriceHigher.current = inputValue
        inputPriceLower.current = inputValueLower
    }, [inputValue, inputValueLower])

    //console.log(inputValue)

    return (
        <Container fluid="md">
            <Row>
                <Col lg={3}>
                    <Accordion className='myAccordion p-1 w-auto'>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Categories</Accordion.Header>
                            <Accordion.Body>
                                { categories.map(category => ( 
                                    <div className='form-check' key={category.id}>
                                        <label className='form-check-label' htmlFor='flexCheckChecked'> {category.name} </label>
                                        <input className='form-check-input paragraph' type='checkbox' id='flexCheckChecked' onClick={() => filterCategory(category.id)}  key={category.id}/>
                                    </div>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                
                <Col>
                <br />
                    <InputGroup className='mb-3'>
                        <Form.Control placeholder="Search Products" onChange={(e) => setSearch(e.target.value)} value={search}/>
                        <Button variant='outline-secondary btnSearchProduct' onClick={searchProducts}>Search</Button>
                    </InputGroup>

                    <Row xs={1} md={2} xl={3} className='g-3' >
                        {newProductFilter.map((news ) => (
                            <Col key={news.id} className='col-rows'>
                                <Card className='cardProduct' onClick={() => navigate(`/products/${news.id}`)} style={{maxWidth: '400px', width: '300px'}}>
                                    <Row className='g-1 mt-5'>
                                        <div className='divImage'>
                                            <Card.Img variant="top" className="img-fluid" src={news.productImgs[0]} style={{ height: "60%" }}/>
                                        </div>
                                        <Card.Body>
                                            <div className='detailsCard'>
                                                <Card.Title>{news.title}</Card.Title>
                                                    <Card.Text> <b>$ {news.price}</b> </Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


export default Home

//<Button onClick={addProductCart} variant="warning"><i className="fa-solid fa-cart-shopping"></i></Button>

{/*<label for="customRange3" class="form-label">$ {inputValue}</label>*/}
{/*<div className={'paragraph'} key={category.id} onClick={() => filterCategory(category.id)}>{category.name}</div>*/}

/*
 <Accordion.Item eventKey="0">
                        <Accordion.Header>Categories</Accordion.Header>
                        <Accordion.Body>
                        { categories.map(category => ( 
                            <div className={'paragraph'} key={category.id} onClick={() => filterCategory(category.id)}>{category.name}</div>
                        ))}
                        </Accordion.Body>
                        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked=""/>
        <label class="form-check-label" for="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Price</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


*/

  {/*<h1>Categories</h1>
            {
                categories.map(category => (
                    <button key={category.id} onClick={() => filterCategory(category.id)}>{category.name}</button>
                ))
            }*/}

            {/* <ul>
                {
                    newProductFilter.map(news => (
                        <li key={news.id} onClick={() => navigate(`/products/${news.id}`)}>
                            <h4>{news.title}</h4>
                            <img src={news.productImgs} alt="images of products" width={'250px'} />
                        </li>
                    ))
                }
            </ul>*/}