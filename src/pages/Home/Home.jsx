import React from 'react'
import Ambience from '../Ambience/Ambience'
import Booking from '../Booking/Booking';
import Delivery from '../Delivery/Delivery';
import Dishes from '../Dishes/Dishes';
import Partner from '../Partner/Partner';

import Welcome from '../welcome/Welcome';
import About from '../About/About';

const Home = () => {
  return (
    <>
    <Welcome/>
    
   <Partner/>
   <Booking/>
   <Dishes/>
   <Ambience/>
   <Delivery/>
   <About/>
    </>
    
  )
}

export default Home