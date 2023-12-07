import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../Headeer/Header'
import Footer from '../Footer/Footer'
import Home from '../../pages/Home/Home'
import Dishes from '../../pages/Dishes/Dishes'
import Booking from '../../pages/Booking/Booking'
import About from '../../pages/About/About'
const LayoutRoutes = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dishes' element={<Dishes/>}/>
            <Route path='/services' element={<Booking/>}/>
            <Route path='/about-us' element={<About/>}/> 
        </Routes>
        <Footer/>

    </Router>
  )
}

export default LayoutRoutes