import React from 'react'
import SliceCard from '../components/sliceItems/SliceCard'
import Navbar from '../components/Header/Navbar'
import Banner from '../components/Header/Banner'
import imageUrl from '../../src/assets/ban.png'

import Footer from '../components/footer/Footer'
import AnotherPage from '../components/recentlyRecepies/RecentlyViews'


const HomePage = () => {
  return (
    <div className=''>
      <Navbar />


      <Banner imageUrl={imageUrl} title="Get Inspired, Cook with passion and enjoy unforgettable moments at the table" />
      <SliceCard />

      <AnotherPage />
      <Footer />
 
    </div>
  )
}

export default HomePage