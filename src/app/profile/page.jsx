/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, { useState } from 'react'
import './profile.scss'
import PersonCard from '@/components/PersonCard';
import PersonInformation from '@/components/PersonInformation';
import FormUserInfo from '@/components/FormUserInfo';

export const profile = () => {
  const [closeUserForm, setCloseUserForm] = useState(false)

  const handleWatchForm = ()=>{
    setCloseUserForm(!closeUserForm)
  }
    return (
        <div className="profile-container">
          <div>
            <PersonCard
              btn2="Hotels"
              className="PersonCard"
            />
          </div>
          <div className="ProfileConfigUser__container">
            <PersonInformation onHandleWatchForm = {handleWatchForm}/>
          </div>
          {closeUserForm && 
            <div className='form-container'>
            <FormUserInfo  onHandleWatchForm = {handleWatchForm}/>
            </div>}
        </div>
    );
}

export default profile