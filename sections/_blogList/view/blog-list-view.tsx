'use client'
import { blogsTableTitle } from '@/_mock/_label-input/_blogsTableTitle'
import { blogsURLEndpoint, getBlogs } from '@/services/blogsAPI'
import { Blog } from '@/types/blog'
import React from 'react'
import useSWR from 'swr'
import BlogItem from '../blog-item'


export default function HomeView ()  {
  const{data:blogs,isLoading, error} = useSWR(blogsURLEndpoint,getBlogs)
  
  return (
    <>
    <div className="container max-w-screen-xl mx-auto p-4">
      <div className="options-bar border-b-2 border-b-gray pb-2 flex justify-between">
        <span>All Blogs</span>
        <div className="filter">
        <select name="filter" id="">
          <option value="0">Filter</option>
          <option value="date">title</option>
          <option value="complete">author</option>
          <option value="pending">category</option>
        
        </select>
        </div>
      </div>
    {blogs?.length === 0 && (
      <div className="no-blogs text-center ">
      <h1 className='p-4'>There is no Blogs</h1>
    </div>
    )}
    {blogs?.length !== 0 && (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {blogsTableTitle.map((title,index) => (
                  <th key={index} scope="col" className=" py-3">
                    {title}
                  </th>
                ))}
                  <th scope="col" className=" py-3">
                      <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className=" py-3">
                      <span className="sr-only">Delete</span>
                  </th>
              </tr>
          </thead>
      {blogs?.map((blog:Blog,index:number) => (
        <BlogItem key={index} blog={blog} index={index+1} />
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
