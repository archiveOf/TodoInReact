import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../features/Header/Header'
import SideBar from '../features/SideBar/SideBar'

const Layout = () => {
  return (
    <>
        <SideBar />
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    </>
  )
}

export default Layout