import React from 'react'
import style from './About.module.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        
        <div className={`${style.about} text-start`}>
          
          <h2>Powering your journey, on your terms.</h2>
          <h3>On-Demand cleaning service.</h3>

          <div className={`${style.aboutButton} d-flex gap-4`}>
            <Link className={`${style.aboutLink}`} to='/register'>get started</Link>
            <p>Start now and get 3% OFF for each delivery until September 30th.</p>
          </div>

        </div>

    </div>
  )
}
