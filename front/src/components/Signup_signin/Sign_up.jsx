


import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

const Sign_up = () => {


    const [updata, setUpdata] = useState({

        fname: "",
        email: "",
        mobile: "",
        password: "",
        Apassword: "",


    });


    //  const addData = (e) => {
    //      const {name , value} = e.target;

    //      setUpdata(()=>{
    //          return {
    //              ...updata,
    //              [name] :value
    //          }
    //      })
    //  };


    const sendData = async (e) => {

        e.preventDefault();

        const { fname, email, mobile, password, Apassword } = updata;

        const res = await fetch("register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fname, email, mobile, password, Apassword
            })
        })


        const data = await res.json();

        // console.log(data);

        if (res.status === 422 || !data) {
            // alert("Data not found Sign_up UnSeccessful");

            toast.warn( "Invalid Details" , { position: "top-center"} )

        }
        else {
            // alert("Sign_Up Seccessful")

            toast.success( "Sign_Up Seccessful" , { position: "top-center"} )  // from tostify package



            setUpdata({

                ...updata,

                fname: "",
                email: "",
                mobile: "",
                password: "",
                Apassword: "",
            })
        }

    }







    return (
        <>  <section>
            <div className="sign_container">

                <div className="sign_header">
                    <NavLink to="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJeZIPvUv8zAc9pW0pO8_dBeMI5BYl7jcrD5FZsau-iYvUFxn8bIqA7SvfdtGa01x5sxM&usqp=CAU" alt="amazon logo" /></NavLink>
                </div>

                <div className="sign_form">
                    <form method='POST'>
                        <h1>Create Your Account</h1>
                        <div className="form_data">
                            <label htmlFor="fname">Your Name</label>
                            <input type="text" onChange={(e) => {
                                setUpdata({
                                    ...updata,
                                    fname: e.target.value
                                })
                            }} value={updata.fname} name='fname' id="fname" placeholder='Enter your Name' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="text" onChange={(e) => {
                                setUpdata({
                                    ...updata,
                                    email: e.target.value
                                })
                            }} value={updata.email} name='email' id="email" placeholder='Enter your email' />
                        </div>

                        <div className="form_data">
                            <label htmlFor="number">Mobile Number</label>
                            <input type="text" onChange={(e) => {
                                setUpdata({
                                    ...updata,
                                    mobile: e.target.value
                                })
                            }} value={updata.mobile} name='mobile' id="mobile" placeholder='Enter your Number' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={(e) => {
                                setUpdata({
                                    ...updata,
                                    password: e.target.value
                                })
                            }} value={updata.password} name='password' id='password' placeholder='At least 6 Char' />
                        </div>

                        <div className="form_data">
                            <label htmlFor="Apassword">Password Again</label>
                            <input type="password" onChange={(e) => {
                                setUpdata({
                                    ...updata,
                                    Apassword: e.target.value
                                })
                            }} value={updata.Apassword} name='Apassword' id='password' />
                        </div>

                        <button className='signin_btn' onClick={sendData} >Continue</button>


                        <div className="signin_info">
                            <p>Already have an account ? </p>
                            <NavLink to="/login">Sign-in</NavLink>
                        </div>


                    </form>
                </div>

                <ToastContainer />


            </div>
        </section>


        </>
    )
}

export default Sign_up;