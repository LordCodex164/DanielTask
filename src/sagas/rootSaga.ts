import { all } from "redux-saga/effects";
import watcherUserSaga from "./handlers/fetchRates";

export default function* rootSaga() {
  yield all([watcherUserSaga()]);
}
