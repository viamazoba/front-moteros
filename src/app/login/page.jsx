/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, { useState, useEffect } from 'react'
import './login.scss'
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import { useGetUserByEmailMutation } from '@/redux/services/userApi';
import { useDispatch } from 'react-redux';
import { handleUserLogIn } from '@/redux/slices/userSlice';
import { useRouter } from 'next/navigation';

export const login = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [invalidCredentials, setInvalidCredentials] = useState(false)
  const [showEmailhWarning, setShowEmailWarning] = useState(false);
  const [ getUserByEmail ] = useGetUserByEmailMutation();
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: ''
  })

  const handleSignInForm = (event) => {
    const { name, value } = event.target;
    setSignInForm({
      ...signInForm,
      [name]: value,
    });

    if(invalidCredentials){
      setInvalidCredentials(false)
    }
  };

  const handleClickSubmit =  async (e)=>{
    e.preventDefault()
    const response = await getUserByEmail(signInForm)
    if(response?.error?.status === 401){
      return setInvalidCredentials(true)
    }
     const {data} = response;
    dispatch(handleUserLogIn(data.body.data))
    sessionStorage.setItem('token', data.headers['Authorization'])
    sessionStorage.setItem('userData', JSON.stringify(data.body.data))
    router.push('/profile')
  }

  useEffect(() => {
    
    if(!emailPattern.test(signInForm.email) && signInForm.email){
      setShowEmailWarning(true)
    }else{
      setShowEmailWarning(false)
    }
  }, [signInForm.email]);

    return (
        <div className='signin-card'>
          <div className='access-main'>
            <div>
            </div>
            <div className='signin-card__logo-container'>
            <Image
              className="logo"
              src="/logo.svg"
              alt="logo"
              width={10}
              height={10}
              />
              <h2>Moteros</h2>
            </div>
            <form onSubmit={handleClickSubmit}>
              <h4>Iniciar sesión</h4>
              <p>Ingresa tu correo y contraseña para ingresar</p>
              <div className="form-group email-group">
                <label htmlFor="email">Correo Electrónico</label>
                <br />
                <input
                  onChange={handleSignInForm}
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="ejemplo@moteros.com"
                  value={signInForm.email}
                />
                {showEmailhWarning && <p className='validation-warning'>Ingrese un correo válido</p>}
              </div>
              <div className="form-group password-group">
                <label htmlFor="password">Contraseña</label>
                <br />
                <input
                  onChange={handleSignInForm}
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="***************"
                  value={signInForm.password}
                />
              </div>
              <div className="form-group">
                <div className="forgot">
                  <p>
                    Olvidaste tu contraseña?
                  </p>
                </div>
                  {invalidCredentials && <p className='validation-warning'>Credenciales inválidas</p>}
                <div className="btn">
                  <button className="signin-btn" type="submit">Ingresar</button>
                </div>
              </div>
              <h6 className="text-muted">Ingresar con: </h6>
              <div className="social">
                <div className="social-showcase">
                  <div className="btn-light facebook">
                    <div className="facebook">
                        <FaFacebookF />
                    </div>
                    <span>facebook</span>
                  </div>
                  <div className="btn-light google">
                    <div className="google">
                        <FaGoogle />
                    </div>
                    <span>google</span>
                  </div>
                </div>
              </div>
              <p className="text-center">
                ¿No tienes una cuenta?
                {/* <span onClick={handleShowAccess}>Create Account</span> */}
                <span>Crea una cuenta</span>
              </p>
            </form>
          </div>
          {/* <Modal
            showModal={modal.show}
            handleShowModal={() => setModal({ ...modal, show: false })}
          >
            <div className="center alert-icon">
              <FiAlertTriangle />
            </div>
            { loading
              ? (<Loading />)
              : (
                <>
                  <h2>{modal.title || 'Email verification'}</h2>
                  <p>{modal.msg}</p>
                  <div className="center">
                    <button className="secondary-button" onClick={() => setModal({ ...modal, show: false })} type="button">Ok</button>
                  </div>
                </>
              )}
          </Modal>
          <LoadingModal show={loadingModal} /> */}
        </div>


      );
    };


export default login