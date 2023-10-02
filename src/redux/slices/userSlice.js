/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    name: '',
    lastName: '',
    birthday: '',
    token: '',
    gender: '',
    city: ''
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        handleRegisterUser:  (state, { payload })=>{
            state.name = payload.data.name
            state.lastName = payload.data.lastName
            state.email = payload.data.email
        },
        logOut: () => {
            return initialState
        },

        logIn: (state, action) =>{
            return {
                value:{
                    name: action.payload?.name,
                    lastName: action.payload?.lastName
                }
            }
        }
    }
})

export const {logIn, logOut, handleRegisterUser} = userSlice.actions;
export default userSlice.reducer;