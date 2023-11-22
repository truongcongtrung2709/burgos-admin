import React from 'react'
import { getProducts, productsURLEndpoint as productsCacheKey } from '@/services/productsAPI';
import useSWR from "swr"
const Modal = () => {
  const{data:products,isLoading, error} = useSWR(productsCacheKey,getProducts,
    {revalidateIfStale:false,
    revalidateOnFocus:false,
    revalidateOnReconnect:false})
  return (
    <div className='inset-0 fixed bg-black bg-opacity-25 backdrop-blue-sm flex justify-center items-center overflow-y-auto'>
      <div className='w-[600px] '>
        <div className="bg-white p-4 rounded flex flex-col">
        <button className='text-black text-md place-self-end'>X</button>
        <div className="modal-header border-b-[1px] border-b-dark-gray mb-4">
          <h1>Modal Header</h1>
        </div>
        <div className="modal-body grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium">First name</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="John" required />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium">Last name</label>
              <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Constantine" required />
          </div>
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium">Company</label>
              <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Company"  />
          </div>
          <div>
            <label htmlFor="country" className="block mb-2 text-sm font-medium">Country</label>
              <input type="text" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Country" required />
          </div>
          <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium">Address</label>
              <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="address" required />
          </div>
          <div>
            <label htmlFor="apartment" className="block mb-2 text-sm font-medium">Apartment</label>
              <input type="text" id="apartment" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="apartment"  />
          </div>
          <div>
            <label htmlFor="postCode" className="block mb-2 text-sm font-medium">Postcode</label>
              <input type="text" id="postCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Postcode"  />
          </div>
          <div>
            <label htmlFor="datetime" className="block mb-2 text-sm font-medium">Date & time</label>
              <input type="text" id="datetime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="hh:mm/mm/dd/yyyy"  />
          </div>
          <div>
            <label htmlFor="TownCity" className="block mb-2 text-sm font-medium">Town City</label>
              <input type="text" id="townCity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="TownCity"  />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
              <input type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="phone"  />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Your Email"  />
          </div>
          <div>
            <label htmlFor="orderNotes" className="block mb-2 text-sm font-medium">Order Notes</label>
              <input type="text" id="orderNotes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Your orderNotes"  />
          </div>
          <div>
            <label htmlFor="couponCode" className="block mb-2 text-sm font-medium">Coupon Code</label>
              <input type="text" id="couponCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Your couponCode"  />
          </div>
          <div>
            <label htmlFor="orderProducts" className="block mb-2 text-sm font-medium">Order Products</label>
              
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Modal