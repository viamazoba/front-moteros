import Image from 'next/image'
import './Home.scss'
import React from 'react'
import WhyMoteros from '@/components/WhyMoteros/page'
import BrandsFleet from '@/components/BrandsFleet/page'
import BannerHome from '@/components/BannerHome/page'
import CardWorkShop from '@/components/CardWorkShop'

export const Home = () => {
  return (
    <>
      <BannerHome/>
      <WhyMoteros/>
      <BrandsFleet/>
      <CardWorkShop/>
    </>
  )
}

export default Home;

