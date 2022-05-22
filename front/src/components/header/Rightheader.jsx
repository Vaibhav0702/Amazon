
import React, { useContext } from 'react'

import Avatar from '@mui/material/Avatar';


import { Logincontext } from "../Context/ContextProvider"
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';



import "./Rightheader.css";


const Rightheader = ({ onClose, logOutUser }) => {

    const { account, setAccount } = useContext(Logincontext);


    console.log("Account : ", account)






    return (
        <>


            <div className="rightheader">

                <div className="right_nav" onClick={() => onClose()}  >

                    {

                        account ? <Avatar className='avtar2' >{account.fname[0].toUpperCase()}</Avatar> : <Avatar className='avtar' ></Avatar>

                    }

                    {

                        account ? <h3> Hello , {account.fname.toUpperCase()}</h3> : ""

                    }

                </div>
                <div className="nav_btn" onClick={() => onClose()} >

                    <NavLink to="/"> Home </NavLink>


                    <NavLink to="/"> Shop By Catogery </NavLink>


                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />


                    <NavLink to="/"> Today's Deal </NavLink>

                    {
                        account ? <NavLink to="/cart"> My Order's </NavLink> : <NavLink to="/login"> My Order's </NavLink>
                    }


                    <p>Fashion</p>
                    <p>Customer Services</p>
                    <p>Electronics</p>
                    <p>Prime</p>

                    <p>Amazon Pay</p>

                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />

                    <div className="flag">

                        <NavLink to="/"> Settings </NavLink>

                        <img src="" alt="" />

                    </div>

                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />
                    <div>

                        {
                            account ? <NavLink to="/" onClick={logOutUser} >  Log-Out </NavLink> : <NavLink to="/login"> Log-In </NavLink>
                        }
                    </div>




                </div>





            </div>

        </>
    )
}

export default Rightheader