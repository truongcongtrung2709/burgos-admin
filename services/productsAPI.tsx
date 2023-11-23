import { Product } from "@/types/product";
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
export const addProduct = async(values:Product) => {

  try {
    const res = await fetcher.post(productsURLEndpoint,values);
    return res.data
  } catch (error) {
    console.log(error);
    
  }
}
export const deleteProduct = async (productId:number) => {
  try {
    const res = await fetcher.delete(productsURLEndpoint + "/" + productId);
    return res.data
  } catch (error) {
    console.log(error);
  }

}
export const updateProduct = async (data:Product) => {
  try {
    const res = await fetcher.put(productsURLEndpoint + "/" +data.id, data);
    return res.data
  } catch (error) {
    console.log(error);
  }

}