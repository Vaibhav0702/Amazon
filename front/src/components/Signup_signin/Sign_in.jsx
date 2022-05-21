

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

import "./Signup.css";

const Sign_in = () => {


    const [indata, setData] = useState({

        email: "",
        password: "",


    });

    const addData = (e) => {

        const { name, value } = e.target;

        setData(() => {


            return {
                ...indata,

                [name]: value
            }

        })

    }



    const sendData = async (e) => {

        e.preventDefault();

        const { email, password } = indata;

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, password,
            })
        });


        const data = await res.json();

        console.log(data);

        if (res.status === 400 || !data) {
            // console.log("Invalid Details");

            toast.warn("Invalid Details", { position: "top-center" })  // from tostify package

        }
        else {
            // console.log("data Valid");

            toast.success("Sign-in Seccessful", { position: "top-center" })  // from tostify package

            setData({ ...indata, email: "", password: "" })
        }




    }







    return (
        <>

            <section>
                <div className="sign_container">

                    <div className="sign_header">
                        <NavLink to="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJeZIPvUv8zAc9pW0pO8_dBeMI5BYl7jcrD5FZsau-iYvUFxn8bIqA7SvfdtGa01x5sxM&usqp=CAU" alt="amazon logo" /></NavLink>
                    </div>

                    <div className="sign_form">
                        <form method="POST" >
                            <h1>Sign-In</h1>
                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="text" onChange={addData} value={indata.email} name='email' id="email" placeholder='Enter your email' />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input type="password" onChange={addData} value={indata.password} name='password' id='password' placeholder='At least 6 Char' />
                            </div>
                            <button className='signin_btn' onClick={sendData} >Continue</button>
                        </form>
                    </div>

                    <div className="create_accountinfo">
                        <p>New To Amazon</p>
                        <NavLink to="/register"> <button>Create Your Amazon Account</button> </NavLink>
                    </div>


                </div>

                <ToastContainer />

            </section>

        </>
    )
}

export default Sign_in;