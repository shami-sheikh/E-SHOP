import { createSlice } from "@reduxjs/toolkit";

const Productslice=createSlice({
    name:'product',
    initialState:{
product:[],
searchterm:'',
filteredata:[],
    },
    reducers:{
        setProducts:(state,action)=>{
            state.product=action.payload
        },
        setsearchterm:(state,action)=>{
            state.searchterm=action.payload
            state.filteredata=state.product.filter((item) =>
                item.name.toLowerCase().includes(state.searchterm.toLowerCase())
            )
        }
    }
})
export const {setProducts,setsearchterm}=Productslice.actions;
export default Productslice.reducer