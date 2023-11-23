import React, { useState, useEffect} from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Blog } from '@/types/blog';
import Image from 'next/image';
import { blogsURLEndpoint, updateBlog } from '@/services/blogsAPI';
import {mutate} from "swr"
import { Product } from '@/types/product';
import { productsURLEndpoint, updateProduct } from '@/services/productsAPI';
type Props = {
  product:Product
  isToggleEdit :boolean
  setIsToggleEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const EditProductModal = ({product,isToggleEdit,setIsToggleEdit} : Props) => {

  const [imgPreview, setImgPreview] = useState("")

  const {register,
    handleSubmit,
    formState:{errors},
    setValue,
    control,
    reset}= useForm<Product>();

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
    if(product) {
      reset(product);
    }
  },[product, reset])

  function onSubmit(data:Product) {
    if(confirm("Are you sure")){
      console.log(data);
      updateProduct(data);
      setIsToggleEdit(false);
      mutate(productsURLEndpoint);
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
          <h1>Edit Product</h1>
        </div>
        <form className="modal-body grid md:grid-cols-2 gap-6 mb-6  border-b-[1px] border-gray pb-3 overflow-y-auto h-[400px]">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Product's name" {...register("name",{required:{
                value:true,
                message:"Please enter your Product's name"
              }})} />
              {errors?.name && <p className="text-red">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="oldPrice" className="block mb-2 text-sm font-medium">Old Price</label>
              <input type="text" id="oldPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="oldPrice" {...register("oldPrice",{required:{value:true,message:"this is required"}})}/>
              {errors?.oldPrice && <p className="text-red">{errors.oldPrice.message}</p>}
          </div>
          <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium">Price</label>
              <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="price" {...register("price" ,{required:{value:true,message:"this is required"}})} />
              {errors?.price && <p className="text-red">{errors.price.message}</p>}
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
               {imgPreview && <Image width={300} height={300} src={imgPreview} className='max-w-[690px] max-h-[383px] object-cover' alt="preview"/>}
              {errors?.image && <p className="text-red">{errors.image.message}</p>}
          </div>
          <div className='flex justify-start items-center'>
            <label htmlFor="sale" className="block mb-2 text-sm font-medium">Sale
            <Controller name='sale' control={control} defaultValue={false} render={({field}) => (
              <input
                className='ml-3 align-middle'
                type='checkbox'
                onChange={(e) =>field.onChange(e.target.checked)}
                checked={field.value}
              />
            )}/>
            </label>
              {errors?.sale && <p className="text-red">{errors.sale.message}</p>}
          </div>
          <div>
            <label htmlFor="weight" className="block mb-2 text-sm font-medium">weight (g)</label>
              <input type="text" id="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="weight" {...register("weight" ,{required:{value:true,message:"this is required"}})} />
              {errors?.weight && <p className="text-red">{errors.weight.message}</p>}
          </div>
          <div>
            <label htmlFor="weight" className="block mb-2 text-sm font-medium">weight (g)</label>
              <input type="text" id="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="weight" {...register("weight" ,{required:{value:true,message:"this is required"}})} />
              {errors?.weight && <p className="text-red">{errors.weight.message}</p>}
          </div>
          <div>
            <label htmlFor="ingredients" className="block mb-2 text-sm font-medium">Description</label>
              <textarea  id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[100px]" placeholder="desc" {...register("desc" ,{required:{value:true,message:"this is required"}})} />
              {errors?.desc && <p className="text-red">{errors.desc.message}</p>}
          </div>
          <div>
            <label htmlFor="ingredients" className="block mb-2 text-sm font-medium">Ingredients</label>
              <textarea  id="ingredients" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[100px]" placeholder="ingredients" {...register("ingredients" ,{required:{value:true,message:"this is required"}})} />
              {errors?.ingredients && <p className="text-red">{errors.ingredients.message}</p>}
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

export default EditProductModal