import {call, put, takeEvery} from "redux-saga/effects"
import {GET_ORDERS} from "../actions/action-types";
import {showLoader} from "../actions/orders";
import axios from "axios";

export let helloSaga = function* () {
   yield takeEvery(LIST_ORDERS, sagaWorker)
}
function* sagaWorker() {
    console.log('Hello Sagas!')
    // yield put(showLoader() )
    // const payload = yield call(listOrders())
    // yield put({type: LIST_ORDERS, payload})
    // yield put(showLoader())
}

const API_URL = "http://cryptoman.wansiedler.com.loc/api/";
async function listOrders() {
    const URI = API_URL + "orders/"
    // console.log(URI)
    await axios.get(URI,
        {
            crossDomain: true
        })
        .then(response => {
            if (response.status > 400) {
                console.error("> 400: " + error)
                // dispatch({type: SHOW_ALERT, payload: error})
            }
            return response.data;
            // dispatch({type: LIST_ORDERS, payload: data})
            // dispatch(hideLoader())
            // dispatch(showAlert("Orders Loaded!"))
        })
        .catch(error => {
            console.error("FAIL: " + error)
            // dispatch({type: SHOW_ALERT, payload: error})
        })
}