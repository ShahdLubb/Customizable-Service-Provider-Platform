import React from 'react'
import style from './ServiceFAQ.module.css'

export default function ServiceFAQ() {
  return (
    <div>

        <div className={`${style.serviceFAQ} mt-4 pb-5`}>
              
            <h2 className='text-capitalize pb-3'>frequiently asked question:</h2>

            <div className={`${style.faqQuestionsDetails} d-flex justify-content-between flex-wrap`}>
                <div className='d-flex align-items-center justify-content-between border-bottom col-5'>
                    <h3>What types of services do you deliver?</h3>
                    <span>+</span>
                </div>
                <div className='d-flex align-items-center justify-content-between border-bottom col-5'>
                    <h3>How do you ensure the quality of the services you deliver?</h3>
                    <span>+</span>
                </div>
                <div className='d-flex align-items-center justify-content-between border-bottom col-5'>
                    <h3>Can I schedule recurring deliveries for my tanks?</h3>
                    <span>+</span>
                </div>
                <div className='d-flex align-items-center justify-content-between border-bottom col-5'>
                    <h3>What if I have an emergency and need cleaning immediately?</h3>
                    <span>+</span>
                </div>
                <div className='d-flex align-items-center justify-content-between col-5'>
                    <h3>How do you handle payment and billing?</h3>
                    <span>+</span>
                </div>
            </div>


        </div>



    </div>
  )
}
