import {deleteOrder } from '@/services/ordersAPI'
import { Order } from '@/types/order'
import React,{useState} from 'react'
import EditOrderModal from '@/components/editOrderModal'
type Prop = {
  order:Order
  index:number
}
const OrderItem = ({order,index} : Prop) => {
  const [isToggleEdit, setIsToggleEdit] = useState(false)
  function handleDelete(id:number) {
    if(confirm("Are you sure you want to delete?")){
    deleteOrder(id);
    }else{
      return null;
    }
  }
  return (
    <>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className=" p-4 font-medium text-gray-900 ">
                    {index}
                </th>
                <td className=" p-4">
                    {order?.dateTime}
                </td>
                <td className=" p-4">
                    {order?.firstName}
                </td>
                <td className=" p-4">
                    {order?.address}
                </td>
                <td className=" p-4">
                    {order?.phone}
                </td>
                <td className=" p-4">
                    {order?.total}$
                </td>
                <td className={`p-4 
                ${order?.duration === "pending"? "bg-yellow text-text-color": 
                order?.duration === "delivering"? "bg-dark-gray text-text-color" : 
                order?.duration === "complete" ? "bg-black-navy text-white": ""}`}>
                    {order?.duration}
                </td>
               
                <td className=" p-4">
                    <button 
                    onClick={()=>setIsToggleEdit(!isToggleEdit)}
                    className="mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                    <EditOrderModal isToggleEdit={isToggleEdit} setIsToggleEdit={setIsToggleEdit} order={order}/>
                </td>
                <td className=" p-4">
                <button onClick={()=>handleDelete(order?.id)} className="mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                </td>
            </tr>
        </tbody>
    </>
  )
}

export default OrderItem