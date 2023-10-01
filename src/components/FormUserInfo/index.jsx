'use client'

import React, { useState } from 'react'
import './FormUserInfo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const FormUserInfo = () => {
    const [formUserData, setFormUserData] = useState({});

    const handleUserEdit = (userName) => {
        setUserEditId(userName);
    
        setFormUserData(userData[0]);
    };
    
    const handleInputUserChange = (e) => {
    const { name, value } = e.target;
    setFormUserData({
        ...formUserData,
        [name]: value,
    });
    };
    
    const handleInfoUserSave = async () => {
    localStorage.removeItem('userData');
    setUserData([formUserData]);
    localStorage.setItem('userData', JSON.stringify(formUserData));
    const token = localStorage.getItem('token');
    await editUserProfile(token, formUserData);
    setUserEditId(null);
    setFormUserData({});
    };

  return (
          <div className="form-user-container">
            <FontAwesomeIcon
              icon={faXmark}
              className="form-user-container__xmark"
              // onClick={handleClickImage}
            />
            <div>
              <label htmlFor="name">
                Nombre:
                <input
                  id="name"
                  type="text"
                  name="user_name"
                  value={formUserData.user_name}
                  onChange={handleInputUserChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="gender">
                Apellido:
                <input
                  id="gender"
                  type="text"
                  name="gender"
                  value={formUserData.gender}
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
              <label htmlFor="genero">
                <p>Género</p>
                <select name="genero" id="genero" placeholder='--------'>
                  <option value="Hombre">Hombre</option>
                  <option value="Mujer">Mujer</option>
                  <option value="Otro">Otro</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="cuidad">
                <p>Cuidad</p>
                <select name="cuidad" id="cuidad" placeholder='--------'>
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