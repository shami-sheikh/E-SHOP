import {configureStore} from '@reduxjs/toolkit'
import productreducer from '../redux/Productslice.jsx'
import cartreducer from '../redux/Cartslice.jsx'
export const store=configureStore({
    reducer:{
product:productreducer,
cart:cartreducer,
    }
})