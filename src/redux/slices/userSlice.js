/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value :{

        name: '',
        lastName: '',
        birthday: '',
        avatar: '',
        gender: '',
        city: ''
    }
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        handleRegisterUser:  (state, { payload })=>{
            state.value.name = payload.data.name
            state.value.lastName = payload.data.lastName
            state.value.email = payload.data.email
        },
        handleEditUser: (state, { payload }) => {
            state.value = {
                ...state.value,
                ...payload
            }
        },

        handleUserLogOut: (state) =>{
            return initialState
        }
    }
})

export const {logIn, handleRegisterUser, handleEditUser, handleUserLogOut} = userSlice.actions;
export default userSlice.reducer;