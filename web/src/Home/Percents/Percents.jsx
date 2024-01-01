import React from 'react'
import style from './Percents.module.css'

export default function Percents() {
  return (
    <div>

    <div className={`${style.percents}`}>

    <div className={`${style.percentsDetails}`}>
    <p>Our service is backed by compelling statistics that showcase the advantages of making the switch.</p>

        <div className={`${style.percentsDetailsItem} d-flex gap-4`}>
            <div className='col-3'>
                <h3>30%</h3>
                <h4>Reduction in downtime.</h4>
            </div>

            <div className='col-3'>
                <h3>25%</h3>
                <h4>Cost savings.</h4>
            </div>

            <div className='col-3'>
                <h3>15%</h3>
                <h4>Reduction of CO2 emissions.</h4>
            </div>

            <div className='col-3'>
                <h3>100</h3>
                <h4>Hours saved per year.</h4>
            </div>
        </div>
    </div>

    </div>

    <div className={`${style.percentImg} d-flex align-items-center`}>
    </div>

    </div>
  )
}
