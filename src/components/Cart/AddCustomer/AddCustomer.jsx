"use client"
import React, { useState } from 'react'
import AddCustomerModal from './AddCustomerModal'

const AddCustomer = () => {
  const [addNewUser,setAddNewUser] = useState(false) 
  return (
    <div className=''>
      {
        addNewUser && <AddCustomerModal setAddNewUser={setAddNewUser}/>
      }
      <div className='flex justify-between px-[24px] py-[12px] mx-[24px] my-4 rounded-md bg-blue-100' onClick={()=>setAddNewUser(true) }>
      <button className='text-blue-700'>
        Steve Jobs
      </button>
      <button>
      <svg width="32px"  className='text-blue-300' height="32px" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
<path d="M9 12H15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9L12 15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="2"/>
</svg>
      </button>
    </div>
    </div>
  
  )
}

export default AddCustomer
