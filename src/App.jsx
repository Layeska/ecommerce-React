import { useEffect, useState } from 'react'
import './App.css'
import './styles/loading-screen.css'
import './styles/footerStyles.css'
import './styles/login.css'
import './styles/productCard.css'
import './styles/productsDetails.css'
import './styles/purchases.css'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ProductsItem from './pages/ProductsItem'
import Purchases from './pages/Purchases'
import Login from './pages/Login'
import MyNavBar from './components/MyNavBar'
import Loading from './components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getNewProductThunk } from './slices/productNew.slice'

import { Container } from "react-bootstrap";
import ProtectedRoute from './components/ProtectedRoute'
import MyFooter from './components/MyFooter'


function App() {

  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewProductThunk())
}, [])

  return (
    <HashRouter>
      <MyNavBar/>
        <Container className='mt-5'>      
          { isLoading && <Loading/> }
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/products/:id' element={<ProductsItem/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              
              <Route element={<ProtectedRoute/>}>
                <Route path='/purchases' element={<Purchases/>}></Route>
              
              </Route>
          </Routes>
        </Container>
        <br /><br />
        <MyFooter/>
    </HashRouter>
  )
}

export default App