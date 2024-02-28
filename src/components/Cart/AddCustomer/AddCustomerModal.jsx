import React from 'react'

const AddCustomerModal = ({setAddNewUser}) => {
  return (
    <div className='absolute   flex justify-center items-center h-screen w-screen bg-transparent backdrop-brightness-75 top-0 left-0 border'>
    <div className=' bg-white w-[550px] max-w-[550px] px-[16px] py-[8px]   '>
     <div className='flex items-center gap-0 '>
     <svg onClick={()=> setAddNewUser(false)} id="fi_3329351" height="44" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m21 0h-11a3 3 0 0 0 -3 3v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v18a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1-1v-5a1 1 0 0 0 -2 0v5a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-18a3 3 0 0 0 -3-3z"></path><path d="m4.707 8.293a1 1 0 0 0 -1.414 0l-3 3a1.016 1.016 0 0 0 0 1.414l3 3a1 1 0 1 0 1.414-1.414l-1.293-1.293h12.586a1 1 0 0 0 0-2h-12.586l1.293-1.293a1 1 0 0 0 0-1.414z"></path></svg>
     <h1 className='text-[24px] flex-grow font-medium text-center my-[44px]'>Add New Customer</h1>
     </div>
      <form className='w-full flex flex-col gap-10 px-[24px]'>
        <input type='text' className=' border-b w-full placeholder:text-[18px] outline-none' placeholder='Name'/>
        <input type='text' className=' border-b w-full placeholder:text-[18px] outline-none' placeholder='Email'/>
        <input type='text' className=' border-b w-full placeholder:text-[18px] outline-none' placeholder='Phone'/>
        <input type='text' className=' border-b w-full placeholder:text-[18px] outline-none' placeholder='Currency'/>
        <input type='text' className=' border-b w-full placeholder:text-[18px] outline-none' placeholder='TextID'/>
        <div className='flex gap-x-4 items-center text-blue-700'>
        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" className='text-blue-700'  xmlns="http://www.w3.org/2000/svg">
<path d="M9 12H15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9L12 15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="2"/>
</svg>
Add More Details
        </div>
        <button className='px-[48px] py-[18px] mb-[48px] bg-blue-400 text-[20px] font-medium text-white'>
          update 
        </button>
      </form>
    </div>
    </div>
  )
}

export default AddCustomerModal
