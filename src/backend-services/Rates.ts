import axios from "axios"
import { FreightifyOffer } from "../@types"


export const getRates = async (size: string, type: string):Promise<FreightifyOffer[] | undefined | any> => {
  try {
    const res = await axios.get(`https://oneport365.free.beeceptor.com/live_rates?container_size=${size}&container_type=${type}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJkMDYwY2M1ZDFiZTI3MjJkZTNjMWIiLCJyb2xlIjoidXNlciIsImVtYWlsIjoiYWRlbmlyYW5kYW5pZWw1NjVAZ21haWwuY29tIiwiZXhwIjoxNzEyMDcwNzQwLjczLCJpYXQiOjE3MDY4ODY3NDB9.oTiS4tV3WM1jZY8KF2Yg1YLFMSb53VMaxDeqV_8t5ls",
        "Cookie": "__cf_bm=pTb9E7iDtjFmH_j2L4DqKP4CIMqaOySmLHIqRv3pu_o-1713195050-1.0.1.1-uVxdDLJCmxfiICKjqSJlzJvPzz3mgqT0di3MDVAfwrqQ5jz.g4VlFzKnNHmtEEZhPYXM4Qlb2BeV0GXB_3LvNQ"
      }
    })
     return res.data.data.rates
  } catch (error) {
    console.log(error)
  }
}