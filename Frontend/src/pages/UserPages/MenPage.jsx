import React from 'react'
import { UserNavbar } from '../../Components/UserNavbar/UserNavbar'

import { MenProduct } from '../../Components/MenProduct/MenProduct'
import { Footer } from '../../Components/Footer/Footer'
import { Menbanner } from '../../Components/Menbanner/Menbanner'

export const MenPage = () => {
  return (
    <div>
        <UserNavbar/>
     <Menbanner/>
        <MenProduct/>
        <Footer/>
    </div>
  )
}
