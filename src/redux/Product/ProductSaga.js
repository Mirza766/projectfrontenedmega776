import {takeLatest,call,put} from 'redux-saga/effects'
import { GET_PRODUCT_DATA,SET_PRODUCT_DATA } from './ProductConstants'
import { useEffect } from 'react';




function *getProducts(){
// const response=yield call(fetch,"http://localhost:4000/movie")

const response=yield call(fetch,"/db/moviedb.json")
const payload=yield response.json();
yield put({type:SET_PRODUCT_DATA,payload:payload.movie});
}



function *productSaga(){
yield takeLatest(GET_PRODUCT_DATA,getProducts)

}


export default productSaga
