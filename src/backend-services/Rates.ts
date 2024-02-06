import axios from "axios"
import { FreightifyOffer } from "../@types"


export const getRates = async (size: string, type: string):Promise<FreightifyOffer[] | undefined | any> => {
  try {
    const res = await axios.get(`
    http://test-api.oneport365.com/api/live_rates/get_special_rates_no_auth?container_size=${size}&container_type=${type}`, {
      headers: {
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJkMDYwY2M1ZDFiZTI3MjJkZTNjMWIiLCJyb2xlIjoidXNlciIsImVtYWlsIjoiYWRlbmlyYW5kYW5pZWw1NjVAZ21haWwuY29tIiwiZXhwIjoxNzEyMDcwNzQwLjczLCJpYXQiOjE3MDY4ODY3NDB9.oTiS4tV3WM1jZY8KF2Yg1YLFMSb53VMaxDeqV_8t5ls",
        "Cookie": "__cf_bm=4H62I1TZov2zgbxgyWpHtr2vFFJra_Z00cL0QyCpWM4-1707172543-1-AXl9n/m+eCXyYfU8qYwgwhrFHO4LU8g8cfYPZlm2GeLO46jT4pDTxIdhMmm1qlz/9sZpqbMgh+LhnGmj8pX82Ik="
        
      }
    })
     return res.data.data.rates
  } catch (error) {
    console.log(error)
  }
}