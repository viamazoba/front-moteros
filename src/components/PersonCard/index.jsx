/* eslint-disable arrow-body-style */
'use client'

import { useState, useRef } from 'react';
import ImageLoading from '../ImageLoading';
import Image from 'next/image';
import './PersonCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { handleEditUser } from '@/redux/slices/userSlice';
import { useEditUserMutation } from '@/redux/services/userApi';

export const PersonCard = (props) => {
  const userData = useSelector((state) => state.userReducer)
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch()
  const [editUser] = useEditUserMutation()

const handleUserImageChange = async (event) => {
    const selectedFile = event.target.files[0];

    console.log('Esta es la referencia local de la imagen: ', selectedFile)

    if (selectedFile) {
      setImageIsLoading(true);
      const dataImage = new FormData();
      dataImage.append('file', selectedFile);
      dataImage.append('upload_preset', 'hotelImages');
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/drnclewqh/image/upload',
        {
          method: 'POST',
          body: dataImage,
        },
      );
      const file = await res.json();
      console.log('Esta es la url de la imagen: ', file.secure_url)
      const token = sessionStorage.getItem('token');
      const userData = JSON.parse(sessionStorage.getItem('userData'))
      userData.avatar = file.secure_url
      sessionStorage.removeItem('userData');
      sessionStorage.setItem('userData', JSON.stringify(userData));
      dispatch(handleEditUser({avatar: file.secure_url}))
      const data = {
        headers: {
          Authorization: token,
        },
        body: {avatar: file.secure_url},
      }
      const response = await editUser(data);
      console.log('Esta es la respuesta al editar Imagen: ', response)
      setImageIsLoading(false);
    }
  };

  return (
    <div className="person">
      <div className="person__card">
        <div className="profile-img-container">
          {imageIsLoading ? (
            <ImageLoading />
          ) : (
            <>
              <button
                type="button"
                className="profile-img-button"
                onClick={() => {
                  return fileInputRef.current.click();
                }}
              >
                <Image
                  src={
                    userData.value.avatar
                    || '/user_icon.png'
                  }
                  alt="profileImg"
                  className="profile-img"
                  width={100}
                  height={100}
                />
              </button>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleUserImageChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </>
          )}
        </div>
        <div className="person__card__info">
          <div>
            <h2 className="card__name">{userData.value.name || 'User Name'}</h2>
          </div>
          <div>
            <h3 className="email">{userData.value.email || 'example@moteros.com'}</h3>
          </div>
        </div>
        <div className="person__card__additional-info">
          <div>
            <a href="/profile-config-user" className="additional-link">
              Compras
            </a>
          </div>
          <div>
            <a href="/" className="additional-link">
              Likes
            </a>
          </div>
          <div>
            <a href="/user-booked-rooms" className="additional-link">
              Talleres
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;