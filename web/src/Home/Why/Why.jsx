import React from 'react'
import style from './Why.module.css'

export default function Why() {
  return (
    <div>

    <div className={`${style.why}`}>

        <div className={`${style.whyTitle} text-center`}>
            <h2 className='pb-4'>Why we stand out from the rest?</h2>
            <p>We're not just a house keeping servicem, we're your reliable partner in managing your cleaning needs. <br/> With years of experience, we have earned the trust of businesses and homeowners alike.</p>
        </div>

        <div className={`${style.whyDetails} d-flex align-items-center gap-3`}>
            <div className={`${style.whyDetailsItem}`}>
                <i className="fa-solid fa-medal"></i>
                <h4 className='text-capitalize pb-2'>reliability</h4>
                <p>Ensure your tanks are always adequately filled, reducing downtime.</p>
            </div>

            <div className={`${style.whyDetailsItem}`}>
                <i class="fa-solid fa-plane-circle-check"></i>
                <h4 className='text-capitalize pb-2'>convenience</h4>
                <p>Manage your cleaning needs effortlessly from anywhere.</p>
            </div>

            <div className={`${style.whyDetailsItem}`}>
                <i class="fa-solid fa-piggy-bank"></i>
                <h4 className='text-capitalize pb-2'>cost-effective</h4>
                <p>Eliminate the need for on-site storage and reduce operational costs.</p>
            </div>

            <div className={`${style.whyDetailsItem}`}>
                <i class="fa-solid fa-truck-medical"></i>
                <h4 className='text-capitalize pb-2'>emergency services</h4>
                <p>Count on us for urgent cleaning deliveries during unexpected situations.</p>
            </div>
        </div>

    </div>

    {/* <div className={`${style.whyImg} d-flex align-items-center`}>
    </div> */}
    </div>
  )
}
