"use client";
import React, { useState } from "react";

const CartCalculation = ({
  addedProduct,
  setAddedProduct,
  increaseCount,
  decreaseCount,
  productCounts,
  setProductCounts,
  discount,
  subTotal,
  tex,
  shipping,
}) => {
  const deleteProductFromCart = (id) => {
    const filterCart = addedProduct.filter(
      (product, Index) => product.id !== id
    );
    setAddedProduct(filterCart);
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: 0,
    }));
  };

  return (
    <div className="mx-[24px]">
      {addedProduct.length > 0 ? (
        addedProduct.map((product, Index) => (
          <div key={Index} className="flex gap-x-2">
            <button>
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <table class="table-fixed w-full border-collapse border border-slate-400  rounded-m">
              <tbody>
                <tr className="py-[20px]">
                  <td className="border w-[50%] border-slate-300 text-[20px] text-slate-500 font-medium whitespace-nowrap ">
                    {product.name.length > 20
                      ? product.name.slice(0, 35) + "..."
                      : product.name}
                  </td>
                  <td className="border border-slate-300 text-[20px] text-slate-500 font-medium whitespace-nowrap">
                    ${product.regular_price[0].replace(/\.?0+$/, "")}
                  </td>
                  <td className="border border-slate-300 text-[20px] text-slate-500 font-medium whitespace-nowrap">
                    <div className="flex items-center justify-center gap-6">
                      <button onClick={() => decreaseCount(product.id)}>
                        <svg
                          width="32px"
                          height="32px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#1C274C"
                            stroke-width="1.5"
                          />
                          <path
                            d="M15 12H9"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                      <h1 className="text-slate-500 showcount count font-medium text-[20px] whitespace-nowrap">
                        {productCounts[product.id]}
                      </h1>
                      <button
                        className=""
                        onClick={() => increaseCount(product.id)}
                      >
                        <svg
                          width="32px"
                          height="32px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12H15"
                            stroke="#323232"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 9L12 15"
                            stroke="#323232"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="#323232"
                            stroke-width="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="border totalCount border-slate-300 text-[20px] text-slate-500 font-medium">
                    $
                    {productCounts[product.id] *
                      product.regular_price[0].replace(/\.?0+$/, "")}
                  </td>
                </tr>
              </tbody>
            </table>
            <svg
              width="32px"
              height="32px"
              onClick={() => deleteProductFromCart(product.id)}
              className="fill-red-700"
              viewBox="0 0 1024 1024"
              fill="red"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z"
                fill=""
              />
              <path
                d="M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z"
                fill=""
              />
            </svg>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className=" text-[26px] text-slate-500 font-medium">
            NO Items Added
          </h1>
        </div>
      )}
      {addedProduct.length > 0 && (
        <div className=" w-full flex justify-end  mt-[50px]  mb-[20px] px-[10px]">
          <div>
            <div className="border-t border-b flex gap-48 justify-between text-[20px] font-medium">
              <h1>Subtotal</h1>
              <h1>${subTotal}</h1>
            </div>
            <div className="border-t border-b flex gap-48 justify-between text-[20px] font-medium">
              <h1>Tex </h1>
              <h1>${tex}</h1>
            </div>
            <div className="border-t border-b flex gap-48 justify-between text-[20px] font-medium">
              <h1>Shipping </h1>
              <h1>${shipping}</h1>
            </div>

            <div className="border-t border-b flex gap-48 justify-between text-[20px] font-medium">
              <h1>Discount </h1>
              <h1>${discount}</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCalculation;
