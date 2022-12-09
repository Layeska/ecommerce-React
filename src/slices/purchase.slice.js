import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getConfig from '../utils/getConfig'
import { setIsLoading } from './isLoading.slice'

export const purchaseSlice = createSlice ({
    name: 'purchase',
    initialState: [],
    reducers: {
        setPurchases: (state, action) => {
            return action.payload
        }
    }
})

export const getPurchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/purchases', getConfig())
    .then(res => dispatch(setPurchases(res.data.data.purchases)))
    .finally(() => dispatch(setIsLoading(false)))
}

export const {setPurchases } = purchaseSlice.actions
export default purchaseSlice.reducer

//* 1. Despachar thunk en el componente
//* 2. Crear y exportar action
//* 3. despachar la accion en el then
//* 4. Crear el getConfig, colocar lo del localstorage y exportarlo
//* 5. Colocar el getConfig en el axios del thunk

