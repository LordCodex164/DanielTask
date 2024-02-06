import { create } from "zustand";
import { FreightifyOffer } from "../@types";
import axios from "axios";
import toast from "react-hot-toast";
 interface RateState {
    rateData: FreightifyOffer[];
    isLoading: boolean;
    fetchRateData: (size:string, type:string) => Promise<FreightifyOffer[]>;
 }

 export const useRateStore = create<RateState>((set) => ({
    rateData: [],
    isLoading: false,
    fetchRateData: async (size: string, type:string) => {
        set({isLoading: true})    
      try { 
        let typeLower = type.toLowerCase()
         const res = await axios.get(`https://api.oneport365.com/api/live_rates/get_special_rates?container_size=${size}&container_type=${typeLower}`,{
            headers: {
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJkMDYwY2M1ZDFiZTI3MjJkZTNjMWIiLCJyb2xlIjoidXNlciIsImVtYWlsIjoiYWRlbmlyYW5kYW5pZWw1NjVAZ21haWwuY29tIiwiZXhwIjoxNzEyMDcwNzQwLjczLCJpYXQiOjE3MDY4ODY3NDB9.oTiS4tV3WM1jZY8KF2Yg1YLFMSb53VMaxDeqV_8t5ls",
                "Cookie": "__cf_bm=4H62I1TZov2zgbxgyWpHtr2vFFJra_Z00cL0QyCpWM4-1707172543-1-AXl9n/m+eCXyYfU8qYwgwhrFHO4LU8g8cfYPZlm2GeLO46jT4pDTxIdhMmm1qlz/9sZpqbMgh+LhnGmj8pX82Ik="
              }
         })
        set(({rateData: res.data.data.rates, isLoading:false}))
        return res.data.data.rates
      } catch (error:any) {
        console.log(error)
        toast.error(error?.message)
      }
      
    }
 }))