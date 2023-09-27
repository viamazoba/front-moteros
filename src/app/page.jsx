import Image from 'next/image'
import './Home.scss'
import React from 'react'
import WhyMoteros from '@/components/WhyMoteros/page'
import BrandsFleet from '@/components/BrandsFleet/page'
import BannerHome from '@/components/BannerHome/page'

export const Home = () => {
  return (
    <>
      <BannerHome/>
      <WhyMoteros/>
      <BrandsFleet/>
    </>
  )
}

export default Home;

