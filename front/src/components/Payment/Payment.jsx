import { Radio } from '@mui/material'
import React from 'react'
import "./Payment.css"

const Payment = () => {
  return (
        <>
        
        
           <div className='paymentbox'>
               
              <div>
                  <p className='PaymentTitle'>Select a payment method</p>
              </div>
              <div className="payment">

                  <h4 style={{margin:"5px"}} >Your saved credit and debit cards</h4>


                  <table>
                      <thead>
                          <td></td>
                
                          <td className='td1'> logo</td>
                          <td className='td2'>Name </td>
                          <td className='td3'> Type</td>
                      </thead>
                      
                    <tbody>
                    
                          
                       <td>
                           <tr><Radio/></tr>
                       </td>
                        <td>
                             <tr> <img style={{width:"30%"}}  src="data:image/jpeg;base64,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" alt="" /></tr>
                        </td>
                        <td>
                             <tr> Paytm</tr>
                             <tr>Google PAy</tr>
                             <tr>Phone PAy</tr>
                        </td>
                        <td>
                                  
                        </td>
                    </tbody>
                  </table>
        

              </div>
       
           </div>
        
        
        
        
        
        
        
        </>
  )
}

export default Payment