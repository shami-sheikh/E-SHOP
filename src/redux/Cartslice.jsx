import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const Cartslice=createSlice({
    name:'cart',
    initialState:{
        product:[],
        totalqty:0,
        totalprice:0,
    },
    reducers:{
       addtocart: (state, action) => {
        const newitems = action.payload;
        const itemsIndex = state.product.find(item => item.id === newitems.id);
        if (itemsIndex) {
            itemsIndex.quantity += newitems.quantity || 1;
            itemsIndex.totalprice += newitems.price * (newitems.quantity || 1);
        } else {
            state.product.push({
                id: newitems.id,
                name: newitems.name,
                price: newitems.price,
                quantity: newitems.quantity || 1,
                totalprice: newitems.price * (newitems.quantity || 1),
                image: newitems.image,
            });
        }
        state.totalprice += newitems.price * (newitems.quantity || 1);
        state.totalqty += newitems.quantity || 1;
       },
       removeItems: (state, action) => {
        const id = action.payload;
        const FindIndex = state.product.find(item => item.id === id);
        if (FindIndex) {
            state.totalprice -= FindIndex.totalprice;
            state.totalqty -= FindIndex.quantity;
            state.product = state.product.filter((item) => item.id !== id);
        }
       },
       addcartitem:(state,action)=>{
         const id = action.payload;
        const FindIndex = state.product.find(item => item.id === id);
        if(FindIndex){
            FindIndex.quantity++;
            state.totalprice +=FindIndex.price
            state.totalqty++;
            FindIndex.totalprice += FindIndex.price
        }
       },
       removecartitems:(state,action)=>{
          const id = action.payload;
        const FindIndex = state.product.find(item => item.id === id);
        if(FindIndex && FindIndex.quantity>1 ){
            FindIndex.quantity--;
            state.totalprice -= FindIndex.price
            state.totalqty--;
            FindIndex.totalprice -= FindIndex.price
        }else {
            toast.error('Minimum quantity is 1')
        }
       }
    }
})
export const {addtocart,removeItems,addcartitem,removecartitems}=Cartslice.actions;
export default Cartslice.reducer