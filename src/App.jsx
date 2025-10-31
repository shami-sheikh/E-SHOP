import React, { useState } from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import FilterData from './pages/FilterData'
import Productdetail from './components/Productdetail'
function App() {
  const [order,setorder]=useState(null)
  return (
    <div>
  <BrowserRouter>
  <Navbar/>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/Shop' element={<Shop />} />
  <Route path='/Cart' element={<Cart />} />
  <Route path='/Checkout' element={<Checkout setorder={setorder} />} />
  <Route path='/ordertracker' element={<Orders order={order} />} />
  <Route path='/FilterData' element={<FilterData />} />
  <Route path='/product/:id' element={<Productdetail />} />
</Routes>
  <Footer/>
  </BrowserRouter>
    </div>
  )
}

export default App
