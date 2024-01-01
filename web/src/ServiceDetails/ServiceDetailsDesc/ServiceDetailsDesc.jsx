import React from 'react'
import style from './ServiceDetailsDesc.module.css'
import { Link } from 'react-router-dom'

export default function ServiceDetailsDesc() {

  function FilledLike(){
    let heart = document.getElementById('heart')
    heart.className = `${style.like} fa-solid fa-heart`
    // console.log(heart.className)
  }
 

  return (
    <div>

      <div className={`${style.serviceDetailsDesc} d-flex flex-column justify-content-between ps-5`}>

        <div className={`${style.serviceDetailsDescTitle}`}>
          <div className='d-flex align-items-center justify-content-between'>
              <h2 className={`${style.serviceName} mb-0 text-capitalize`}>service name</h2>

              <i className={`${style.like} fa-regular fa-heart`} id='heart' onClick={FilledLike}></i>
          </div>

          <Link className={`${style.companyName} text-capitalize`} to='/'>company name</Link>

          <div className='pt-2'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
        </div>

        <div className={`${style.serviceDetailsDescreption}`}>
          <h3 className='text-capitalize'>Description:</h3>   
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia nesciunt rem aperiam, maxime sit aliquam, numquam laudantium odio nobis ea, eos laborum sunt alias neque est voluptatem dolor vel.</p>
        </div>

        <div className={`${style.serviceDetailsDescIncluded}`}>
          <h3 className='text-capitalize'>whats included?</h3>   
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia nesciunt rem aperiam, maxime sit aliquam, numquam laudantium odio nobis ea, eos laborum sunt alias neque est voluptatem dolor vel.</p>
        </div>

        <div className={`${style.serviceDetailsDescPrice}`}>
          <h3 className='text-capitalize'>price:</h3>
          <h4>This service costs <span>1000$</span> include taxes </h4>
        </div>

        <div className=''>
        <Link className={`${style.serviceBook} mt-1 text-center nav-link text-capitalize`} to="book">Book now!</Link>
        </div>

      </div>

    </div>
  )
}
