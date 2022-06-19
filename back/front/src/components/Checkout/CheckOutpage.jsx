

import React, { useContext, useEffect, useState } from 'react'

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

import { Logincontext } from '../Context/ContextProvider';
import "./Checkout.css"
import { useNavigate } from 'react-router-dom';


const CheckOutpage = () => {

    const history = useNavigate()

    const { account, setAccount } = useContext(Logincontext);

    console.log("Account : ", account)



    return (


        <>
            <div className='Checkout_container'>


                <div className='addressbox'>
 
                    <h2  style={{color:"gray"}} >Delivery Details</h2>

                    <h4 className='name' >{account.fname}</h4>
                    <div>
                        <p className='Details' >{account.mobile}</p>
                        <p className='Details' >{account.email}</p>
                        <p className='Details' >{account.Address}</p>

                    </div>


                </div>

                <button className='cart_btn2' onClick={() => {

                    toast.success("Order Placed Seccessful 😃 ", { position: "top-center" })

                    history("/")

                }} >Confirm Order</button>

                <ToastContainer />

            </div>






        </>
    )
}

export default CheckOutpage