import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './mainStates'

export const store = configureStore({
    reducer: {
        main: counterReducer
    },
})