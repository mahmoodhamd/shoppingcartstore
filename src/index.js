import React from 'react';
import ReactDOMClient from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';
let persistor=persistStore(store);
const container =document.getElementById('root');
const root =ReactDOMClient.createRoot(container);
root.render(
<BrowserRouter>
<Provider store={store}>
<PersistGate persistor={persistor}>
<App/>
</PersistGate>
</Provider>
</BrowserRouter>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
