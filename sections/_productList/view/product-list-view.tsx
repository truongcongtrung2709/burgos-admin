'use client'
import { productTableTitles } from '@/_mock/_productTableTitles'
import { getProducts, productsURLEndpoint } from '@/services/productsAPI'
import { Product } from '@/types/product'
import React from 'react'
import useSWR from 'swr'
import ProductItem from '../product-item'

export default function ProductListView ()  {
  const{data:products,isLoading, error} = useSWR(productsURLEndpoint,getProducts)
  
  return (
    <>
    <div className="container max-w-screen-xl mx-auto p-4">
      <div className="options-bar border-b-2 border-b-gray pb-2 flex justify-between">
        <span>All Products</span>
        <div className="filter">
        <select name="filter" id="">
          <option value="0">Filter</option>
          <option value="name">name</option>
          <option value="price">price</option>
          <option value="category">category</option>
        
        </select>
        </div>
      </div>
    {products?.length === 0 && (
      <div className="no-products text-center ">
      <h1 className='p-4'>There is no products</h1>
    </div>
    )}
    {products?.length !== 0 && (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {productTableTitles.map((title,index) => (
                  <th key={index} scope="col" className=" py-3">
                    {title}
                  </th>
                ))}
                  <th scope="col" className=" py-3">
                      <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className=" py-3">
                      <span className="sr-only">Delete</span>
                  </th>
              </tr>
          </thead>
      {products?.map((product:Product,index:number) => (
        <ProductItem key={index} product={product} index={index+1} />
      ))}
          </table>
        </div>
    )}
    {isLoading ? (<div className='text-center'>...Loading...</div>): (<></>)}
    {error ? (<div className='text-center'>...Error...</div>): (<></>)}
    
    </div>
    </>
  )
}
