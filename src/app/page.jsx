import Image from 'next/image'
import './Home.scss'
import React from 'react'
import WhyMoteros from '@/components/WhyMoteros/page'
import BrandsFleet from '@/components/BrandsFleet/page'

export const Home = () => {
  return (
    <>
      <WhyMoteros/>
      <BrandsFleet/>
    </>
  )
}

export default Home;

