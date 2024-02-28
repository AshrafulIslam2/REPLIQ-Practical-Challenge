"use client";
import React, { useEffect, useState } from "react";
import Products from "../ProductsShowCase/Products";
import ProductsSearch from "../ProductsShowCase/ProductsSearch/ProductsSearch";
import ProductsCategoryLabel from "../ProductsShowCase/ProductsCategoryLabel/ProductsCategoryLabel";
import CartNavigation from "../Cart/CartNavigation/CartNavigation";
import AddCustomer from "../Cart/AddCustomer/AddCustomer";
import CartCalculation from "../Cart/CartCalculation/CartCalculation";
import { Toaster } from "react-hot-toast";
import CartFooter from "../Cart/CartFooter/CartFooter";

const ProductDashBoard = () => {
  const [productsData, SetProductsDetails] = useState([]);
  const [addedProduct,setAddedProduct] = useState([]);
  const [productCounts, setProductCounts] = useState({});

  useEffect(() => {
    console.log("effected");
    fetch("https://demo.martvill.techvill.net/api/user/products")
      .then((res) => res.json())
      .then((data) =>
        // console.log(data.response.records.data)
        SetProductsDetails((prev) => [...prev, ...data.response.records.data])
      );
  }, []);
  const increaseCount = (id) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const decreaseCount = (id) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 1),
    }));
  };
  const subTotal = addedProduct.reduce((acc, product) => {
    // Get the count of the product from productCounts
    const count = productCounts[product.id] || 0;
    // Multiply the count by the price and add to accumulator
    return acc + (parseFloat(product.regular_price[0]) * count);
  }, 0);

  console.log("totalPrice",subTotal)
  const tex= 25;
  const shipping=5;
  const discount = 40;
  const total =(subTotal+tex +shipping)- discount;

  return (
    <div className="grid 2xl:grid-cols-2 px-[24px]">
      <Toaster/>
      <div className="my-4">
        <CartNavigation/>
        <AddCustomer />
        <CartCalculation addedProduct={addedProduct} setAddedProduct={setAddedProduct} increaseCount={increaseCount} decreaseCount={decreaseCount} productCounts={productCounts} setProductCounts={setProductCounts} discount={discount} subTotal={subTotal} tex={tex} shipping={shipping}/>
        {
          addedProduct.length> 0 && <CartFooter total={total}/>
        }
       
      </div>
      <div className="border px-[16px]">
        <div>

        <ProductsSearch />
        <ProductsCategoryLabel/>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {productsData.map((product, Index) => (
            <>
              {" "}
              <Products product={product} key={Index} setAddedProduct={setAddedProduct}  addedProduct={addedProduct} increaseCount={increaseCount}/>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDashBoard;
