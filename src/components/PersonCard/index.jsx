'use client'

import { useState, useRef } from 'react';
// import { AppContext } from '../../store/AppContext';
import ImageLoading from '../ImageLoading';
import Image from 'next/image';
import './PersonCard.scss';

export const PersonCard = (props) => {
//   const store = useContext(AppContext);
//   const {
//     userData, fileInputRef, handleUserImageChange, imageIsLoading,
//   } = store;
//   const { btn2, userName } = props;
const [imageIsLoading, setImageIsLoading] = useState(false);
const [userData, setUserData] = useState([])
const fileInputRef = useRef(null);

const handleUserImageChange = async (event) => {
    const selectedFile = event.target.files[0];

    console.log('Esta es la referencia local de la imagen: ', selectedFile)

    if (selectedFile) {
      setImageIsLoading(true);
      const data = new FormData();
      data.append('file', selectedFile);
      data.append('upload_preset', 'hotelImages');
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/drnclewqh/image/upload',
        {
          method: 'POST',
          body: data,
        },
      );
      const file = await res.json();
      console.log('Esta es la url de la imagen: ', file)
    //   const token = localStorage.getItem('token');
    //   await editUserImage(token, file.secure_url);
    //   localStorage.removeItem('userData');

    //   const found = await getUserByEmail(
    //     email || localStorage.getItem('email'),
    //   );
    //   localStorage.setItem('userData', JSON.stringify(found.data.user));
    //   setUserData([{ ...found.data.user }]);
      setImageIsLoading(false);

    //   setImageUser(file.secure_url);
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
                    userData[0]?.user_img
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
            <h2 className="card__name">{userData[0]?.name || 'User Name'}</h2>
          </div>
          <div>
            <h3 className="email">{localStorage.email || 'example@moteros.com'}</h3>
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