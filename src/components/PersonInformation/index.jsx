/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
'use client'

import React from 'react'
import './PersonInformation.scss'
import { useDispatch, useSelector } from 'react-redux';

const PersonInformation = ({onHandleWatchForm}) => {
    const userData = useSelector((state) => state.userReducer)

    const emptyFields = '--------';

  return (

    <div className="ProfileConfigUser__container--infoTable">
        <div>
        <h2>Información Personal</h2>
        </div>
        <div>
        <table>
            <tbody>
            <tr>
                <th>
                    <b>Nombre</b>
                </th>
                <th>{userData.value.name || emptyFields}</th>
                </tr>
                <tr>
                <th>
                    <b>Apellido</b>
                </th>
                <th>{userData.value.lastName || emptyFields}</th>
                </tr>
                <tr>
                <th>
                    <b>Fecha Nacimiento</b>
                </th>
                <th>{userData.value.birthday || emptyFields}</th>
                </tr>
                <tr>
                <th>
                    <b>Género</b>
                </th>
                <th>{userData.value.gender || emptyFields}</th>
                </tr>
                <tr>
                <th>
                    <b>Cuidad</b>
                </th>
                <th>{userData.value.city || emptyFields}</th>
                </tr>
            </tbody>
        </table>
        </div>
        <div />
        <div className='button-container'>
        <button
            className="ProfileConfigUser__container--buttonEditar"
            type="button"
            onClick={onHandleWatchForm}
        >
            Editar
        </button>
        </div>
    </div>
  )
}

export default PersonInformation