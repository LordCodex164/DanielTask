import {get} from "../../../helpers/axios"
import { getLiveRatesUrl } from "../../../api/endpoints"

interface dataSizeAndType {
    size: string;
    type: string
}

interface type{
    type: string
}

interface data {
    size: string;
    type: string
}

export const getLiveRatesByContainerTypeAndSize = (data: {size: string, type: string}) => {
    const {size, type} = data
  return get(getLiveRatesUrl + `?container_size=${size}&container_type=${type}`)
}

const rateServices = {
    getLiveRatesByContainerTypeAndSize
}

export default rateServices