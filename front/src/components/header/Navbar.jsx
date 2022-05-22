
import React, { useContext, useEffect, useState } from 'react'

import "./Navbar.css"

import SearchIcon from '@mui/icons-material/Search';

import Badge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';


import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';


import { NavLink, useNavigate } from 'react-router-dom';

import { Logincontext } from "../Context/ContextProvider";

import Rightheader from './Rightheader';

import Menu from '@mui/material/Menu';

import MenuItem from '@mui/material/MenuItem';


import List from '@mui/material/List';


import ListItem from '@mui/material/ListItem';


import LogoutIcon from '@mui/icons-material/Logout';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const { account, setAccount } = useContext(Logincontext);

    console.log("Account : ", account)


    const history = useNavigate();

    // ----------------from mui--


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    // ----------------------

    const [drower, setDrower] = useState(false)   // set side bar open or close ..........



    const [text, setText] = useState("");   //set search text.............


    console.log("text: ", text);


    const [listO, setListO] = useState(true);  /// set list open or close




    const { products } = useSelector(state => state.getProductsData); // get6 product from redux store


    console.log(products);

    // -----------------



    const getvalidUser = async () => {

        const res = await fetch("/validUser", {

            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"

        })

        const data = await res.json();

        //    console.log( "Data", data);

        if (res.status !== 201) {
            console.log("error");
        }
        else {
            console.log("Vaild Data");

            setAccount(data);
        }

    }


    const handleDrowerO = () => {

        setDrower(true)

    }  // set derower open ......



    const handleDrowerC = () => {

        setDrower(false)

    } // set drower Closed ......




    const logOutUser = async () => {

        const res2 = await fetch("/logOut", {

            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"

        })

        const data2 = await res2.json();

        //    console.log( "Data2", data2);

        if (res2.status !== 201) {
            console.log("error");
        }
        else {

            // alert("Log Out")

            toast.success("Log-Out Seccessful 😃 ", { position: "top-center" })  // from tostify package

            setAccount(false);

            history("/");
        }

    }

    // ---------

    const getText = (search) => {

        setText(search);
        setListO(false);

    }



    // ----







    useEffect(() => {

        getvalidUser();


    }, [])


    return (

        <header >
            <nav>
                <div className='left'>



                    <IconButton className='hamburgur' onClick={() => handleDrowerO()} >
                        <MenuIcon style={{ color: "white" }} />
                    </IconButton>


                    <Drawer open={drower}  >

                        <Rightheader onClose={handleDrowerC}  logOutUser={logOutUser}   />

                    </Drawer>



                    <div className="navlogo" >
                        <NavLink to="/">  <img src="https://www.pngmart.com/files/Amazon-Logo-Download-PNG-Image.png" alt="logo" /> </NavLink>
                    </div>


                    <div className="nav_searchbaar">
                        <input type="text" placeholder='Search Your Favourite Products 😃 ' onChange={(e) => getText(e.target.value)} />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>


                        {/* Search filter  */}


                        {
                            text &&
                            <List className="extrasearch" hidden={listO}>
                                {
                                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                        <ListItem>

                                            <NavLink to={`/product/${product.id}`}  onClick={()=> setListO(true)} >

                                                {product.title.longTitle}

                                            </NavLink>



                                        </ListItem>
                                    ))
                                }
                            </List>
                        }





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

                        account ? <Avatar className='avtar2'

                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}


                        >{account.fname[0].toUpperCase()}</Avatar> : <Avatar className='avtar'

                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}


                        ></Avatar>

                    }




                    {/* --------------- */}


                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >

                        <MenuItem onClick={handleClose}>My account</MenuItem>

                        {

                            account ? <MenuItem onClick={handleClose} >Logout <LogoutIcon onClick={logOutUser} style={{ fontSize: "20px", marginLeft: "10px" }} /> </MenuItem> : ""


                        }





                    </Menu>















                    <ToastContainer />

                    {/* ---------------------- */}

                </div>

            </nav>
        </header>
    )
}

export default Navbar