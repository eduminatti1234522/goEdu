import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
        user: null,
        isError: false,
        isLoading: false,
        isSuccess: false,
        message: "",
    }
    // export const createGoal = createAsyncThunk(
    //   'goals/create',
    //   async (goalData, thunkAPI) => {
    //     try {
    //       const token = thunkAPI.getState().auth.user.token
    //       return await goalService.createGoal(goalData, token)
    //     } catch (error) {
    //       const message =
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString()
    //       return thunkAPI.rejectWithValue(message)
    //     }
    //   }
    // )

// // Get user goals
// export const getGoals = createAsyncThunk(
//   'goals/getAll',
//   async (_, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await goalService.getGoals(token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// // Delete user goal
// export const deleteGoal = createAsyncThunk(
//   'goals/delete',
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await goalService.deleteGoal(id, token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )
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
        reset: () => {
            state.isError = false,
                state.isLoading = false,
                state.isSuccess = false,
                state.message = ""
        },
        storeUser: (state, action) => {
            state.user += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { storeUser, reset } = counterSlice.actions

export default counterSlice.reducer