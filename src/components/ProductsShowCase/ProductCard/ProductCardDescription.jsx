import React from 'react'

const ProductCardDescription = ({name ,price}) => {
  return (
    <div className=' flex flex-col justify-center items-center  m-0 p-0 w-full '>

      <h1 className='text-[14px] lg:text-[12px] w-full  bg-gray-100 p-2 min-h-[50px]'>
        {name.length>30? name.slice(0,30)+"...":  name}
       </h1>
      <h1 className='font-semibold  2xl:text-[16px] text-gray-500 p-2'>${price.replace(/\.?0+$/, '')}</h1>
    </div>
  )
}

export default ProductCardDescription
