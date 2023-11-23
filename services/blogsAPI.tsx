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