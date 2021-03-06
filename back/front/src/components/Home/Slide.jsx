



import React from 'react'


import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

// import { products } from './Productdata';  // local data

import { Divider } from "@mui/material"


import "./Slide.css";

import { NavLink } from 'react-router-dom';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,

    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,

    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,

    }
};




const Slide = ({ title, products }) => {

    return (


        <>

            <div className="products_section">

                <div className="products_deal">
                    <h3>{title}</h3>
                    <NavLink to="/bestseller">
                        <button className='view_btn' >View All</button>
                    </NavLink>

                </div>


                <Divider />

                <Carousel responsive={responsive} infinite={true} draggable={false} swipeable={true} containerClass="carousel-container" itemClass="carousel-item-padding-40-px" showDots={false} centerMode={true} autoPlay={true} dotListClass="custom-dot-list-style" autoPlaySpeed={4000} removeArrowOnDeviceType={["tablet", "mobile"]} keyBoardControl={true}>


                    {
                        products.map((e) => {
                            return (
                                <NavLink to={`/product/${e.id}`}>

                                    <div className="products_items">
                                        <div className="product_img">
                                            <img src={e.url} alt="product" />
                                        </div>
                                        <p className="products_name">{e.title.shortTitle}</p>
                                        <p className="products_offer" style={{ color: "#  007185" }}>{e.discount}</p>
                                        <p className="products_explore">{e.tagline}</p>
                                    </div>
                                </NavLink>


                            )
                        })
                    }


                </Carousel>




            </div>

        </>
    )
}

export default Slide;