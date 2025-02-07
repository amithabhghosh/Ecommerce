import React from 'react'
import { Navbar } from '../../Admin/AdminComponents/Navbar/Navbar'
import { Sidebar } from '../../Admin/AdminComponents/Sidebar/Sidebar'

import '../AdminCss/AdminAddProduct.css'
import { Addproductside } from '../../Admin/AdminComponents/AdminproductSide/Adminproductside'
export const AdminAddProduct = () => {
  return (
    <div>
        <Navbar/>
        <div className="adminAddproductSidebar">
            <Sidebar/>
           <Addproductside/>
        </div>
    </div>
  )
}
