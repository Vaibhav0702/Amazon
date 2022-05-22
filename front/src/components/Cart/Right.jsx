

import React, { useEffect, useState } from 'react'

const Right = ({ item }) => {




    const [price, setPrice] = useState(0);


    useEffect(() => {

        totalAmount()


    }, [item])



    const totalAmount = () => {

        let price = 0;

        item.map((item) => {


            price = price + item.price.cost;   // calculate total price of all item

        });

        setPrice(price);

    }









    return (
        <>

            <div className="right_buy">

                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="right_img" />


                <div className="cost_right">


                    <p>Your Order is eligible for FREE Delivery</p>

                    <br />
                    <span style={{ color: "#565959" }}>Select this Option at Checkout. Details</span>


                    <h3>Subtotal  [ {item.length} Items ] : <span style={{ fontWeight: 700 }}> ₹{price} </span></h3>

                    <button className='rightbuy_btn'> Process to Buy</button>
                    <div className="emi">
                        EMI available
                    </div>

                </div>

            </div>




        </>
    )
}

export default Right