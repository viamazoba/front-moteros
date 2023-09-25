'use client'
import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import './NavBar.scss'
import Image from "next/image";

const Navbar = () => {
  return (
    <AppBar position="static" className="container-navbar">
      <Toolbar>
        <IconButton color="inherit">
          <Image 
          src="/logo.svg" 
          alt="Icono"
          width={30}
          height={30}
          />
        </IconButton>
        <Typography variant="h4" color="inherit">
          Moteros
        </Typography>
        <Button color="inherit" className="container-navbar__button">
          Inicio
        </Button>
        <Button color="inherit" className="container-navbar__button">
          Acerca de
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;