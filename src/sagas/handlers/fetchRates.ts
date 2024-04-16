import { call, put, takeLatest } from "redux-saga/effects";
import fetchGetRates from "../requests/fetchRates";


interface Payload {
    size: string;
    type: string
}

function* handleGetRates({payload}: any) : Generator {
    const {size, type} = payload
    try {
        const rates:any = yield call(fetchGetRates, size, type)
        yield put ({type: "GET_RATES_SUCCESS", rates: rates.data.rates})
    } catch (error:any) {
        yield put({type: "GET_RATES_FAILED", error: error.message})
    }
}

function* watcherUserSaga():Generator {
    yield takeLatest("GET_RATE_REQUESTED", handleGetRates);
}

export default watcherUserSaga;