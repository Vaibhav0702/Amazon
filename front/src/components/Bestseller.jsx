
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import './Bestseller.css'
import { NavLink } from 'react-router-dom';

import axios from "axios";
import { getProducts } from './Redux/action/action';

const Besteller = () => {

    const { products } = useSelector(state => state.getProductsData); // get6 product from redux store


    // console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProducts())

    }, [dispatch])






    return (
        <div className="bestseller">
            <div className='bestsellerH'><h1>Best Seller</h1></div>
            {products.map((el, i) => (
                <NavLink to={`/product/${el.id}`}>
                    <div className="bestseller_container" key={i}>
                        <div className="bestseller_left">
                            <img className="best_img" src={el.url} alt="bestseller" />
                        </div>

                        <div className="bestseller_right" >
                            <p className="best_tag">{el.title.shortTitle}</p>
                            <span>⭐⭐⭐⭐</span>
                            <div className="best_price">
                                <p className="real_price">₹{el.price.mrp}</p>
                                <p className="discount_best">₹{el.price.cost}</p>
                                <p className="price__off">({el.price.discount} Off)</p>
                            </div>
                            <div className="free_del">
                                <p>
                                    Get it by <strong>Friday, June 3</strong>
                                </p>
                                <p>Free delivery by amazon</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
}

export default Besteller