import Payment from '@/components/Payment/Payment'
import React, { useState } from 'react'

const CartFooter = ({total}) => {
  const [paymentToggle,setPaymentToggle] =useState(true)
  return (
    <>
    {
      paymentToggle && <Payment  setPaymentToggle={setPaymentToggle}/>
    }
     <div className='flex justify-between px-[24px] py-[12px] mx-[24px] rounded-md bg-blue-100'>
      <button className='text-blue-700 text-[24px] font-medium'>
        Total
      </button>
      <h1 className='text-blue-700 text-[24px] font-medium'>${total}</h1>
    </div>
    <div className="flex  justify-evenly gap-4 overflow-x-auto p-[24px]">
   
    <button className="px-[24px] w-full text-[24px] font-medium  flex items-center justify-center gap-2 py-[8px] bg-orange-200 text-orange-500 rounded-md">
      <svg
       className="fill-orange-500"
        height="22"
        viewBox="0 -1 401.52289 401"
        width="22"
        xmlns="http://www.w3.org/2000/svg"
        id="fi_1159633"
      >
        <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"></path>
        <path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"></path>
      </svg>
     Cancel
    </button>
    <button className="px-[24px] w-full text-[24px] font-medium flex items-center  justify-center gap-2 py-[48x] bg-blue-200 text-blue-700 rounded-md">
       <svg
        height="32"
        className="fill-blue-700"
        viewBox="0 0 32 32"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
        id="fi_2811759"
      >
        <g id="_16" data-name="16">
          <path d="m7 10h18a1 1 0 0 0 0-2h-18a1 1 0 0 0 0 2z"></path>
          <path d="m25 15h-18a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"></path>
          <path d="m25 22h-18a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"></path>
        </g>
      </svg>
      Hold
    </button>
    <button className="px-[24px] w-full text-[24px] font-medium flex items-center  justify-center gap-2 py-[48x] bg-blue-200 text-blue-700 rounded-md whitespace-nowrap">
     <svg fill="#000000"  className="fill-blue-700" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23,12A11,11,0,0,1,4.963,20.451l-.256.256A1,1,0,0,1,4,21a.987.987,0,0,1-.383-.076A1,1,0,0,1,3,20V18a1,1,0,0,1,1-1H6a1,1,0,0,1,.707,1.707l-.322.322A9,9,0,1,0,3,12a9.107,9.107,0,0,0,.18,1.8,1,1,0,0,1-1.96.4A11,11,0,1,1,23,12ZM12,5a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2H13V6A1,1,0,0,0,12,5Z"/></svg>
      Discount
    </button>
    <button className="px-[24px] w-full text-[24px] font-medium flex items-center  justify-center gap-2 py-[48x] bg-blue-200 text-blue-700 rounded-md whitespace-nowrap" onClick={()=>setPaymentToggle(true)}>
    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
<path d="M9 12H15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9L12 15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="2"/>
</svg>
     Pay Now
    </button>
  </div>
    </>
  
  )
}

export default CartFooter
