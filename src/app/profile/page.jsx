/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, { useState } from 'react'
import './profile.scss'
import PersonCard from '@/components/PersonCard';
import PersonInformation from '@/components/PersonInformation';
import FormUserInfo from '@/components/FormUserInfo';

export const profile = () => {
  const [closeUserForm, setCloseUserForm] = useState(false)
    return (
        <div className="profile-container">
          <div>
            <PersonCard
              btn2="Hotels"
            //   userName={userData[0]?.user_name || emptyFields}
              className="PersonCard"
            />
          </div>
          <div className="ProfileConfigUser__container">
            <PersonInformation />
          </div>
          {closeUserForm && 
            <div className='form-container'>
            <FormUserInfo />
            </div>}
        </div>
    );
}

export default profile