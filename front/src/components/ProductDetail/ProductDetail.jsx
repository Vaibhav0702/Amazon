

import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import "./ProductDetail.css"

const ProductDetail = () => {


    const { id } = useParams("");

    const [singleProduct, setSingleProduct] = useState([]);

    console.log(singleProduct);


    // console.log(id);

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
        getData();
    }, [id])



    return (
        <>

            <div className="cart_section">

                { singleProduct && Object.keys(singleProduct).length &&  // if we have data then it will show

                    <div className="cart_container">

                        <div className="left_cart">

                            <img src={singleProduct.url} alt="cart_img" />

                            <div className="cart_btn">

                                <button className='cart_btn1'  >Add to Cart</button>
                                <button className='cart_btn2'  >Buy Now</button>
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


            </div>






        </>
    )
}

export default ProductDetail