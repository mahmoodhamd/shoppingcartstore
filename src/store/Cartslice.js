import { useEffect } from 'react';
const { createSlice } = require('@reduxjs/toolkit');




const Cartslice = createSlice({


    name: 'cart',
    initialState:[],
      
    
    reducers: {
        add(state, action) {
            const itemInCart = state.find((item) => item.id === action.payload.id);
          if (itemInCart) {
          itemInCart.quantity++;
          console.log('hello'+itemInCart.quantity);
         } else {
        state.push({ ...action.payload, quantity: 1 });
         }
        },
 

         IncrementQuantity(state,action){
            const items=state.find((item)=>item.id===action.payload);
            
              items.quantity++;
              console.log("dd"); 
            
         },
         DecrementQuantity(state,action){
          const items=state.find((item)=>item.id===action.payload);
              if(items.quantity===1){
                items.quantity=1;
              }
              else{
                items.quantity--;
              }      

         },
      

        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
      
      
  
      },
     

});


export const { add, remove,subtotal,IncrementQuantity,DecrementQuantity,UsingtheEffect} = Cartslice.actions;
export default Cartslice.reducer;