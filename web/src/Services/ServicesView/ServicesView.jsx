import React from 'react'
import style from './ServicesView.module.css'
import { Link } from 'react-router-dom'
import serviceImg from './depressed-sad-woman-makes-suicide-gesture-has-much-work-around-house-dressed-casual-apron-does-washing-during-weekend-hangs-clean-clothes-poses-indoor.jpg'

export default function ServicesView({allServices}) {

  return (
    <div>

        <div className={`${style.servicesView} d-flex flex-wrap justify-content-between gap-4`}>


        {allServices.map((service) =>{
          <div className={`${style.servicesViewItem}`}>

            <div className={`${style.servicesItemImg}`}>
              <Link to={`${service[1].id}`}><img src={service[1].image.imageData} alt={service[1].image.imageName} /></Link>
            </div>
        
            <div className={`${style.servicesItemDetails} px-3 pt-3`}>
                <div className={`${style.servicesItemDetailsTitle}`}>
                    <Link to={`${service[1].id}`} className={`${style.serviceName} text-capitalize d-block`}>{service[1].name}</Link>
                    <Link to={`/company/${service.company}`} className={`${style.companyName} text-capitalize`}>{service.company}</Link>
                </div>
        
                <div className={`${style.servicesItemDetailsDesc} `}>
                  <p>{service[1].description}</p>
                </div>
        
                <div className={`${style.servicesItemDetailsInfo} d-flex align-items-center justify-content-between`}>
                    {/* <h3 className='text-capitalize pt-2'>availability</h3> */}
                    <div className=''>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <Link className={`${style.serviceBook} mt-1 text-center nav-link text-capitalize`} to = {`${service[1].id}/book`} >Book now!</Link>
                </div>
              </div>
            </div>
        }
        )}


          <div className={`${style.servicesViewItem}`}>

            <div className={`${style.servicesItemImg}`}>
              <Link to='serviceId'><img src={serviceImg} alt="" /></Link>
            </div>

            <div className={`${style.servicesItemDetails} px-3 pt-3`}>
              <div className={`${style.servicesItemDetailsTitle}`}>
                <Link to='serviceId' className={`${style.serviceName} text-capitalize d-block`}>service name</Link>
                <Link to='companyName' className={`${style.companyName} text-capitalize`}>company name</Link>
              </div>

              <div className={`${style.servicesItemDetailsDesc} `}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt quo commodi reprehenderit obcaecati sequi quos quas, dolorem inventore, eaque fuga, labore necessitatibus voluptas? Numquam?</p>
              </div>

              <div className={`${style.servicesItemDetailsInfo} d-flex align-items-center justify-content-between`}>
                  {/* <h3 className='text-capitalize pt-2'>availability</h3> */}
                  <div className=''>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  </div>
                  <Link className={`${style.serviceBook} mt-1 text-center nav-link text-capitalize`} to="serviceId/book">Book now!</Link>
              </div>
            </div>
          </div>

        </div>
        
      </div>

  )
}
