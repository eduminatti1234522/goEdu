import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
}

export const counterSlice = createSlice({
    name: 'setUser',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
        storeUser: (state, action) => {
            state.user += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { storeUser } = counterSlice.actions

export default counterSlice.reducer