/* eslint-disable arrow-body-style */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, { useState, useEffect } from 'react'
import './register.scss'
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import { useRegisterUserMutation } from '@/redux/services/userApi';
import { handleRegisterUser } from '@/redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';


const register = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  // const nombre = useSelector((state) => state.userReducer.name)
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [showMatchWarning, setShowMatchWarning] = useState(false);
  const [showEmailhWarning, setShowEmailWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [signInForm, setSignInForm] = useState({
    name: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: '',
  });

  const [registerUser] = useRegisterUserMutation();

  const handleSignInForm = (event) => {
    const { name, value } = event.target;
    setSignInForm({
      ...signInForm,
      [name]: value,
    });
  };

  const handleInfoRegister =  async (e)=>{
    e.preventDefault()
    const { data } = await registerUser(signInForm)
    dispatch(handleRegisterUser(data.body))
    sessionStorage.setItem('token', data.headers['Authorization'])
    sessionStorage.setItem('userData', JSON.stringify(data.body.data))
    router.push('/profile')
  }

  useEffect(() => {
    if (signInForm.password !== signInForm.confirmPassword) {
      setShowMatchWarning(true);
    } else {
      setShowMatchWarning(false);
    }

    if(!emailPattern.test(signInForm.email) && signInForm.email){
      setShowEmailWarning(true)
    }else{
      setShowEmailWarning(false)
    }
  }, [signInForm.password, signInForm.confirmPassword, signInForm.email]);


    return (
        <div className='signup-card'>
          <div className='access-main'>
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
            <form onSubmit={handleInfoRegister}>
              <h4>Crea tu cuenta</h4>
              <p>Ingresa tus datos para crear una cuenta</p>
    
              <div className="form-group name-group">
                <div className="firstname-group">
                  <label htmlFor="firstname">Tu Nombre</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Nombre"
                    onChange={handleSignInForm}
                    value={signInForm.name}
                  />
                </div>
                <div className="lastname-group">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Apellido"
                    onChange={handleSignInForm}
                    value={signInForm.lastName}
                  />
                </div>
              </div>
    
              <div className="form-group">
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
              <div className='form-group profile-select'>
                <label htmlFor="role">
                  <p>Registrate como:</p>
                  <select name="role" 
                  id="role" 
                  placeholder='--------'
                  onChange={handleSignInForm}
                  value={signInForm.role}
                  required
                  >
                    <option value="">Selecciona un rol</option>
                    <option value="user">Usuario</option>
                    <option value="Taller" disabled>Taller</option>
                    <option value="Tienda" disabled>Tienda Repuestos</option>
                  </select>
                </label>
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
              <div className="form-group password-group">
                <label htmlFor="confirm-password">Confirmar Contraseña</label>
                <br />
                <input
                  onChange={handleSignInForm}
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  required
                  placeholder="***************"
                  value={signInForm.confirmPassword}
                />
                {showMatchWarning && <p className='validation-warning'>Las contraseñas no coinciden</p>}
              </div>
              <div className="form-group">
                <div className="btn">
                  <button className="signup-btn" type="submit">Crear Cuenta</button>
                </div>
              </div>
              <h6 className="text-muted">O Ingresa Con</h6>
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
                ¿Ya tienes una cuenta?
                <span onClick={() => router.push('/login')}>Ingresar</span>
              </p>
            </form>
          </div>
          {/* {isLoading && <Loading/>} */}
        </div>
      );
}

export default register