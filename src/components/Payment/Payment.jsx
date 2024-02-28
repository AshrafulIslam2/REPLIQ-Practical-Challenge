import React from 'react'

const Payment = ({setPaymentToggle,total}) => {
  return (
    <div className=" bg-transparent backdrop-brightness-75 flex  gap-x-4  absolute top-0 right-0 h-screen w-screen  ">
   
  <div className="bg-white   h-full w-6/12   p-[24px] ml-auto ">
   <div className='flex justify-between py-[44px] px-[12px] bg-slate-300 text-white font-medium text-[24px] rounded-md'>
    <h1>Order Amount</h1>
    <h1>${total}</h1>
   </div>
    <div className="flex my-[40px] border rounded-tr-md rounded-tl-md ">
     <div className='w-[30%] border min-h-screen'>
        <h1 className='hover:bg-blue-300 hover:text-white py-4 px-4 font-medium' >Cash</h1>
        <h1 className='hover:bg-blue-300 hover:text-white py-4 px-4 font-medium'>Card</h1>
        <h1 className='hover:bg-blue-300 hover:text-white py-4 px-4 font-medium'>On Account</h1>
        <h1 className='hover:bg-blue-300 hover:text-white py-4 px-4 font-medium'>Cheque</h1>
     </div>
     <div className='w-[70%]'>
     <form className='w-full  flex flex-col justify-between gap-10 px-[24px] my-[24px]'>
        <div className='flex flex-col gap-10 px-[24px]'>
        <input type='text' className=' border-b w-full placeholder:text-[18px] outline-none' placeholder='Card Name'/>
        <input type='text' className=' border-b w-full placeholder:text-[18px] outline-none' placeholder='Card Number'/>
        <input type='text' className=' border-b w-full placeholder:text-[18px] outline-none' placeholder='Card Exp'/>
        <input type='text' className=' border-b w-full placeholder:text-[18px] outline-none' placeholder='Card Scrt'/>
        </div>
        <div className='flex gap-4'>
        <button className='px-[48px] py-[18px] mb-[48px] rounded-md bg-orange-400 text-[20px] font-medium text-white' onClick={()=> setPaymentToggle(false)}>
          Cancel 
        </button>
        <button className=' flex-grow px-[48px] py-[18px] mb-[48px] rounded-md bg-blue-400 text-[20px] font-medium text-white'>
          Pay Now 
        </button>
        </div>
      </form>
     </div>
    </div>
  </div>
</div>
  )
}

export default Payment
