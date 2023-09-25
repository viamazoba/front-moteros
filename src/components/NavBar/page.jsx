/* eslint-disable arrow-body-style */
'use client'
import React, { useState, useContext, useEffect } from 'react';
import './NavBar.scss';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
// import { AppContext } from '../../store/AppContext';
import Image from 'next/image';

export const NavBar = ()=> {
  // const store = useContext(AppContext);
  // const {
  //   userData, handleSignOut, setUserData,
  // } = store;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const handleSignOut = () =>{
    console.log('Saliendo de la aplicación')
  }

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleUserMenuClick = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     setUserData([JSON.parse(localStorage.getItem('userData'))]);
  //   }
  // }, []);

  return (
    <div className="container-header">
      <header className="header">
        <div className='container-header__logo-container'>
          <Link href="/">
            <Image
              className="logo"
              src="/logo.svg"
              alt="logo"
              width={10}
              height={10}
            />
          </Link>
          <h2>Moteros</h2>
        </div>
        <div className='container-header__menu-options'>
          <ul>
            <Button className='container-header__option' href='/'>
              <li>Inicio</li>
            </Button>
            <Button className='container-header__option'>
              <li>Marcas</li>
            </Button>
            <Button className='container-header__option'>
              <li>Talleres</li>
            </Button>
            <Button className='container-header__option'>
              <li>Nosotros</li>
            </Button>
          </ul>
        </div>
        <div className="containerIcons">
          <FontAwesomeIcon
            className="menu"
            icon={faBars}
            onClick={handleMenuClick}
          />
          <FontAwesomeIcon
            className="menu"
            icon={faUser}
            onClick={handleUserMenuClick}
          />
        </div>
        <div
          className={
            isUserMenuOpen
              ? 'menu-dropdown'
              : 'menu-dropdown menu-dropdown--closed'
          }
        >
          {
          false //Aquí se hacía validación con datos usuario
          && (
          <>
            <div className="container-header__information">
              <div className="container-header__user-info">
                <div className="container-header__user-image">
                  <Image src={userData[0].user_img || 'https://icon-library.com/images/persona-icon/persona-icon-25.jpg'} alt="" />
                </div>
                <div className="container-header__user-data">
                  <p>{userData[0]?.user_name || 'Unknown'}</p>
                  <p>{localStorage.getItem('email') || ''}</p>
                </div>
              </div>
              <FontAwesomeIcon
                className="close"
                icon={faXmark}
                onClick={handleUserMenuClick}
                size="2x"
              />
            </div>
            <hr />
            <Link href="/" onClick={handleUserMenuClick}>Profile</Link>
            <Link href="/" onClick={handleSignOut}>Salir</Link>
          </>
          )}
          {
          // Aquí se hacia validación con los datos del usuario
          true
          && (
          <>
            <FontAwesomeIcon
              className="close"
              icon={faXmark}
              onClick={handleUserMenuClick}
              size="2x"
            />
            <hr />
            <Link href="/login" onClick={handleUserMenuClick}>Ingresar</Link>
            <Link href="/login" onClick={handleUserMenuClick}>Registrarse</Link>

          </>
          )}
        </div>
        <div
          className={
            isMenuOpen ? 'menu-dropdown' : 'menu-dropdown menu-dropdown--closed'
          }
        >
          <FontAwesomeIcon
            className="close"
            icon={faXmark}
            onClick={handleMenuClick}
            size="2x"
          />
          <hr />
          <a href="/">Inicio</a>
          <a href="/">Repuestos</a>
          <a href="/">Talleres</a>
        </div>
      </header>
    </div>
  );
}

export default NavBar;