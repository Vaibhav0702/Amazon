


import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Sign_up = () => {

    
    const [updata , setUpdata] = useState({

        fname:"",
        email:"",
        mobile:"",
        password:"",
        Apassword:"",


    });











    return (
        <>  <section>
            <div className="sign_container">

                <div className="sign_header">
                   <NavLink to="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJeZIPvUv8zAc9pW0pO8_dBeMI5BYl7jcrD5FZsau-iYvUFxn8bIqA7SvfdtGa01x5sxM&usqp=CAU" alt="amazon logo" /></NavLink>
                </div>

                <div className="sign_form">
                    <form>
                        <h1>Create Your Account</h1>
                        <div className="form_data">
                            <label htmlFor="fname">Your Name</label>
                            <input type="text" onChange={(e) =>{
                                setUpdata({
                                    ...updata,
                                    fname:e.target.value
                                })
                            } } value={updata.fname} name='fname' id="fname" placeholder='Enter your Name' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="text" onChange={(e) =>{
                                setUpdata({
                                    ...updata,
                                    email:e.target.value
                                })
                            } } value={updata.email} name='email' id="email" placeholder='Enter your email' />
                        </div>

                        <div className="form_data">
                            <label htmlFor="number">Mobile Number</label>
                            <input type="text"  onChange={(e) =>{
                                setUpdata({
                                    ...updata,
                                    mobile:e.target.value
                                })
                            } } value={updata.mobile} name='mobile' id="mobile" placeholder='Enter your Number' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password"  onChange={(e) =>{
                                setUpdata({
                                    ...updata,
                                    password:e.target.value
                                })
                            } } value={updata.password} name='password' id='password' placeholder='At least 6 Char' />
                        </div>

                        <div className="form_data">
                            <label htmlFor="Apassword">Password Again</label>
                            <input type="password" onChange={(e) =>{
                                setUpdata({
                                    ...updata,
                                    Apassword:e.target.value
                                })
                            } } value={updata.Apassword} name='Apassword' id='password'  />
                        </div>

                        <button className='signin_btn'>Continue</button>


                        <div className="signin_info">
                            <p>Already have an account ? </p>
                            <NavLink to="/login">Sign-in</NavLink>
                        </div>


                    </form>
                </div>

              


            </div>
        </section>


        </>
    )
}

export default Sign_up;