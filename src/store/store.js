import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './Cartslice';

import  productReducer from './Productslice';

import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from '@reduxjs/toolkit'
import { apiSlice } from "../features/Apislice";
import storage from 'redux-persist/lib/storage'


import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['apiProductSlice'],
}
export const rootReducers = combineReducers({
  cart: cartReducer,
  product:productReducer,

  [apiSlice.reducerPath]: apiSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
})
setupListeners(store.dispatch)
export default store;















// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, cartReducer)
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })


// const store=configureStore({

//    reducer:{
//       cart:cartReducer,
//       product:productReducer,
//    },


// });

// //export const persistor=persistStore(store);
// export default store; 
