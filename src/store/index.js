import { configureStore } from '@reduxjs/toolkit'
import cartSlideSlice from '../slices/cartSlide.slice'
import isLoadingSlice from '../slices/isLoading.slice'
import productNewSlice from '../slices/productNew.slice'
import purchaseSlice from '../slices/purchase.slice'


export default configureStore ({
    reducer: {
        isLoading: isLoadingSlice,
        newProduct:  productNewSlice,
        purchase: purchaseSlice,
        cartSlide: cartSlideSlice
    }
})