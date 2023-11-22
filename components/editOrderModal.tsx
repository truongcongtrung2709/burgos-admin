import React, { useMemo } from 'react'
import { getProducts, productsURLEndpoint as productsCacheKey } from '@/services/productsAPI';
import useSWR from "swr"
import { Product } from '@/types/product';
import { Order } from '@/types/order';
import { useForm } from 'react-hook-form';

type Props = {
  order:Order
  isToggleEdit :boolean
  setIsToggleEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const EditOrderModal = ({order,isToggleEdit,setIsToggleEdit} : Props) => {

  const {register,
        handleSubmit,
        formState:{errors}}= useForm<Order>();
  function onSubmit(data:Order) {

  }
  const handleWrapperClose = (e:any) => {
    if(e.target.id === 'wrapper') {
      setIsToggleEdit(false)
    }
  }
  return (
    <div 
    onClick={handleWrapperClose}
    id='wrapper' 
    className={` ${isToggleEdit ? "flex" : "hidden"} inset-0 fixed bg-black bg-opacity-25 backdrop-blue-sm justify-center items-center overflow-y-auto`}>
      <div className='w-[600px] '>
        <div className="bg-white p-4 rounded flex flex-col">
        <button className='text-black text-md place-self-end' onClick={()=>setIsToggleEdit(false)}>X</button>
        <div className="modal-header border-b-[1px] border-b-dark-gray mb-4">
          <h1>Edit Order</h1>
        </div>
        <form className="modal-body grid gap-6 mb-6 md:grid-cols-2 border-b-[1px] border-gray pb-3 overflow-y-auto h-[400px]">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium">First name</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="John" {...register("firstName",{required:{
                value:true,
                message:"Please enter your first name"
              }})} />
              {errors?.firstName && <p className="text-red">{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium">Last name</label>
              <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Constantine" {...register("lastName",{required:{value:true,message:"this is required"}})}/>
              {errors?.lastName && <p className="text-red">{errors.lastName.message}</p>}
          </div>
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium">Company</label>
              <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Company" {...register("company")} />
          </div>
          <div>
            <label htmlFor="country" className="block mb-2 text-sm font-medium">Country</label>
              <input type="text" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Country" {...register("country" ,{required:{value:true,message:"this is required"}})} />
              {errors?.country && <p className="text-red">{errors.country.message}</p>}
          </div>
          <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium">Address</label>
              <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="address" {...register("address",{required:{value:true,message:"this is required"}})} />
              {errors?.address && <p className="text-red">{errors.address.message}</p>}
          </div>
          <div>
            <label htmlFor="apartment" className="block mb-2 text-sm font-medium">Apartment</label>
              <input type="text" id="apartment" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="apartment"  {...register("apartment")}/>
              {errors?.apartment && <p className="text-red">{errors.apartment.message}</p>}
          </div>
          <div>
            <label htmlFor="postCode" className="block mb-2 text-sm font-medium">Postcode</label>
              <input type="text" id="postCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Postcode"   {...register("postCode")}/>
          </div>
          <div>
            <label htmlFor="datetime" className="block mb-2 text-sm font-medium">Date & time</label>
              <input type="text" id="datetime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="hh:mm/mm/dd/yyyy"  {...register("dateTime",{
                required:{
                  value:true,
                  message:"please fill Date & time"
                }
              })}/>
          </div>
          <div>
            <label htmlFor="TownCity" className="block mb-2 text-sm font-medium">Town City</label>
              <input type="text" id="townCity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="TownCity"  {...register("townCity",{required:{value:true,message:"this is required"}})}/>
              {errors?.townCity && <p className="text-red">{errors.townCity.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
              <input type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="phone"  {...register("phone", {
                        required: {
                            value: true,
                            message: 'this is required'
                        },
                        pattern: {
                            value: /[0-9]{10,16}/,
                            message: 'must be from 9-16 numbers'
                        }
                    })}/>
                    {errors?.phone && <p className="text-red">{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Your Email" {...register("email",{required:{
                  value:true,
                  message:"this is required"
                },pattern:{
                  value: /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
                  message:"email invalid"
                }})} />
                 {errors?.email && <p className="text-red">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="orderNotes" className="block mb-2 text-sm font-medium">Order Notes</label>
              <input type="text" id="orderNotes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Your orderNotes" {...register("orderNotes")} />
          </div>
          <div>
            <label htmlFor="couponCode" className="block mb-2 text-sm font-medium">Coupon Code</label>
              <input type="text" id="couponCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Your CouponCode" {...register("couponCode")} />
          </div>
         
          <div>
            <label htmlFor="subTotal" className="block mb-2 text-sm font-medium">Sub Total</label>
              <input type="text" id="subTotal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Your subTotal" {...register("subTotal",{required:{value:true,message:"this is required"}})}  />
              {errors?.subTotal && <p className="text-red">{errors.subTotal.message}</p>}
          </div>
          <div>
            <label htmlFor="total" className="block mb-2 text-sm font-medium">Total</label>
              <input type="text" id="total" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Your Total"  
              {...register("total",{required:{value:true,message:"this is required"}})}/>
              {errors?.total && <p className="text-red">{errors.total.message}</p>}
          </div>
          <div>
            <label htmlFor="duration" className="block mb-2 text-sm font-medium">Duration</label>
              <input type="radio" id="duration" className='mx-1'  {...register("duration",{required:{value:true,message:"this is required"}})} />
              <label htmlFor="">Pending</label>
              <input type="radio" id="duration"  className='mx-1' {...register("duration",{required:{value:true,message:"this is required"}})} />
              <label htmlFor="">Delivering</label>
              <input type="radio" id="duration" {...register("duration",{required:{value:true,message:"this is required"}})} className='mx-1'  />
              <label htmlFor="">Completed</label>
              {errors?.duration && <p className="text-red">{errors.duration.message}</p>}
          </div>
        </form>
        <div className="modal-footer flex justify-between">
          <button 
          onClick={() => setIsToggleEdit(false)}
          className='bg-dark-gray text-white p-2 rounded-sm'>Cancel</button>
          <button onClick={handleSubmit(onSubmit)} className='bg-yellow text-white p-2 rounded-sm'>Confirm</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default EditOrderModal