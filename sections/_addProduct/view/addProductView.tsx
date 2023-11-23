'use client'
import { addBlog } from '@/services/blogsAPI';
import { addProduct } from '@/services/productsAPI';
import { Product } from '@/types/product';
import { getCurrentDate } from '@/utils/getCurrentDate';
import Image from 'next/image';
import React,{useState} from 'react'
import { useForm,Controller } from 'react-hook-form';

export default function AddProductView ()  {
  const {register,
    handleSubmit,
    formState:{errors},
    control,
    setValue,
    reset
    }= useForm<Product>();
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
    const onSubmit = (data:Product) => {
      try {
        data.image = imgPreview
        console.log(data);
        addProduct(data);
        alert("Add successfully");
        reset(data);
      } catch (error) {
        console.log(error);
      }    
    }
  return(
      <div className="container max-w-screen-xl mx-auto p-4">
        <h1 className='text-center text-3xl text-text-color'>Add a Product</h1>
        <form >
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Name of product" {...register("name",{required:{
                value:true,
                message:"Please enter your Product Name"
              }})} />
              {errors?.name && <p className="text-red">{errors.name.message}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="oldPrice" className="block mb-2 text-sm font-medium">Old Price</label>
              <input type="text" id="oldPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Old price of Product" {...register("oldPrice",{required:{
                value:true,
                message:"Please enter your product's old price"
              }})} />
              {errors?.oldPrice && <p className="text-red">{errors.oldPrice.message}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="price" className="block mb-2 text-sm font-medium">Price</label>
              <input type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Price of product" {...register("price",{required:{
                value:true,
                message:"Please enter your product's price"
              }})} />
              {errors?.price && <p className="text-red">{errors.price.message}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="sale" className="block mb-2 text-sm font-medium">Sale
            <Controller name='sale' control={control} defaultValue={false} render={({field}) => (
              <input
                type='checkbox'
                onChange={(e) =>field.onChange(e.target.checked)}
                checked={field.value}
              />
            )}/>
            </label>
              {errors?.sale && <p className="text-red">{errors.sale.message}</p>}
          </div>

          <div  className="mb-5">
            <label htmlFor="image" className="block mb-2 text-sm font-medium">Image</label>
              <input   type="file" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Image" 
              // {...register("img",{
              //   required:{
              //     value:true,
              //     message: "Please add your image"
              //   }
              // })} 
              onChange = {handleChangeImage}
              />
               {imgPreview && <Image width={690} height={383} src={imgPreview} className='max-w-[690px] max-h-[383px] object-cover' alt="preview"/>}
              {errors?.image && <p className="text-red">{errors.image.message}</p>}
          </div>
          <div  className="mb-5">
            <label htmlFor="desc" className="block mb-2 text-sm font-medium">description</label>
              <textarea id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[300px] " placeholder="Your description" {...register("desc",{
                required:{
                  value:true,
                  message: "Please add your description"
                }
              })}  />
              {errors?.desc && <p className="text-red">{errors.desc.message}</p>}
          </div>
          <div  className="mb-5">
            <label htmlFor="weight" className="block mb-2 text-sm font-medium">Weight</label>
              <input id="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Your weight" {...register("weight",{
                required: {
                  value:true,
                  message:"Please add product weight"
                }
              })}  />
              {errors?.weight && <p className="text-red">{errors.weight.message}</p>}
          </div>
          <div  className="mb-5">
            <label htmlFor="ingredients" className="block mb-2 text-sm font-medium">ingredients</label>
              <textarea id="ingredients" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[200px]" placeholder="Your ingredients" {...register("ingredients",{
                required: {
                  value:true,
                  message:"Please add product ingredients"
                }
              })}  />
              {errors?.ingredients && <p className="text-red">{errors.ingredients.message}</p>}
          </div>
          <div className="btn-submit text-center">
            <button onClick={handleSubmit(onSubmit)} className='px-4 py-2 bg-orange text-white rounded-md'>Add</button>
          </div>
        </form>
      </div>
  )
}
