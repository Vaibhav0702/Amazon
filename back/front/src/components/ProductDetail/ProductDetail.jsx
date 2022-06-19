

import { Divider } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import { Logincontext } from "../Context/ContextProvider"

import CircularProgress from '@mui/material/CircularProgress';

import "./ProductDetail.css"

const ProductDetail = () => {


    // const history = useNavigate()



    const { id } = useParams("");

    // console.log(id);

    const { account, setAccount } = useContext(Logincontext);


    console.log("Account : ", account);



    const [singleProduct, setSingleProduct] = useState("");

    console.log(singleProduct);




    const getData = async () => {

        const res = await fetch(`/product/${id}`, {

            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });

        const data = await res.json()
        //  console.log(data);

        if (res.status !== 201) {
            console.log("No data available");
        }
        else {
            // console.log(getData);

            setSingleProduct(data);

        }

    }


    useEffect(() => {

        setTimeout( getData, 1000)
      
    }, [id])



    // add to cart function.......


    const addtoCart = async (id) => {

        console.log(id);

        const checkres = await fetch(`/cart/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                singleProduct
            }),
            credentials: "include"


        });

        const data1 = await checkres.json();

        console.log("data1 : ", data1)

        if (checkres.status === 401 || !data1) {
            console.log("User Invalid");

            alert("User Invalid")
        }
        else {



            alert("Data Added to Cart");

            // history("/Cart")

            setAccount(data1)

            console.log("Account:", account);

        }

    }











    return (
        <>

            <div className="cart_section">

                {singleProduct && Object.keys(singleProduct).length &&  // if we have data then it will show

                    <div className="cart_container">

                        <div className="left_cart">

                            <img src={singleProduct.url} alt="cart_img" />

                            <div className="cart_btn">

                                {
                                    account ? <button className='cart_btn1' onClick={() => addtoCart(singleProduct.id)} >Add to Cart</button> : <NavLink to="/login" > <button className='cart_btn1' >Add to Cart</button></NavLink>
                                }

                                <NavLink  to="/cart"  >  <button className='cart_btn2'  >Buy Now</button> </NavLink>

                               
                            </div>

                        </div>



                        <div className="right_cart">

                            <h3>{singleProduct.title.shortTitle}</h3>

                            <h4>{singleProduct.title.longTitle}</h4>

                            <Divider />

                            <p className='mrp'>M.R.P : ₹{singleProduct.price.mrp}</p>

                            <p>Deal of the day : <span style={{ color: "#B12704" }} >₹{singleProduct.price.cost}.00</span></p>

                            <p>You save : <span style={{ color: "#B12704" }} > ₹{singleProduct.price.mrp - singleProduct.price.cost} ({singleProduct.price.discount})</span></p>


                            <div className="discount_box">
                                <h5>Discount : <span style={{ color: "#111" }}>{singleProduct.discount}</span></h5>

                                <h4>Free Delivery : <span style={{ color: "#111", fontWeight: '600' }}>Oct 8 - 21</span> Details</h4>
                                <p>Fastest delivery : <span style={{ color: "#111" }} >Tommorrow 11 Pm</span></p>
                            </div>

                            <p className='description'> About the Item : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{singleProduct.description}</span></p>


                        </div>



                    </div>

                };





                {!singleProduct ? <div className="circle">
                    <CircularProgress />
                    <h2> Loading....</h2>
                </div> : ""}









            </div>






        </>
    )
}

export default ProductDetail