import React,{useState} from 'react'
import {mutate} from "swr"
import { Product } from '@/types/product'
import { deleteProduct, productsURLEndpoint } from '@/services/productsAPI'
import EditProductModal from '@/components/editProductModal'
type Prop = {
  product:Product
  index:number
}
const ProductItem = ({product,index} : Prop) => {
  const [isToggleEdit, setIsToggleEdit] = useState(false)
  
  function handleDelete(id:number) {
    if(confirm("Are you sure you want to delete?")){
        deleteProduct(id)
        mutate(productsURLEndpoint);
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
                    {product?.name}
                </td>
                <td className=" p-4">
                    ${product?.price}
                </td>
                <td className=" p-4">
                    {product?.weight}g
                </td>
                <td className=" p-4">
                    {product?.ingredients}
                </td>
                <td className=" p-4">
                    {product?.oldPrice}
                </td>         
               
                <td className=" p-4">
                    <button 
                    onClick={()=>setIsToggleEdit(!isToggleEdit)}
                    className="mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                    <EditProductModal isToggleEdit={isToggleEdit} setIsToggleEdit={setIsToggleEdit} product={product}/>
                </td>
                <td className=" p-4">
                <button onClick={()=>handleDelete(product?.id)} className="mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                </td>
            </tr>
        </tbody>
    </>
  )
}

export default ProductItem