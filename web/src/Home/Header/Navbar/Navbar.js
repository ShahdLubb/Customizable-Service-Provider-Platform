import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { Link, useLocation, useNavigate, json } from 'react-router-dom'

export default function Navbar({ userData, setUserData }) {

  let navigate = useNavigate();
  let [scrolling, setScrolling] = useState();
  let notHome = useLocation().pathname !== '/' ? style.notHome : '';
  function getScrollValue() {
    window.addEventListener('scroll', function () {
      let scrollValue = window.scrollY;
      // console.log(scrollValue);

      let scrollClass = scrollValue > 0 ? style.scrolled : style.notScrolled;

      setScrolling(scrollClass)
      // console.log(scrolling);
    })
  }

  function Logout() {
    localStorage.removeItem('user')
    setUserData('')
    navigate('/');

  }


  useEffect(() => {
    getScrollValue();
  }, [])


  return (
    <div>

      <nav className={`${scrolling} ${notHome} navbar navbar-expand-lg px-4 py-2 w-100 `}>
        <div className="d-flex w-100 justify-content-center align-items-center gap-5">

          <Link className={`${style.projectNameNav} navbar-brand py-0 ps-2`} to="/">CS<span>PP</span></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="d-flex w-100 justify-content-between ps-2" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 d-flex gap-4">
              <li className={`${style.navItem} nav-item dropdown`}>
                <Link className={`${style.navLink} nav-link text-capitalize`} to="/" role="button" data-bs-toggle="dropdown">services</Link>
                <ul className={`${style.dropDownNav} dropdown-menu`}>
                  <li><Link className={`${style.dropDownNavLink} dropdown-item text-capitalize`} to="/all-services/1/services">all services</Link></li>
                  <li><Link className={`${style.dropDownNavLink} dropdown-item text-capitalize`} to="/services/top-services">top services</Link></li>
                  <li><Link className={`${style.dropDownNavLink} dropdown-item text-capitalize`} to="/services/new-services">new services</Link></li>
                </ul>
              </li>
              <li className={`${style.navItem} nav-item`}>
                <Link className={`${style.navLink} nav-link text-capitalize`} to="/">how to book</Link>
              </li>
              <li className={`${style.navItem} nav-item`}>
                <Link className={`${style.navLink} nav-link text-capitalize`} to="/">about us</Link>
              </li>
              <li className={`${style.navItem} nav-item`}>
                <Link className={`${style.navLink} nav-link text-capitalize`} to="/">contact us</Link>
              </li>

            </ul>

            <div className={`${style.navEnd} d-flex gap-4 align-items-center justify-content-end`} role="search">

              {userData ?
                (<div className='col-4 d-flex align-items-center justify-content-center dropdown' data-bs-toggle="dropdown">
                  <h5 className={`${style.userFullName} m-0 text-capitalize`}>{userData.fullName}</h5>
                  <span className='ps-2 text-white'><i class="fa-solid fa-caret-down"></i></span>

                  <ul class={`${style.dropDownProfile} dropdown-menu`}>
                    <li><Link className={`${style.dropDownNavLink} text-capitalize dropdown-item`} to="/account">profile</Link></li>
                    <li><Link className={`${style.dropDownNavLink} text-capitalize dropdown-item`} to="/">my orders</Link></li>
                    <li><Link className={`${style.dropDownNavLink} text-capitalize dropdown-item`} to="/">services in Progress</Link></li>
                    <li><Link className={`${style.dropDownNavLink} text-capitalize dropdown-item`} to="/">my ratings</Link></li>
                    <li><Link className={`${style.dropDownNavLink} text-capitalize dropdown-item`} to="/">messages</Link></li>
                    <li><Link className={`${style.dropDownNavLink} text-capitalize dropdown-item`} to="/">settings</Link></li>
                    <li><h4 className={`${style.dropDownNavLink} text-capitalize dropdown-item`} onClick={Logout}>logout</h4></li>
                  </ul>
                </div>)
                : (<Link className={`${style.loginNav} text-center col-4 nav-link text-capitalize`} to="/login">login</Link>)
              }
            </div>
          </div>
        </div>
      </nav>



    </div>
  )
}

