import {configureStore} from '@reduxjs/toolkit'
import rootReducer from '../rootReducer/rootReducer'
import { saveState } from './LocalStoragePersisitence/SaveState'
import { loadState } from './LocalStoragePersisitence/LoadState'
import createSagaMiddleware from 'redux-saga'
import productSaga from '../redux/Product/ProductSaga'



const SagaMiddleware=createSagaMiddleware();
const store=configureStore({reducer:rootReducer,
    middleware:()=>[SagaMiddleware],
    // preloadedState:loadState()
})
SagaMiddleware.run(productSaga)

// store.subscribe(()=>{
//     saveState(store.getState());
// })
export default store