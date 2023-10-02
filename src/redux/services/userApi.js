/* eslint-disable arrow-body-style */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://jsonplaceholder.typicode.com/'
        // baseUrl: process.env.BACKEND_URL
        baseUrl: 'http://localhost:8080/'
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

        getUserById: builder.query({
            query: ({id}) => `users/${id}`  // Aquí recibes un parámetro para la petición
        })
    })
})

export const {useLazyGetUserByIdQuery, useRegisterUserMutation, useEditUserMutation} = userApi // Estás son las funciones creadas anteriormente, pero convertidas en hooks (redux lo hace)