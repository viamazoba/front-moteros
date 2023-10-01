'use client'

import React, { useState } from 'react'
import './PersonInformation.scss'

const PersonInformation = () => {

    const [userData, setUserData] = useState([{
        user_name: "Juan",
        gender: "Hombre",
        birthday: "24/8/1996"
    }])

    const emptyFields = '--------';

  return (

    <div className="ProfileConfigUser__container--infoTable">
        <div>
        <h2>Información Personal</h2>
        </div>
        <div>
        <table>
            <tbody>
            {userData.map((item) => {
                return (
                <>
                    <tr>
                    <th>
                        <b>Nombre</b>
                    </th>
                    <th>{item?.user_name || emptyFields}</th>
                    </tr>
                    <tr>
                    <th>
                        <b>Apellido</b>
                    </th>
                    <th>{item?.gender || emptyFields}</th>
                    </tr>
                    <tr>
                    <th>
                        <b>Fecha Nacimiento</b>
                    </th>
                    <th>{item?.birthday || emptyFields}</th>
                    </tr>
                    <tr>
                    <th>
                        <b>Género</b>
                    </th>
                    <th>{item?.address || emptyFields}</th>
                    </tr>
                    <tr>
                    <th>
                        <b>Cuidad</b>
                    </th>
                    <th>{item?.name_city || emptyFields}</th>
                    </tr>
                    {/* <tr>
                    <th>
                        <b>Zip</b>
                    </th>
                    <th>{item?.postal_code || emptyFields}</th>
                    </tr> */}
                </>
                );
            })}
            </tbody>
        </table>
        </div>
        <div />
        <div className='button-container'>
        <button
            className="ProfileConfigUser__container--buttonEditar"
            type="button"
            // onClick={() => {
            // return handleUserEdit(email || localStorage.getItem('email'));
            // }}
        >
            Editar
        </button>
        </div>
    </div>
  )
}

export default PersonInformation