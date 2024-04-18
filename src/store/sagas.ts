import {all, fork} from "redux-saga/effects"

import rateSaga from "./rates/saga"



export default function* rootSaga() {
    yield all([fork(rateSaga)])
}