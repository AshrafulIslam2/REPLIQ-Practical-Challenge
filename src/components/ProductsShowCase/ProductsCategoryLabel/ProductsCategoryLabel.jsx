"use client"
import React, { useState } from 'react'
import CategoryModal from './CategoryModal'

const ProductsCategoryLabel = () => {
  const [allCategoriesToggle,SetAllCategoriesToggle] = useState(false)

  const toggleHandel = () =>{
    SetAllCategoriesToggle(true)
  }
const categories = ["All Categories","Electronics","Home & Lifestyle","Men Fashions","Women Fashions","Toyes","All Categories","Electronics","Home & Lifestyle","Men Fashions","Women Fashions","Toyes","All Categories","Electronics","All Categories","Electronics","Home & Lifestyle","Men Fashions","Women Fashions","Toyes","Home & Lifestyle","Men Fashions","Women Fashions","Toyes"]
  return (
    <div className=''>
{
 allCategoriesToggle && <CategoryModal SetAllCategoriesToggle={SetAllCategoriesToggle}  categories={categories}/> 

}
    <div className='flex  flex-wrap place-items-center justify-center border '>
      {
        categories.slice(0,4).map((category,Index) => <button className='border   hover:text-blue-500 hover:border hover:border-blue-600 text-[24px] rounded-lg m-2 py-[8px] px-[16px]' key={Index} onClick={toggleHandel}>{category}</button>)
      }
    </div>
    </div>
  )
}

export default ProductsCategoryLabel
