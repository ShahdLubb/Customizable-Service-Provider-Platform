import React from 'react'
import style from './ServicesSideBar.module.css'
import { Link } from 'react-router-dom'

export default function ServicesSideBar() {
  return (
    <div>

    <div className={`${style.servicesSide} me-3`}>

        <div className={`${style.sideItem}`}>
          <h3 className={`pb-2`}>Services</h3>

          <div className='d-flex flex-column'>
            <Link to='' className={`${style.sideSubTitle}`}>all services</Link>
            <Link to='' className={`${style.sideSubTitle}`}>top services</Link>
            <Link to='' className={`${style.sideSubTitle}`}>new services</Link>
          </div>
        </div>

          <Link to='' className={`${style.sideTitle} d-block`}>company</Link>

        <Link to='' className={`${style.sideTitle} d-block`}>sales</Link>

        <Link to='' className={`${style.sideTitle} d-block`}>location</Link>

    </div>

    </div>
  )
}
