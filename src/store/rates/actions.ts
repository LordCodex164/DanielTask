import { GET_RATE } from "../../store/rates/constants";

export const getRateByTypeAndSize = (size:string, type: string) => {
    const data = {
        size,
        type
    }
    return {
        type: `${GET_RATE.REQUEST}`,
        payload: data
    }
}

