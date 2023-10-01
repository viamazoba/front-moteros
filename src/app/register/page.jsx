'use client'

import React from 'react'
import './register.scss'
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import Image from 'next/image';

const register = () => {
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
            {/* <form onSubmit={handleClickSubmit}> */}
            <form>
              <h4>Crea tu cuenta</h4>
              <p>Ingresa tus datos para crear una cuenta</p>
    
              <div className="form-group name-group">
                <div className="firstname-group">
                  <label htmlFor="firstname">Tu Nombre</label>
                  <br />
                  <input
                    type="text"
                    id="firstname"
                    name="first_name"
                    required
                    placeholder="Nombre"
                    // onChange={handleSignInForm}
                    // value={signInForm.first_name}
                  />
                </div>
                <div className="lastname-group">
                  <input
                    type="text"
                    id="lastname"
                    name="last_name"
                    required
                    placeholder="Apellido"
                    // onChange={handleSignInForm}
                    // value={signInForm.last_name}
                  />
                </div>
              </div>
    
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <br />
                <input
                //   onChange={handleSignInForm}
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="ejemplo@moteros.com"
                //   value={signInForm.email}
                />
              </div>
              <div className='form-group profile-select'>
                <label htmlFor="perfil">
                  <p>Registrate como:</p>
                  <select name="perfil" id="perfil" placeholder='--------'>
                    <option value="Usuario">Usuario</option>
                    <option value="Taller">Taller</option>
                    <option value="Tienda">Tienda Repuestos</option>
                  </select>
                </label>
              </div>
              <div className="form-group password-group">
                <label htmlFor="password">Contraseña</label>
                <br />
                <input
                //   onChange={handleSignInForm}
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="***************"
                //   value={signInForm.password}
                />
              </div>
              <div className="form-group password-group">
                <label htmlFor="password">Confirmar Contraseña</label>
                <br />
                <input
                //   onChange={handleSignInForm}
                  type="password"
                  id="confirm-password"
                  name="password"
                  required
                  placeholder="***************"
                //   value={signInForm.password}
                />
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
                {/* <span onClick={handleShowAccess}>Ingresar</span> */}
                <span>Ingresar</span>
              </p>
            </form>
          </div>
          {/* <Modal showModal={modal.show} handleShowModal={() => setModal({ ...modal, show: false })}>
            <h2>{modal.title}</h2>
            <p>{modal.msg}</p>
            <div className="center">
              <button className="secondary-button" onClick={handleOkButton} type="button">Ok</button>
            </div>
          </Modal>
          <LoadingModal show={loadingModal} /> */}
        </div>
      );
}

export default register