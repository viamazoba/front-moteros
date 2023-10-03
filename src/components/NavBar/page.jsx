/* eslint-disable arrow-body-style */
'use client'
import React, { useState } from 'react';
import './NavBar.scss';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { handleUserLogOut } from '@/redux/slices/userSlice';

export const NavBar = ()=> {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.userReducer.value)
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const handleUserMenuClick = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };
  const handleSignOut = () =>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userData')
    handleUserMenuClick()
    dispatch(handleUserLogOut)
  }

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };


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
          sessionStorage.getItem('token')
          && (
          <>
            <div className="container-header__information">
              <div className="container-header__user-info">
                <div className="container-header__user-image">
                  <Image 
                  src={userData.avatar || '/user_icon.png'} 
                  alt="Person avatar" 
                  width={50}
                  height={50}
                  />
                </div>
                <div className="container-header__user-data">
                  <p>{userData.name || 'Unknown'}</p>
                  <p>{userData.email || 'example@gmail.com'}</p>
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
            <Link href="/profile" onClick={handleUserMenuClick}>Perfil</Link>
            <a href="/" onClick={handleSignOut}>Salir</a>
          </>
          )}
          {
          !sessionStorage.getItem('token')
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
            <Link href="/register" onClick={handleUserMenuClick}>Registrarse</Link>

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
          <Link href="/">Inicio</Link>
          <Link href="/">Repuestos</Link>
          <Link href="/">Talleres</Link>
        </div>
      </header>
    </div>
  );
}

export default NavBar;