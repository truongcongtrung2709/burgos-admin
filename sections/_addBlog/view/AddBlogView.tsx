'use client'
import { addBlog } from '@/services/blogsAPI';
import { Blog } from '@/types/blog';
import { getCurrentDate } from '@/utils/getCurrentDate';
import Image from 'next/image';
import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import useSWR from 'swr'

export default function AddBlogView ()  {
  const {register,
    handleSubmit,
    formState:{errors},
    setValue
    }= useForm<Blog>();
    const [imgPreview, setImgPreview] = useState("")
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
    const onSubmit = (data:Blog) => {
      try {
        data.img = imgPreview
        console.log(data);
        addBlog(data);
        alert("Add successfully");
      } catch (error) {
        console.log(error);
      }    
    }
  return(
      <div className="container max-w-screen-xl mx-auto p-4">
        <h1 className='text-center text-3xl text-text-color'>Add a Blog</h1>
        <form >
        <div className="mb-5">
            <label htmlFor="blog-title" className="block mb-2 text-sm font-medium">Title</label>
              <input type="text" id="blog-title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="title of Blog" {...register("title",{required:{
                value:true,
                message:"Please enter your blog's Title"
              }})} />
              {errors?.title && <p className="text-red">{errors.title.message}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="blog-author" className="block mb-2 text-sm font-medium">Author</label>
              <input type="text" id="blog-author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Author of Blog" {...register("author",{required:{
                value:true,
                message:"Please enter your blog's Author name"
              }})} />
              {errors?.author && <p className="text-red">{errors.author.message}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="blog-category" className="block mb-2 text-sm font-medium">Category</label>
              <input type="text" id="blog-category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Category of Blog" {...register("category",{required:{
                value:true,
                message:"Please enter your blog's Category"
              }})} />
              {errors?.category && <p className="text-red">{errors.category.message}</p>}
          </div>
          <div hidden className="mb-5">
            <label htmlFor="dateTime" className="block mb-2 text-sm font-medium">Date & time</label>
              <input type="text" id="dateTime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="date & time" {...register("dateTime")} value={getCurrentDate()} />
              {errors?.dateTime && <p className="text-red">{errors.dateTime.message}</p>}
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
               {imgPreview && <Image width={690} height={383} src={imgPreview} className='max-w-[690px] max-h-[383px] object-cover' alt="preview"/>}
              {errors?.img && <p className="text-red">{errors.img.message}</p>}
          </div>
          <div  className="mb-5">
            <label htmlFor="content" className="block mb-2 text-sm font-medium">Content</label>
              <textarea id="content" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[300px] " placeholder="Your Content" {...register("content",{
                required:{
                  value:true,
                  message: "Please add your content"
                }
              })}  />
              {errors?.content && <p className="text-red">{errors.content.message}</p>}
              <span>Every block divide by every break line</span>
          </div>
          <div  className="mb-5">
            <label htmlFor="blockQuote" className="block mb-2 text-sm font-medium">Block Quote</label>
              <textarea id="blockQuote" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[200px]" placeholder="Your blockQuote" {...register("blockQuote",{
                required: {
                  value:true,
                  message:"Please add your blockquote"
                }
              })}  />
              {errors?.blockQuote && <p className="text-red">{errors.blockQuote.message}</p>}
          </div>
          <div className="btn-submit text-center">
            <button onClick={handleSubmit(onSubmit)} className='px-4 py-2 bg-orange text-white rounded-md'>Add</button>
          </div>
        </form>
      </div>
  )
}
