import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'  
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
    <Header />
    <Sidebar />
    <Outlet />
    <Footer />   
    </>
  )
}
