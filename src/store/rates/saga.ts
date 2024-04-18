import rateServices from "../../api/services/rate";
import { ResponseGenerator } from "../../store/type";
import { call, put, takeEvery } from "redux-saga/effects"
import { GET_RATE } from "./constants";
import { errorHandler } from "../../helpers/errorHandler";

function* getLiveRateByTypeAndSize ({payload}:any) {
    const {size, type} = payload
    const data = {
        size,
        type
    }
   try {
    const response: ResponseGenerator = yield call(
        rateServices.getLiveRatesByContainerTypeAndSize, 
        data
    )
    if(response.data) {
        yield put ({type: `${GET_RATE.SUCCESS}`, rates: response.data.data.rates})
    }
   } catch (error:any) {
    yield put({type: `${GET_RATE.FAILURE}`, error: error.message})
     errorHandler(error?.message)
   }
}

function* rateSaga() {
    yield takeEvery(GET_RATE.REQUEST, getLiveRateByTypeAndSize)
}

export default rateSaga