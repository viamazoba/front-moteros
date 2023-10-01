/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-body-style */

'use client'
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import './Footer.scss'

export const Footer =() => {
  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: (theme) =>
        //   theme.palette.mode === "light"
        //     ? theme.palette.grey[200]
        //     : theme.palette.grey[800],
        p: 6,
      }}
      className="footer-container"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" color="text.primary" gutterBottom>
              Sobre Nosotros
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Somos una página web que busca la integración de almacenes de repuestos, talleres y servicios confluentes al mercado de las
              motocicletas. 
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" color="text.primary" gutterBottom>
              Contáctanos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cra 23#12B97, Medellín, Colombia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: example@moteros.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Teléfono: +57 300950021
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" color="text.primary" gutterBottom>
              Síguenos
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Moteros
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;