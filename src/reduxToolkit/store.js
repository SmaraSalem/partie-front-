import {configureStore}from '@reduxjs/toolkit'
import usersReducer  from './sliceUsers'
import productsReducer from './sliceProducts'
export const store = configureStore({
    reducer : {
        users :usersReducer,
        products : productsReducer
        
    }
})