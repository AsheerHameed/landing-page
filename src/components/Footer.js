import React from 'react'
import DSI from '../images/DSI.svg';
import Image1 from '../images/1.svg'
import Image2 from '../images/2.svg'
import Image3 from '../images/3.svg'
import Image4 from '../images/4.svg'
import Image5 from '../images/5.svg'
import Image6 from '../images/6.svg'

const Footer = () => {
  return (
    <div className='end'>
        <div className='end-content'>
            <div >
                <div className='end-wrapper new-wrapper'>
                <img src={DSI} className="logo logo-end" alt="logo" />
                <ul className='logo-detail'>
                  <li>DWIDASA</li> 
                  <li>SAMSARA</li> 
                  <li>INDONESIA</li>        
                </ul>   
                  </div> 
                  <div className='address'>
                      
                  <p className='p-head'>PT Dwidasa Samsara Indonesia</p>
                  <p className='p-color'>Ruko Jalur Sutera 29A No. 53<br />
                      Alam Sutera Serpong, Tangerang 15323
                  </p> 
                  </div>
            </div>
            <div className='contact'>
                  <p className='p-contact'>Contact</p>
                  <p className='p-color'>Phone : +62.21.5314.1135<br/>
                     Fax : +62.21.5314.1135<br/>
                     Email : community@dwidasa.com
                  </p>
            </div> 
            <div className='company-icon'>
                <img src={Image1} alt="company" />
                <img src={Image2}  alt="company"/>  
                <img src={Image3}  alt="company"/>
                <img src={Image4}  alt="company"/>
                <img src={Image5}  alt="company"/>
                <img src={Image6}  alt="company"/>
            </div>  
          </div> 
        <footer>Copyright © 2015 - Dwidasa Samsara Indonesia</footer>  
    </div>
  )
}

export default Footer