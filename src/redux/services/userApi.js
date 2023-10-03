/* eslint-disable arrow-body-style */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://backend-moteros.onrender.com/'
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userData) => ({
                url: 'api/user',
                method: 'POST',
                body: userData
            })
        }),

        editUser: builder.mutation({
            query: (userData) => ({
                url: 'api/user',
                method: 'PUT',
                body: userData.body,
                headers: userData.headers
            })
        }),

        getUserByEmail: builder.mutation({
            query: (userData) =>({
                url: 'api/user/login',
                method: 'POST',
                body: userData
            })
        }),

        getUserById: builder.query({
            query: ({id}) => `users/${id}`  // Aquí recibes un parámetro para la petición
        })
    })
})

export const {useLazyGetUserByIdQuery, useRegisterUserMutation, useEditUserMutation, useGetUserByEmailMutation} = userApi // Estás son las funciones creadas anteriormente, pero convertidas en hooks (redux lo hace)