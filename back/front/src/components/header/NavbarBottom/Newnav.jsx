
import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Newnav.css"

const Newnav = () => {
    return (
        <div className='new_nav'>


            <div className="nav_data">

                <div className="left_data">

                <NavLink to="/bestseller"> <p>All</p> </NavLink>
                    
                    <NavLink to="/bestseller"> <p>Mobile</p> </NavLink>
                    
                  <NavLink to="/bestseller">
                  <p>Best Seller</p>
                  </NavLink>
                  <NavLink to="/bestseller">  <p>Fashion</p> </NavLink>
                   
                    <p>Customer Services</p>
                    
                    <NavLink to="/bestseller">  <p>Electronics</p> </NavLink>
                   
                    <p>Prime</p>
                    <NavLink to="/bestseller"><p>Today's Deal</p></NavLink>
                    
                    <p>Amazon Pay</p>
                </div>

                <div className="right_data">
                  
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheMatrixResurrections/400x39-SWM_179._CB621495746_.jpg" alt="" />

                </div>
            </div>

        </div>
    )
}

export default Newnav