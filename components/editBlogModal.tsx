import React, { useState, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { Blog } from '@/types/blog';
import Image from 'next/image';
import { blogsURLEndpoint, updateBlog } from '@/services/blogsAPI';
import {mutate} from "swr"
type Props = {
  blog:Blog
  isToggleEdit :boolean
  setIsToggleEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const EditBlogModal = ({blog,isToggleEdit,setIsToggleEdit} : Props) => {

  const [imgPreview, setImgPreview] = useState("")

  const {register,
    handleSubmit,
    formState:{errors},
    setValue,
    reset}= useForm<Blog>();

    const handleChangeImage = (evt:any) =>{
      const file = evt.target.files[0];
      if(!file){
        return;
      }else{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (evt:any) =>{
          setImgPreview(evt.target.result);
        }
      }
    }

  useEffect(() => {
    if(blog) {
      reset(blog);
    }
  },[blog, reset])

  function onSubmit(data:Blog) {
    if(confirm("Are you sure")){
      console.log(data);
      updateBlog(data);
      setIsToggleEdit(false);
      mutate(blogsURLEndpoint);
    }else{
      return null
    }
    
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
          <h1>Edit Blog</h1>
        </div>
        <form className="modal-body grid gap-6 mb-6  border-b-[1px] border-gray pb-3 overflow-y-auto h-[400px]">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium">Title</label>
              <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Blog's Title" {...register("title",{required:{
                value:true,
                message:"Please enter your blog's title"
              }})} />
              {errors?.title && <p className="text-red">{errors.title.message}</p>}
          </div>
          <div>
            <label htmlFor="author" className="block mb-2 text-sm font-medium">Author</label>
              <input type="text" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Author" {...register("author",{required:{value:true,message:"this is required"}})}/>
              {errors?.author && <p className="text-red">{errors.author.message}</p>}
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 text-sm font-medium">Category</label>
              <input type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="category" {...register("category" ,{required:{value:true,message:"this is required"}})} />
              {errors?.category && <p className="text-red">{errors.category.message}</p>}
          </div>
          <div  className="mb-5">
            <label htmlFor="img" className="block mb-2 text-sm font-medium">Image</label>
              <input   type="file" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Image" 
              // {...register("img",{
              //   required:{
              //     value:true,
              //     message: "Please add your image"
              //   }
              // })} 
              onChange = {handleChangeImage}
              />
               {imgPreview && <Image width={300} height={300} src={imgPreview} className='max-w-[690px] max-h-[383px] object-cover' alt="preview"/>}
              {errors?.img && <p className="text-red">{errors.img.message}</p>}
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

export default EditBlogModal