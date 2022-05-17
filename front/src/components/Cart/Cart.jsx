

import { Divider } from '@mui/material'
import React from 'react'

import "./Cart.css"
import Option from './Option'
import Right from './Right'
import Subtotal from './Subtotal'

const Cart = () => {
  return (
    <>
    
          <div className="buynow_section">
              
                  <div className="buynow_container">
                       
                       <div className="left_buy">
                         
                         <h1>Shopping Cart</h1>

                         <p>Select all item</p>

                         <span className='leftbuyprice'>Price</span>

                         <Divider/>


                         <div className="item_containert">

                              <img src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7ced95368eb89af9ee93f6b2b6bb3d400a6be38024eac30f99f58abded933948._RI_V_TTW_QL40_AC_SL792_.jpg" alt="" />
                               
                            <div className="item_details">
                            
                            <h3>KGF</h3>

                            <h3>Smart movie</h3>

                            <h3 className='diffrentprice'> rs 4090 </h3>

                             <p className='unusuall'>Usually dispatched in 8 days.</p>

                             <p>Eligible for FREE Shipping</p>

                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />


                            <Option/>


                            </div>

                            <h3 className='item_price'>5892</h3>


                         </div>

                         <Divider/>

                          <Subtotal/>

                       </div>

                        <Right/>
                  </div>


          </div>
    
    </>
  )
}

export default Cart