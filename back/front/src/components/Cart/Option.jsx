

import { Logincontext } from "../Context/ContextProvider"

import React, { useContext } from 'react'

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';











const Option = ({ deleteData, get }) => {


  const { account, setAccount } = useContext(Logincontext);


  console.log("Account : ", account)




  const removeData = async (req, res) => {

    try {
      const res = await fetch(`/remove/${deleteData}`, {

        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"

      });


      const data = await res.json();
      console.log(data);

      if (res.status === 400 || !data) {
        console.log("Error")
      }
      else {
        console.log("Item remove");

        setAccount(data)

        get();

        toast.success("Iteam remove from cart 😃!", {
          position: "top-center"
        });

      }


    }
    catch (err) {
      console.log("err :", err)
    }


  }









  return (
    <>

      <div className='add_remove_select'>
        <select >


          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">3</option>
          <option value="4">4</option>

        </select>

        <p style={{ cursor: "pointer" }} onClick={() => removeData(deleteData)} >Delete</p> <span>|</span>

        <p className='forremovemedia'>Save or Later</p> <span>|</span>

        <p className='forremovemedia' >See More Like This</p>



        <ToastContainer />



      </div>



    </>
  )
}

export default Option;