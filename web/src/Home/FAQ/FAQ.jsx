import React from 'react'
import style from './FAQ.module.css'
import woman from './Woman.png'
import man from './man.png'

export default function FAQ() {
  return (
    <div>

    <div className={`${style.faq} d-flex justify-content-between`}>
        <div className={`${style.faqTitles} col-4`}>
            <h2 className='pb-3'>Frequently Asked Questions</h2>

            <div className='pt-5'>
                <h3>Still Need Help?</h3>
                <h4>Contact us at: support@cspp.com</h4>
            </div>

            <div className='d-flex position-relative mt-5 pt-3'>
                <img src={woman} alt="woman" className={`ms-4`}/>
                <img src={man} alt="man" className={`${style.faqTitleImg2} position-absolute bottom-0`} />
            </div>

        </div>

        <div className={`${style.faqQuestions} col-5`}>
            <div className={`${style.faqQuestionsTitle} pt-4 d-flex align-items-center justify-content-between`}>
                <h3>How does your On-Demand cleaning service work?</h3>
                <span>-</span>
            </div>

            <p className='pt-2 pb-4'>Our service is designed for simplicity. You can place an order through our user-friendly dashboard, specifying the location , the type and quantity of service you need, and your booking time. Once you confirm your order and payment, our professional team will ensure your service applied to your desired level.</p>
        
            <div className={`${style.faqQuestionsDetails}`}>
                <div className='d-flex align-items-center justify-content-between border-top'>
                    <h3>What types of services do you deliver?</h3>
                    <span>+</span>
                </div>
                <div className='d-flex align-items-center justify-content-between border-top'>
                    <h3>How do you ensure the quality of the services you deliver?</h3>
                    <span>+</span>
                </div>
                <div className='d-flex align-items-center justify-content-between border-top'>
                    <h3>Can I schedule recurring deliveries for my tanks?</h3>
                    <span>+</span>
                </div>
                <div className='d-flex align-items-center justify-content-between border-top'>
                    <h3>What if I have an emergency and need cleaning immediately?</h3>
                    <span>+</span>
                </div>
                <div className='d-flex align-items-center justify-content-between border-top'>
                    <h3>How do you handle payment and billing?</h3>
                    <span>+</span>
                </div>
            </div>

        </div>

    </div>


    </div>
  )
}
