import React from 'react'
import style from './AboutUs.module.css'
import team1 from './Team 1.jpg'
import team2 from './Team 2.jpg'
import team3 from './Team 3.jpg'


export default function AboutUs() {
  return (
    <div>

    <div className={`${style.aboutUs} d-flex`}>
        <h2 className='text-capitalize col-3 '>about us</h2>

        <div className={`${style.aboutUsDesc} col-9 pt-2`}>
            <h3 className='pb-3'>Our dedicated team of professionals is the backbone of our success.</h3>
            <p>Our mission is to simplify your life by ensuring that you never have to worry about cleaning  again. We understand the critical role that cleanliness plays in your daily operations, whether it's for your business, home, or industrial needs. Our goal is to provide a seamless, dependable, and cost-effective cleaning service that allows you to focus on what matters most while we take care of your cleaning requirements.</p>
            <p>We are proud to have a team that combines expertise, passion, and a genuine commitment to your satisfaction.</p>
        </div>
    </div>

    <div className={`${style.aboutUsImg}`}>
    </div>

    </div>
  )
}
