
import React, { useEffect, useState } from 'react'

const Subtotal = ({ item }) => {



    const [price , setPrice] = useState(0);   // set price


    useEffect(()=>{

        totalAmount()   


    } , [item] )



    const totalAmount = () => {

        let price = 0;

        item.map((item) => {

        
          price = price + item.price.cost;   // calculate total price of all item

        });
      
         setPrice(price);  // set price

    }





    return (

        <>


            <div className="sub_item">

                <h3>Subtotal  [ {item.length} Items ] : <strong style={{ fontweight: "700", color: "#111" }}>  ₹{price} </strong> </h3>


            </div>



        </>



    )
}

export default Subtotal;