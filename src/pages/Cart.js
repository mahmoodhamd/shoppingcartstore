import React from 'react';

import { useSelector,useDispatch} from 'react-redux';

import { DecrementQuantity, IncrementQuantity, remove } from '../store/Cartslice';

const Cart = () => {
    
    const  products = useSelector(state => state.cart);
   // const {cartItems}=useSelector((store)=>store.cart);
     const dispatch=useDispatch();
   
    const RemoveItem=(productid)=>
    { 
        
       dispatch(remove(productid));
       
    }
    const increment=(productid)=>{
        dispatch(IncrementQuantity(productid));
    }
    const decrement=(productid)=>{
        dispatch(DecrementQuantity(productid));
    }
   
    const getTotal=()=>{
        let totalQuantity=0;
        let totalPrice=0;
        products.map((item)=>{
            totalQuantity+=item.quantity;
            totalPrice+=item.price*item.quantity ;
            
        })
           
         return {totalPrice,totalQuantity}
    }
    
    
    return (
        <div>
            <h3>Cart</h3>
            <h3>Subtotal: {getTotal().totalPrice}</h3>
            {/* <strong>${getTotal().totalQuantity}</strong> */}
            
            <div className="cartWrapper">
                {products.map((product,id) => (
                    <div key={id} className="cartCard">
                    
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button onClick={()=>decrement(product.id)}>-</button>
                        <h2>{product.quantity}</h2>
                        <button onClick={()=>increment(product.id)}>+</button>
                        <button onClick={()=>RemoveItem(product.id)} className="btn">
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;