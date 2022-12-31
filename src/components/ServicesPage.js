import React from 'react';
import  Card from './Card';
import product from '../images/product.svg';
import service from '../images/service.svg';
import tech from '../images/tech.svg'
const ServicesPage = () => {
  return (
    <div className='service'>
          <h1>Product and Services</h1>
          <div className='service-details'> 
          <Card src={product} about={"Our product is made on the base of our team’s careful research and analyses, ranging from internet based application."}
           heading={"Our Product"}
          />
          
          <Card src={service} about={"DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors."} 
              heading={"Our Services"}
          />

          <Card src={tech} about={"First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices."}
             heading={"Our Technology"}
          />
          </div>
    </div>
  )
}

export default ServicesPage