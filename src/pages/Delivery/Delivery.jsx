import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import './Delivery.css'
import delivery1 from '../../assets/DeliveryImg.png'
const Delivery = () => {
  return (
    <>
    <div className='main-body'>
    <div className='delivery'>
        <div className='right-content'>
            <h1>Super Fast Home Delivery</h1>
            <p>Door to Door Delivery</p>
            <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        ButtonText="Order Now!!"
        guideBtn={true}
        />
        </div>
        <div className='left-content'>
            <img className='img1' src={delivery1}/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Delivery