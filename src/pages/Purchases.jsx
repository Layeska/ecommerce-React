import React, { useEffect } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPurchasesThunk } from '../slices/purchase.slice'

const Purchases = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const purchases = useSelector(state => state.purchase)

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])

    const dateFunction = (info) => {
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        const date = Date(info)
        const aux = date
        return aux
    }

    var date = new Date();
    const formatDate = (info)=>{
    let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    return formatted_date;}


    

    /*const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let myDateVar= new Date(purchases.createdAt)
    myDateVar.format('dd-m-yy')*/

    // <h4>{myDateVar.toLocaleDateString(undefined, options)}</h4>
    // <h3>Date: {dateFunction(p.createdAt)}</h3>

    return (
        <div>
            <h1>Your Historical Purchases</h1>
            <ListGroup>
                {   purchases.map(p => (
                        <ListGroup.Item key={p.id}  >
                            <div className='xDiv' >
                                <h2>Date: {p.createdAt}</h2>
                            </div>
                            {p.cart.products.map(item => (
                                <div key={item.id} >
                                    <hr />
                                    <h5>Details of purchase</h5>
                                    <p onClick={() => navigate(`/products/${item.id}`)}> <b>Product:</b> {item.title}</p>
                                    <p><b>Price:</b>{item.price}</p>
                                </div>
                            ))}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </div>
    )
}


export default Purchases