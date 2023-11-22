import { Product } from "./product";

export type Order = {
  id: number;
  firstName: string,
  lastName: string,
  company: string,
  country: string,
  address: string,
  apartment: string,
  postCode: number,
  dateTime:string,
  townCity: string,
  phone: number,
  email: string,
  orderNotes: string,
  couponCode:string,
  orderProducts:Product[]|undefined,
  subTotal: number,
  total:number,
  duration:string,
}