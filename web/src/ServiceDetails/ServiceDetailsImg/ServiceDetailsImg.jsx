import React from 'react'
import style from './ServiceDetailsImg.module.css'
import img1 from './cleaning-concept-flat-lay-composition.jpg'
import img2 from './flat-lay-cleaning-composition-with-copyspace.jpg'
import img3 from './high-angle-view-multicolored-gloves-sponge-white-backdrop_23-2147860460.jpg'
import img4 from './percentsImg.jpg'
import { Link } from 'react-router-dom'

export default function ServiceDetailsImg() {

  let activeImg = document .getElementById('activeImg')

  function ChangeActiveImg(e){
    let clickedImg = e.target.src
    activeImg.src = clickedImg
  }

  return (
    <div>

      <div className={`${style.serviceDetailsImg} `}>

        <div className={`${style.shownImg}`}>
          <img src={img1} id='activeImg' alt="service image" />
        </div>

        

        {/* <div className={`${style.allImgs} d-flex flex-wrap justify-content-between gap-3`}>
          <div className='col-2'><img src={img1} onClick={ChangeActiveImg} alt="first service image" /></div>
          <div className='col-2'><img src={img2} onClick={ChangeActiveImg} alt="second service image" /></div>
          <div className='col-2'><img src={img3} onClick={ChangeActiveImg} alt="third service image" /></div>
          <div className='col-2'><img src={img4} onClick={ChangeActiveImg} alt="fourth service image" /></div>
          <div className='col-2'><img src={img4} onClick={ChangeActiveImg} alt="fourth service image" /></div>
        </div> */}

      </div>




    </div>
  )
}
