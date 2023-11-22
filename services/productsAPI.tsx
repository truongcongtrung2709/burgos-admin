import fetcher from "./fetcher";


export const productsURLEndpoint = "/products"

export const getProducts = async () => {
 
  try {
    const res = await fetcher.get(productsURLEndpoint);
    return res.data
  } catch (error) {
    console.log(error);
    
  }
}
