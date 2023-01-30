import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
//import { useRef } from 'react';
import { filteredSearch } from '../store/Productslice';
const Navbar = () => {
    const dispatch=useDispatch();
    const items = useSelector((state) => state.cart);
   // const inputRef=useRef('');
     
    
    const searchitem=(event)=>{
        dispatch(filteredSearch(event.target.value));
        
    }
    
    // const Searchitems= () => {
    //     dispatch(filteredSearch());
    //     console.log("helloo"+inputRef.current.value);
    //  };

    return (
        <>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >    
            
            <span className="logo">REDUX STORE</span>
             <input onChange={searchitem} type="text"  placeholder='Serach...' /> 
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
        </>
    );
};

export default Navbar;