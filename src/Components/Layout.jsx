import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
function Layout() {
    return (
        <>
            <Header />
            <div class="flex-grow border-t border-gray-400"></div>
            <div class="flex-grow border-t border-gray-400"></div>
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout
