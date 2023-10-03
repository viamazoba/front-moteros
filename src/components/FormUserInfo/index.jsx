/* eslint-disable arrow-body-style */
'use client'

import React, { useState } from 'react'
import './FormUserInfo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { handleEditUser } from '@/redux/slices/userSlice';
import { useEditUserMutation } from '@/redux/services/userApi';

const FormUserInfo = ({onHandleWatchForm}) => {
  const userData = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const [editUser] = useEditUserMutation()
  const [formUserData, setFormUserData] = useState({...userData.value});
    
    const handleInputUserChange = (e) => {
    const { name, value } = e.target;
    setFormUserData({
        ...formUserData,
        [name]: value,
    });
    };
    
    const handleInfoUserSave = async () => {
    sessionStorage.removeItem('userData');
    dispatch(handleEditUser(formUserData))
    sessionStorage.setItem('userData', JSON.stringify(formUserData));
    const token = sessionStorage.getItem('token');

    const data = {
      headers: {
        Authorization: token,
      },
      body: {...formUserData},
    }
    await editUser(data);
    onHandleWatchForm()
    setFormUserData({})
    };

  return (
          <div className="form-user-container">
            <FontAwesomeIcon
              icon={faXmark}
              className="form-user-container__xmark"
              onClick={onHandleWatchForm}
            />
            <div>
              <label htmlFor="name">
                Nombre:
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formUserData.name}
                  onChange={handleInputUserChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="lastName">
                Apellido:
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formUserData.lastName}
                  onChange={handleInputUserChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="birthday">
                Fecha Nacimiento:
                <input
                  id="birthday"
                  type="date"
                  name="birthday"
                  value={formUserData.birthday}
                  onChange={handleInputUserChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="gender">
                <p>Género</p>
                <select name="gender" 
                id="gender" 
                placeholder='--------'
                value={formUserData.gender}
                onChange={handleInputUserChange}
                > 
                  <option value="">Selecciona un género</option>
                  <option value="Hombre">Hombre</option>
                  <option value="Mujer">Mujer</option>
                  <option value="Otro">Otro</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="city">
                <p>Cuidad</p>
                <select name="city" 
                id="city" 
                placeholder='--------'
                value={formUserData.city}
                onChange={handleInputUserChange}
                > 
                  <option value="">Selecciona una cuidad</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Bogotá">Bogotá</option>
                </select>
              </label>
            </div>
            <div>
              <button type="button" onClick={handleInfoUserSave}>
                Guardar
              </button>
            </div>
          </div>
  )
}

export default FormUserInfo