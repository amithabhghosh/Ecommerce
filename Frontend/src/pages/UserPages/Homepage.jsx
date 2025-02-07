import React from 'react'
import { UserNavbar } from '../../Components/UserNavbar/UserNavbar'
import { Outlet } from 'react-router-dom'
import { MainBanner } from '../../Components/MainBanner/MainBanner'

import { Footer } from '../../Components/Footer/Footer'
import { Allproducts } from '../../Components/AllProducts/AllProducts'
export const Homepage = () => {
  return (
    <div>
<UserNavbar/>
<MainBanner/>
<Allproducts/>
<Footer/>
    </div>
  )
}
