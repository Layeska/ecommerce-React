import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getConfig from '../utils/getConfig'
import { setIsLoading } from './isLoading.slice'

export const cartSlideSlice = createSlice ({
    name: 'cartSlide',
    initialState: [],
    reducers: {
        setCart: (status, action) => {
            return action.payload
        }
    }
})

export const postCartThunk = (addCart) => (dispatch) => {
    dispatch(setIsLoading(true))
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', addCart, getConfig())
    .then(res => dispatch(getCartThunk()))
    .finally(() => dispatch(setIsLoading(false)))
}

export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
    .then(res => dispatch(setCart(res.data.data.cart.products)))
    .finally(() => dispatch(setIsLoading(false)))
}

export const purchaseCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', {}, getConfig())
    .then(res => dispatch(setCart([])))
    .finally(() => dispatch(setIsLoading(false)))
}

export const deleteCartThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true))
    return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`, getConfig())
    .then(res => dispatch(setCart(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)))
}

export const { setCart } = cartSlideSlice.actions
export default cartSlideSlice.reducer