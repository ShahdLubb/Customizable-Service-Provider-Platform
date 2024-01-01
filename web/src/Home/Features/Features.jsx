import React from 'react'
import style from './Features.module.css'
import feature1Img from './feature1.png'
import experiencedImg from './Experienced Team.png'
import { Link } from 'react-router-dom'

export default function Features() {
  return (
    <div>

    <div className={`${style.features}`}>
        <div className={`${style.featuresTitle} text-center`}>
            <h2 className='pb-4'>Cleaning services at your fingertips.</h2>
            <p className='mb-5 pb-3'>Experience the ease of managing your service booking with our dashboard. <br/> Place orders, track deliveries, and access account information on the go.</p>
            <Link className={`${style.featuresGetstarted}`} to='/register'>get started</Link>
        </div>

        <div className='d-flex justify-content-between gap-5 pt-4 mt-5'>
          <div className={`${style.featuresItem}`}>
          <i className="fa-solid fa-clock-rotate-left pb-5"></i>
          <h3 className='pb-2'>24/7</h3>
          <h4>Emergency cleaning  service.</h4>
          </div>

          <div className={`${style.featuresItem}`}>
          <h3 className='text-capitalize'>safety first</h3>
          <p className='pt-3'>Our trained professionals follow strict safety protocols during services deliveries, adhering to  standards to ensure secure and incident-free transactions.</p>
          <img src={feature1Img} alt="safety first" />
          </div>

          <div className={`${style.featuresItem}`}>
          <h3 className='text-capitalize'>experienced team</h3>
          <img src={experiencedImg} alt="experienced team" />
          </div>
        </div>
    </div>

    </div>
  )
}



