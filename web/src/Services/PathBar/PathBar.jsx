import React, { useEffect } from 'react'
import style from './PathBar.module.css'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

export default function PathBar() {

    let allPath = useLocation().pathname
    let splittedPath = allPath.split('/').filter(segment => segment !== '');
  

  return (
    <div>

        <div className={`${style.pathBar} d-flex align-items-center`}>
            <Link to='/' className={`${style.pathLink} text-capitalize d-inline pe-1 text-decoration-none`}>home  </Link>
            <span className='pe-2'>&gt;</span>

            {splittedPath.map((path)=>(
                <div className='d-flex align-items-center'>
                <Link to={`/${path}`} className={`${style.pathLink} pe-2 text-capitalize`}>{path}</Link>
                <span className='pe-2'>&gt;</span>
                </div>
            ))}

        </div>

    </div>
  )
}
