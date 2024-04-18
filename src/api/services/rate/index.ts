import {get} from "../../../helpers/axios"
import { getLiveRatesUrl } from "../../../api/endpoints"

export const getLiveRatesByContainerTypeAndSize = (data: {size: string, type: string}) => {
    const {size, type} = data
  return get(getLiveRatesUrl + `?container_size=${size}&container_type=${type}`)
}

const rateServices = {
    getLiveRatesByContainerTypeAndSize
}

export default rateServices