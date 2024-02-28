import Image from 'next/image'
import React from 'react'

const ProductCardImage = ({src}) => {
  return (
    <Image src={"/images.webp"} alt='products' width={300} height={300} priority={100} className='group-hover:scale-110 transition-all duration-300'>   
    </Image>
  )
}

export default ProductCardImage
