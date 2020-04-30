import {createStore,applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'

import logger from 'redux-logger'
import rootReducer from '../root-reducer'

const middlewares =[logger]; //really handy middleware

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store,persistor}

