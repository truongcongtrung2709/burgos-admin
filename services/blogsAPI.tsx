import { Blog } from "@/types/blog";
import fetcher from "./fetcher";


export const blogsURLEndpoint = "/blogs"

export const getBlogs = async() => {

  try {
    const res = await fetcher.get(blogsURLEndpoint);
    return res.data
  } catch (error) {
    console.log(error);
    
  }
}


export const addBlog = async(values:Blog) => {

  try {
    const res = await fetcher.post(blogsURLEndpoint,values);
    return res.data
  } catch (error) {
    console.log(error);
    
  }
}
export const updateBlog = async (data:Blog) => {
  try {
    const res = await fetcher.put(blogsURLEndpoint + "/" +data.id, data);
    return res.data
  } catch (error) {
    console.log(error);
  }

}
export const deleteBlog = async (blogId:number) => {
  try {
    const res = await fetcher.delete(blogsURLEndpoint + "/" + blogId);
    return res.data
  } catch (error) {
    console.log(error);
  }

}