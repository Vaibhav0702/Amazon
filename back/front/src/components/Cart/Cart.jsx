

import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'

import "./Cart.css"
import Option from './Option'
import Right from './Right'
import Subtotal from './Subtotal'

const Cart = () => {


  const [cartData, setCartData] = useState("");

  console.log("CartData", cartData);

  const getCartData = async () => {

    const res = await fetch("/cartDetails", {

      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"


    });

    const data = await res.json();

    if (res.status !== 201) {
      console.log("error");
    }
    else {
      setCartData(data.carts);
    }

  };


  useEffect(() => {

    getCartData();

  }, []);




  return (
    <>

      {

        cartData.length ?

          <div className="buynow_section">

            <div className="buynow_container">

              <div className="left_buy">

                <h1>Shopping Cart</h1>

                <p>Select all item</p>

                <span className='leftbuyprice'>Price</span>

                <Divider />

                {
                  cartData.map((e, k) => {

                    return (


                      <>


                        <div className="item_containert">

                          <img src={e.url} alt="" />

                          <div className="item_details">

                            <h3>{e.title.longTitle}</h3>

                            <h3>{e.title.shortTitle}</h3>

                            <h3 className='diffrentprice'>₹{e.price.cost}</h3>

                            <p className='unusuall'>Usually dispatched in 8 days.</p>

                            <p>Eligible for FREE Shipping</p>

                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />


                            <Option deleteData={e.id} get={getCartData} />     {/* pass id to delete option */}              
    

                          </div>

                          <h3 className='item_price'> ₹{e.price.cost}</h3>


                        </div>

                        <Divider />

                      </>
                    )


                  })
                }


            

                <Subtotal item={cartData} />

              </div>

              <Right  item={cartData} />
            </div>


          </div>

          :

          ""

      }

    </>
  )
}

export default Cart