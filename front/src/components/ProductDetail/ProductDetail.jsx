

import { Divider } from '@mui/material'
import React from 'react'

import "./ProductDetail.css"

const ProductDetail = () => {
    return (
        <>
            
            <div className="cart_section">

               <div className="cart_container">
                    
                    <div className="left_cart">

                        <img src="https://c4.wallpaperflare.com/wallpaper/71/805/151/movie-cap-pikachu-poster-pokemon-hd-wallpaper-preview.jpg" alt="cart_img" />

                        <div className="cart_btn">

                            <button  className='cart_btn1'  >Add to Cart</button>
                            <button  className='cart_btn2'  >Buy Now</button>
                        </div>

                    </div>



                  <div className="right_cart">

                     <h3>Fitness Gear</h3>

                     <h4>Vaibhav</h4>

                     <Divider/>
                     
                     <p className='mrp'>M.R.P</p>

                     <p>Deal of the day : <span style={{color:"#B12704"}} >625</span></p>

                     <p>You save : <span style={{color:"#B12704"}} >625</span></p>


                     <div className="discount_box">
                         <h5>Discount : <span style={{color:"#111"}}>Extra 10% off</span></h5>

                         <h4>Free Delivery : <span style={{color:"#111" , fontWeight:'600'}}>Oct 8 - 21</span> Details</h4>
                         <p>Fastest delivery : <span  style={{color:"#111"}} >Tommorrow 11 Pm</span></p>
                     </div>

                    <p className='description'> About the Item : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>fiughedgjdahgdigs sdfgesgudyhjvbiuydfnasvSWUF SUYSSMFGH SFUISF MNNUYIF SFVUIBH F B</span></p>


                  </div>



               </div>
               



            </div>
        
        
        
        
        
        
        </>
    )
}

export default ProductDetail