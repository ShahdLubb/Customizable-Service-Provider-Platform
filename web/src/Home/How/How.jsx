import React from 'react'
import style from './How.module.css'

export default function How() {
  return (

    <div>

    <div className={`${style.how} d-flex align-items-center gap-5`} id='how'>

      <h2 className='col-3'>How CSPP works?</h2>

      <div className='w-100 d-flex align-items-center justify-content-center flex-row-reverse'>
        <div className={`${style.howDetails} col-4`}>
          <div className={`${style.howDetailsBar}`}></div>
          <h3 className='text-uppercase pb-4'>step 1</h3>
          <h4 className='text-capitalize pb-2'>request service</h4>
          <p>Use our user-friendly system to place an order for service.</p>
        </div>

        <div className={`${style.howDetails} col-4`}>
          <div className={`${style.howDetailsBar}`}></div>
          <h3 className='text-uppercase pb-4'>step 2</h3>
          <h4 className='text-capitalize pb-2'>confirm and pay</h4>
          <p>Review your order, confirm details, and make a secure payment.</p>
        </div>

        <div className={`${style.howDetails} col-4`}>
          <div className={`${style.howDetailsBar}`}></div>
          <h3 className='text-uppercase pb-4'>step 3</h3>
          <h4 className='text-capitalize pb-2'>Cleaning In progress</h4>
          <p>Sit back and relax as our professional team clean your place to the desired level.</p>
        </div>

      </div>

    </div>

    <div className={`${style.howImg}`}>
    </div>

    </div>
  )
}


