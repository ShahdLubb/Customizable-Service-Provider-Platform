import React from 'react'
import style from './ServiceReview.module.css'

export default function ServiceReview({service}) {
  return (
    <div>

<div className={`${style.serviceReviews} py-5`}>
              
              <h2 className='text-capitalize pb-4'>customer reviews:</h2>

              <div className='d-flex flex-wrap justify-content-between gap-4'>
              <div className={`${style.serviceReviewsItem}`}>
                <div className='d-flex align-items-center gap-4 mb-3'>
                  <h4 className='col-2'>H</h4>

                  <div className=''>
                    <h3 className='text-capitalize mb-1'>customer name</h3>

                    <div className=''>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    </div>

                  </div>
                
                </div>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias doloremque quam quo commodi distinctio assumenda doloribus, vitae iusto? Accusantium accusamus optio provident distinctio. Eveniet mollitia neque eaque, vero sit culpa.</p>

              </div>

              <div className={`${style.serviceReviewsItem}`}>
                <div className='d-flex align-items-center gap-4 mb-3'>
                  <h4 className='col-2'>H</h4>

                  <div className=''>
                    <h3 className='text-capitalize mb-1'>customer name</h3>

                    <div className=''>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    </div>

                  </div>
                
                </div>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias doloremque quam quo commodi distinctio assumenda doloribus, vitae iusto? Accusantium accusamus optio provident distinctio. Eveniet mollitia neque eaque, vero sit culpa.</p>

              </div>

              <div className={`${style.serviceReviewsItem}`}>
                <div className='d-flex align-items-center gap-4 mb-3'>
                  <h4 className='col-2'>H</h4>

                  <div className=''>
                    <h3 className='text-capitalize mb-1'>customer name</h3>

                    <div className=''>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    </div>

                  </div>
                
                </div>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias doloremque quam quo commodi distinctio assumenda doloribus, vitae iusto? Accusantium accusamus optio provident distinctio. Eveniet mollitia neque eaque, vero sit culpa.</p>

              </div>      

              </div>

            </div>



    </div>
  )
}
