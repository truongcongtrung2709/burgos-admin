import { Order } from "@/types/order";
import fetcher from "./fetcher";


export const ordersURLEndpoint = "/orders"

export const getOrders = async () => {
  try {
    const res = await fetcher.get(ordersURLEndpoint);
    return res.data
  } catch (error) {
    console.log(error);
  }

}
export const updateOrder = async (data:Order) => {
  try {
    const res = await fetcher.put(ordersURLEndpoint + "/" +data.id, data);
    return res.data
  } catch (error) {
    console.log(error);
  }

}
export const deleteOrder = async (orderId:number) => {
  try {
    const res = await fetcher.delete(ordersURLEndpoint + "/" + orderId);
    return res.data
  } catch (error) {
    console.log(error);
  }

}