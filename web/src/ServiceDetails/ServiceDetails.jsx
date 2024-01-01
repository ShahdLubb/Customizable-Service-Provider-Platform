import React, { useEffect, useState } from 'react'
import style from './ServiceDetails.module.css'
import Navbar from '../Home/Header/Navbar/Navbar'
import ServiceDetailsImg from './ServiceDetailsImg/ServiceDetailsImg'
import ServiceDetailsDesc from './ServiceDetailsDesc/ServiceDetailsDesc'
import PathBar from '../Services/PathBar/PathBar'
import ServiceReview from './ServiceReview/ServiceReview'
import FAQ from '../Home/FAQ/FAQ'
import Footer from '../Home/Footer/Footer'
import ServiceFAQ from './ServiceFAQ/ServiceFAQ'
import { useParams } from 'react-router'


export default function ServiceDetails({allServices}) {

    // to get the specific service according to serviceId which sent with url:
    let [service , setService] = useState({})
    let idFromUrl = useParams().serviceId;

    function getService(){
        let serviceId = allServices.filter((item) => item.id === idFromUrl)
        setService(serviceId);
    }

    useEffect(()=>{
        // getService();
    },[])


  return (
    <div>

        <Navbar />

        <div className={`${style.service}`}>
            <div className={`${style.serviceDetails} d-flex`}>
              <div className='col-7'>
              <ServiceDetailsImg />
              </div>

              <div className='col-5'>
              <ServiceDetailsDesc />
              </div>
            </div>

            <ServiceReview service={service} />

            <ServiceFAQ />

        </div>


        <Footer />       


    </div>
  )
}
