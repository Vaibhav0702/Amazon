

import React from 'react'



import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";



import "./Banner.css"


const data = [
    "https://m.media-amazon.com/images/I/71Infb2eWwL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61k6hqpuqKL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61XJMtByggL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81eCjIs+p3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81fYC11Y-XL._SX3000_.jpg"

]



const Banner = () => {




    return (

        <>



            <Carousel className='carasousel' autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false} >

                {
                    data.map((image, i) => {

                        return <>

                            <img src={image} alt="" className='banner_img' />

                        </>

                    })
                }


            </Carousel>


            <div className="Banner_box">

                <div className="BboxU">

                    <div className="BboxUL">

                        <div className="BboxUL1">

                            <div>
                                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Amazon Pay | Pay utility bills fast & conveniently</p>
                            </div>

                            <div className="BboxUL1G">

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/Electricity_186x116._SY116_CB646259375_.jpg" alt="" />
                                    <p>Electricity Bill</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/Electricity_186x116._SY116_CB646259375_.jpg" alt="" />
                                    <p>Electricity Bill</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/Electricity_186x116._SY116_CB646259375_.jpg" alt="" />
                                    <p>Electricity Bill</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/Electricity_186x116._SY116_CB646259375_.jpg" alt="" />
                                    <p>Electricity Bill</p>
                                </div>

                            </div>

                            <div>
                                <a href="/" className='Bboxa'>Explore More From Amazon Pay</a>
                            </div>

                        </div>


                        <div className="BboxUL1">

                            <div>
                                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Pay & Shop | Earn rewards daily</p>
                            </div>

                            <div className="BboxUL1G">

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg" alt="" />
                                    <p>Claim Your Scratch Card</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg" alt="" />
                                    <p>Unlock More Rewards</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_PayAndShop._SY116_CB627364845_.jpg" alt="" />
                                    <p>Explore</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg" alt="" />
                                    <p>Rewards</p>
                                </div>

                            </div>

                            <div>
                                <a href="/" className='Bboxa'>See More</a>
                            </div>

                        </div>


                        <div className="BboxUL1">

                            <div>
                                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Styles for Women | Up to 70% off + Extra 10%</p>
                            </div>

                            <div className="BboxUL1G">

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/Wthut-box/PC/02-WF-187._SY116_CB622220231_.jpg" alt="" />
                                    <p>Women's Clothing</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/Wthut-box/PC/04-WF-187._SY116_CB622220231_.jpg" alt="" />
                                    <p>Footware + Handbags</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/Wthut-box/PC/08-WF-187._SY116_CB622220231_.jpg" alt="" />
                                    <p>Watches</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/Wthut-box/PC/06-WF-187._SY116_CB622220231_.jpg" alt="" />
                                    <p>Fashion</p>
                                </div>

                            </div>

                            <div>
                                <a href="/" className='Bboxa'>Mega Fashion Sundays</a>
                            </div>

                        </div>

                    </div>


                    <div className="BboxUR">
                        <div className="BboxURU">

                            <div>
                                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Shop on the Amazon App</p>
                            </div>
                            <div>
                                <p>Fast, convenient and secure | Over 17 crore products in your pocket</p>
                            </div>
                            <div>
                                <a href="/" className='Bboxa'>Download the amazon app</a>
                            </div>
                        </div>
                        <div className="BboxURL">

                            <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" alt="" />
                        </div>
                    </div>


                </div>


                <div className="BboxL">


                    <div className="BboxLR">

                        <img src="https://c4.wallpaperflare.com/wallpaper/71/805/151/movie-cap-pikachu-poster-pokemon-hd-wallpaper-preview.jpg" alt="" />

                        <div>
                            <p style={{color:"white" ,fontSize:"30px" , fontWeight:"bold", padding:"10px", marginTop:"-97px", position:"relative", zIndex:"1", backgroundColor:"green" }} >

                            Prime Video: Recommended for you
                            
                            </p>

                            <p style={{color:"white" ,fontStyle:"italic" ,fontSize:"20px" ,marginBottom:"0px" , fontWeight:"bold", padding:"10px", marginTop:"-45px", position:"relative", zIndex:"1", backgroundColor:"green" }} >

                            The Detective Pikachu
                            
                            </p>
                        </div>

                    </div>





                    <div className="BboxUL">

                        <div className="BboxUL1">

                            <div>
                                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Beat the heat with Amazon Brands & more</p>
                            </div>

                            <div className="BboxUL1G">

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/Events/SummerStore/PcQc/1-1-Summer_QC_186x116._SY116_CB625095358_.jpg" alt="" />
                                    <p>Air conditionar</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/Events/SummerStore/PcQc/2-1-Summer_QC_186x116._SY116_CB625095358_.jpg" alt="" />
                                    <p>Water bottels</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/Events/SummerStore/PcQc/3-1-Summer_QC_186x116._SY116_CB625095358_.jpg" alt="" />
                                    <p>Towel</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/Events/SummerStore/PcQc/4-1-Summer_QC_186x116._SY116_CB625095358_.jpg" alt="" />
                                    <p>Fans</p>
                                </div>

                            </div>

                            <div>
                                <a href="/" className='Bboxa'>Shop now</a>
                            </div>

                        </div>


                        <div className="BboxUL1">

                            <div>
                                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Up to 70% off | Clearance store</p>
                            </div>

                            <div className="BboxUL1G">

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg" alt="" />
                                    <p>Claim Your Scratch Card</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg" alt="" />
                                    <p>Unlock More Rewards</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_PayAndShop._SY116_CB627364845_.jpg" alt="" />
                                    <p>Explore</p>
                                </div>

                                <div>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg" alt="" />
                                    <p>Rewards</p>
                                </div>

                            </div>

                            <div>
                                <a href="/" className='Bboxa'>See More</a>
                            </div>

                        </div>




                    </div>

                </div>




            </div>


        </>


    )
}

export default Banner;