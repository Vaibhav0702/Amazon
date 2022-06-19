
import React, { useContext } from 'react'

import Avatar from '@mui/material/Avatar';


import { Logincontext } from "../Context/ContextProvider"
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';


import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
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

                    <Divider style={{ width: "100%", marginLeft: "-20px"  , marginBottom:"10px"}} />

                    <div className="flag">

                        <NavLink to="/"> Settings </NavLink>

                        <img  style={{width:"40px" , margin:"20px", marginTop:"1px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAnFBMVEX/mTMSiAf/////lyoAhQAAAIgAAH4AAIUAAIIAAIMAAHMAAHbk5PDg4O7w8Pfz8/np6fP5+f2lpctHR52Njb5BQZu+vtqrq8/ExN20tNSHh7tLS59/f7djY6mZmcXOzuXW1ugmJpE5OZgNDYtsbK1YWKRRUaF5ebQZGY7R0eWYmMUyMpcgIJBhYa3Bwd+YmMQ/P5smJpNycrEwMJgOd4ApAAAEs0lEQVR4nO2bWVfjOBBGGc1oiXc7jmM7DnYWAlm6geH//7cp2Q0DVA4z/WJxjr+bkyAvD5VLabGk3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/CZ/gs/cCPAZOOHACQdOOHDCgRPOd3CSFPl6cX4+L9Z5kbgORnwDJ0H+oMxMayml1jOjHvLAdUiOnRwPamZlSK2U0rYgZ2p1dBuUUyfJgTxIY37cq1UURCt1vzaGFKmD0yrk0smtzQxjTiIVRSSOIiqodGuMzZpbh3E5dHJn6Ls3y3MkWntY2Y9WROdlTa7MwV1gzpzEF0qHeZja8vLjRxrO6doldhWaKycxNadGZaK0B2VIHzm9w+GQahXlkHQlxZUTyhKzbBKR2syIrY8f9M6thmUqkmZJUi6OYnPk5KClKvpSZruYFb3Pv/4mWX/+p5LaUZvixsnJUJaIn33ZfvE1idmRjvWvY1IiKFOMm97HiZOAckDlQxMiMqo9GX15TZ0zpciyTxN7kXof5WRM68TJXOv5Y0SFte12qC3tNiJVqdh0IpZ0JrX5Ej3a21yE58JJq14TIKXBiahWIvWT2I8TPxUrypp42/fQNp1U6yA+F07o/1+nfa8rIklydCU2GTnJNqKgGhTIqL9WprWbRHHgJFTSVEM7Yg+OolKi2SZ+sm2EqkSn7Gilb1cqI4eDcXHgpKahif33BwdrpfUKsduXfkCvcr8ThWery/JgK9ecBin1+AE6cLKjPnaoHZmkfCm8ZesFpqNX4LVLj05VchijRLdG7sYPcHwnVHXkazmaU1uSeeV9XZcvZV3fl14mCrmIXm+QLrrj8Z1URu/jtiqHp5lK7drCD166rMm6l8AvjjvVPyGLuKzaeK9NNXqE4ztpdN9GhKfVOuuosPaa4Dmsn56e6vAS1p4ds3TZfpV3/948LuM7udPSHzri4PHZOzdl0GyCuZ1IMvNg0wRtvfUfTkN3U/pS340e4fhOnunZ7m0WIMqelKq7ZiYts6bLjdpmbzOP8UHrzegRju+Ems23JlSkURKGZbbQvRO9yMowTKL07Xr0rkEejfGd0JOd1dD8fdgZz/OJS32WA9v8RdEJz1Nyvm9ui5A6KT16hMgTzvhONqw9ySffnrzvdy7od3pexyf5x/HJ4mkx3fEJxrGcAM87HDwXc35r/mQ2jfkTzLNd4T/nY4fxyZTmY9/P22+HeXsx+Xn7fn3nZJPhq/Wd5ES3rVyE53Qd8GQPrq4Dnia3Diioj6Vm9uv14mpa68X/Z19BMbV9Bdh/cg3sU7pC/Dz7cj/bbHr72Yg79dW+x/GnTd5wuT82u7Y/9jTp/bGv+6hn2Ef9gav77Q9T3m9vwe8yrjL8fmeD3+98Y+CEAyccOOHACQdOODd/gc/c/AE+AyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAnnHxjxHzJHw6F3AAAAAElFTkSuQmCC" alt="" />

                    </div>

                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />


                    {

                        account ?
                        <div className='flag' onClick={logOutUser} >
                            <h3 style={{cursor:"pointer"}}>LogOut  </h3>
                            <LogoutIcon style={{ fontSize: "18px",cursor:"pointer", marginLeft: "10px" }} />

                        </div> 
                        :
                        <div className='flag'  >

                            <NavLink to="/login"> <h3>LogIn   </h3>  </NavLink> <LoginIcon  style={{margin:"10px"  , marginTop:"-5px"}}/>

                           
                           
                           
                        </div>
                    }





                </div>





            </div>

        </>
    )
}

export default Rightheader