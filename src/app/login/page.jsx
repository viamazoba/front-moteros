'use client'

import React from 'react'
import './login.scss'
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import Image from 'next/image';

export const login = () => {
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
            <form>
            {/* <form onSubmit={handleClickSubmit}> */}
              <h4>Iniciar sesión</h4>
              {/* <p>Enter your email & password to login</p> */}
              <p>Ingresa tu correo y contraseña para ingresar</p>
              <div className="form-group email-group">
                <label htmlFor="sign-in-email">Correo Electrónico</label>
                <br />
                <input
                //   onChange={handleLoginForm}
                  type="email"
                  id="sign-in-email"
                  name="email"
                  required
                  placeholder="example@moteros.com"
                //   value={loginForm.email}
                />
              </div>
              <div className="form-group password-group">
                <label htmlFor="sign-in-password">Contraseña</label>
                <br />
                <input
                //   onChange={handleLoginForm}
                  type="password"
                  id="sign-in-password"
                  name="password"
                  required
                  placeholder="***************"
                //   value={loginForm.password}
                //   value={loginForm.password}
                />
              </div>
              <div className="form-group">
                <div className="forgot">
                  <p>
                    Olvidaste tu contraseña?
                  </p>
                </div>
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