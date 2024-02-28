import React from 'react'
import ProductCardImage from './ProductCard/ProductCardImage'
import ProductCardDescription from './ProductCard/ProductCardDescription'
import toast from 'react-hot-toast'

const Products = ({
  product,key,
  setAddedProduct,
  addedProduct,
  increaseCount
}) => {

  const addCart = (id) => {
    const isProductAlreadyAdded = addedProduct.some(
      (product) => product.id === id
    );
  
    // If the product is not already in the cart, add it
    if (!isProductAlreadyAdded) {
      setAddedProduct((prev) => [...prev, product]);
      increaseCount(product.id)
    } else {
      // Product already exists in the cart, handle accordingly (e.g., show a message)
      toast.error("Product already exists in the cart.")
    }
    // setAddedProduct(prev => [...prev,product])
  }
  return (
    <div className='flex flex-col justify-center  items-center border group' onClick={()=>addCart(product.id)} >
      <ProductCardImage src={product.featured_image_medium}/>
      <ProductCardDescription name={product.name} price={product.regular_price[0]}/>
    </div>
  )
}

export default Products
