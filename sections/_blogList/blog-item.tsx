import React,{useState} from 'react'
import { Blog } from '@/types/blog'
import EditBlogModal from '@/components/editBlogModal'
import { blogsURLEndpoint, deleteBlog } from '@/services/blogsAPI'
import {mutate} from "swr"
type Prop = {
  blog:Blog
  index:number
}
const BlogItem = ({blog,index} : Prop) => {
  const [isToggleEdit, setIsToggleEdit] = useState(false)
  console.log(blog);
  
  function handleDelete(id:number) {
    if(confirm("Are you sure you want to delete?")){
        deleteBlog(id)
        mutate(blogsURLEndpoint);
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
                    {blog?.dateTime}
                </td>
                <td className=" p-4">
                    {blog?.title}
                </td>
                <td className=" p-4">
                    {blog?.author}
                </td>
                <td className=" p-4">
                    {blog?.category}
                </td>
                <td className=" p-4">
                    {blog?.img}
                </td>         
               
                <td className=" p-4">
                    <button 
                    onClick={()=>setIsToggleEdit(!isToggleEdit)}
                    className="mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                    <EditBlogModal isToggleEdit={isToggleEdit} setIsToggleEdit={setIsToggleEdit} blog={blog}/>
                </td>
                <td className=" p-4">
                <button onClick={()=>handleDelete(blog?.id)} className="mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                </td>
            </tr>
        </tbody>
    </>
  )
}

export default BlogItem