'use client'

import Image from 'next/image'
import './Home.scss'
import React from 'react'
import WhyMoteros from '@/components/WhyMoteros/page'
import BrandsFleet from '@/components/BrandsFleet/page'
import BannerHome from '@/components/BannerHome/page'
import CardWorkShop from '@/components/CardWorkShop'
import CardBlog from '@/components/CardBlog'
// import {useGetUsersQuery} from '@/redux/services/userApi'

export const Home = () => {

  // const {data, error, isLoading, isFetching} = useGetUsersQuery()
  // console.log('Esta es tu dirección del backend: ', process.env.BAKEND_URL)
  // if(isLoading || isFetching) return console.log('está cargando');
  // if(error) return console.log('Se dió un error');
  // if(data) return console.log('Este es el resultado: ',data);
  return (
    <main className='home-container'>
      <BannerHome/>
      <WhyMoteros/>
      <BrandsFleet/>
      <CardWorkShop/>
      <CardBlog/>
    </main>
  )
}

export default Home;

