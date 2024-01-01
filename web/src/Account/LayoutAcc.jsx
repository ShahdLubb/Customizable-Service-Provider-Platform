import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Home/Header/Navbar/Navbar'
import Footer from '../Home/Footer/Footer'

export default function LayoutAcc() {
  return (
    <div>
        <Navbar />
        <Outlet></Outlet>
        <Footer />
    </div>
  )
}
