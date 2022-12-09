import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setIsLoading } from './isLoading.slice'


export const productNewSlice = createSlice ({
    name: 'newProduct',
    initialState: [],
    reducers: {
        setProduct: (state, actions) => {
            const news = actions.payload
            return news
        }
    }
})

export const getNewProductThunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    axios.get('https://e-commerce-api.academlo.tech/api/v1/products')
    .then(res => dispatch(setProduct(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)))
}



export const { setProduct } = productNewSlice.actions
export default productNewSlice.reducer