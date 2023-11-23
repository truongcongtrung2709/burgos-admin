'use client'
import React from 'react'
import useSWR from 'swr'
import {getOrders, ordersURLEndpoint } from '@/services/ordersAPI'
import { Order } from '@/types/order'
import OrderItem from '../order-item'
import { ordersTableTitle } from '@/_mock/_OrdersTableTitle'
export default function HomeView ()  {
  const{data:orders,isLoading, error} = useSWR(ordersURLEndpoint,getOrders)
  return (
    <>
    <div className="container max-w-screen-xl mx-auto p-4">
      <div className="options-bar border-b-2 border-b-gray pb-2 flex justify-between">
        <span>All Receipts</span>
        <div className="filter">
        <select name="filter" id="">
          <option value="0">Filter</option>
          <option value="date">Date</option>
          <option value="complete">Complete</option>
          <option value="pending">pending</option>
          <option value="delivering">delivering</option>
        </select>
        </div>
      </div>
    {orders?.length === 0 && (
      <div className="no-receipt text-center ">
      <h1 className='p-4'>There is no   Receipts today</h1>
    </div>
    )}
    {orders?.length !== 0 && (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {ordersTableTitle.map((title,index) => (
                  <th key={index} scope="col" className=" py-3">
                    {title}
                  </th>
                ))}
                  <th scope="col" className=" py-3">
                      <span className="sr-only">Edit</span>
                  </th>
            
              </tr>
          </thead>
      {orders?.map((order:Order,index:number) => (
        <OrderItem key={index} order={order} index={index+1} />
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
