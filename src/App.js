import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
//import persistStore from 'redux-persist';
//import { PersistGate } from 'redux-persist/integration/react';




// const initialarray=[12,15,17,18];
// const number=initialarray.filter(num=>num<17);
// //console.log(number);
//let persistor=persistStore(store);
function App() {
 
  return (
    <div className="App">
     {/* <Provider store ={store}>
       */}
  
     <Navbar/>
      <Routes>
     
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/cart" element={<Cart/>} ></Route>

     </Routes>

    
     
     
       {/* </Provider> */}
    </div>
  );
}

export default App;
