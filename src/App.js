import React from 'react'
import  Navbarg  from './Navberg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
const App = () => {
  return (
    <BrowserRouter>
    <Navbarg/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
