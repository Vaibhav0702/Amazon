
import React, { useContext, useEffect } from 'react'

import "./Navbar.css"

import SearchIcon from '@mui/icons-material/Search';

import Badge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Avatar from '@mui/material/Avatar';

import { NavLink } from 'react-router-dom';

import { Logincontext } from "../Context/ContextProvider"


const Navbar = () => {

    const { account, setAccount } = useContext(Logincontext);


    console.log("Account : ", account)


    const getvalidUser = async() => {

       const res = await fetch("/validUser" , {
            
        method:"GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"

       })
       
       const data = await res.json();

    //    console.log( "Data", data);

      if(res.status !== 201)
      {
          console.log("error");
      }
      else
      {
          console.log("Vaild Data");

          setAccount(data);
      }

    }
   
    useEffect(()=>{
      
        getvalidUser();


    } , [])


    return (

        <header >
            <nav>
                <div className='left'>
                    <div className="navlogo" >
                        <NavLink to="/">  <img src="https://www.pngmart.com/files/Amazon-Logo-Download-PNG-Image.png" alt="logo" /> </NavLink>
                    </div>
                    <div className="nav_searchbaar">
                        <input type="text" />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>

                <div className='right'>

                    <div className="nav_btn">
                        <NavLink to="/login">
                            signin
                        </NavLink>
                    </div>


                    <div className="cart_btn">


                        {
                            account ? 
                            
                            <NavLink to="/cart">

                                <Badge badgeContent={account.carts.length} color="primary">
                                    <ShoppingCartIcon id="icon" />
                                </Badge>

                            </NavLink> 
                            
                            : 
                             
                            <NavLink to="/login">

                                <Badge badgeContent={0} color="primary">
                                    <ShoppingCartIcon id="icon" />
                                </Badge>

                            </NavLink>
                        }



                        <p>
                            Cart
                        </p>
                    </div>
                    

                    {
                          
                          account ?    <Avatar className='avtar2' >{account.fname[0].toUpperCase() }</Avatar> :  <Avatar className='avtar' ></Avatar>

                    }

                  

                </div>

            </nav>
        </header>
    )
}

export default Navbar